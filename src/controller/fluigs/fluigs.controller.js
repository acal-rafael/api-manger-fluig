import { getAll, createOne } from "../../services/fluigs.services.js";

const fluigsController = () => {


  const getAllFluigs = async (req, res) => {
    let result = await getAll();
    console.log(result)

    if (!result) {
      return res.status(403).json({ status: "failed", result });
    }

    return res.status(200).json({ status: 'success', result: [ ...result ] });
  } 

  const postOneFluig = async (req, res) => {
    const { fluig, descricao, solicitante } = req.body;
    let result = await createOne({ fluig, descricao, solicitante });

    if (!result) {
      return res.status(403).json({ status: "failed", result });
    }

    return res.status(200).json({ status: "success", result });
  }

  return {
    getAllFluigs,
    postOneFluig,
  };
}

export default fluigsController;