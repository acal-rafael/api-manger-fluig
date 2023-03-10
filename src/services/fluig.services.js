import { CadFluig } from "../models/fluig.model.js";

export const getAll = async () => {
  try {
    return await CadFluig.findAll();
  } catch (error) {
    console.log(error);
    return;
  }
}

export const createOne = async (data) => {
  try {
    return await CadFluig.create(data);
  } catch (error) {
    console.log(error);
    return;
  }
}