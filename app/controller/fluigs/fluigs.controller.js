import { getAll } from "../../services/fluigs.services.js";

const fluigsController = () => {


  const getAllFluigs = async (req, res) => {
    let result = await getAll();
    console.log(result)

    if (!result) {
      return res.status(403).json({ status: "failed", result });
    }

    return res.status(200).json({ status: 'success', result: [ ...result ] });
  } 

  return {
    getAllFluigs,
  };
}

export default fluigsController;