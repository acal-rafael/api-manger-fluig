import { getAll, getOne, postOne, deleteOne } from "../../services/user.service.js";

const userController = () => {

  const getAllUsers = async (req, res) => {
    let result = await getAll();
    console.log(result);
    if (!result) {
      return res.status(403).json({ status: "failed", result });
    }
    return res.status(200).json({ status: "success", result: [...result] });
  }

  const getOneUser = async (req, res) => {
    const { id } = req.params;
    let result = await getOne(id);
    if (!result) {
      return res.status(403).json({ status: "failed", result });
    }
    return res.status(200).json({ status: "success", result });
  }

  const postOneUser = async (req, res) => {
    const { nome, login, senha, email } = req.body;
    if (!nome && !login && !senha && !email) {
      console.log("Someone fields is empty!");
      return res.status(403).json({ status: "failed", result });
    }

    let result = await postOne({ nome, login, senha, email });

    if (!result) return res.status(403).json({ status: "failed", result });
    
    console.log(result._options.isNewRecord);
    return res.status(201).json({ 
      status: "success", 
      result: `User ${result.dataValues.nome} registed!` 
    });
  }

  const deleteOneUser = async (req, res) => {
    const { id } = req.params;
    console.log("id: ", id);
    if (!id) {
      console.log("Someone fields is empty or underfine!");
      return res.status(403).json({ status: "failed", result });
    }

    let result = await deleteOne(id);

    if (!result) { 
      return res.status(403).json({ status: "failed", result });
    }

    console.log(result);
    return res.status(201).json({
      status: "success",
      result: `User deleted!`,
    });
  }

  return {
    getAllUsers,
    getOneUser,
    postOneUser,
    deleteOneUser,
  };
}

export default userController;