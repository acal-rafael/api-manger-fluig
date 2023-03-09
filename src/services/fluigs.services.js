import { cadFluigs } from "../models/fluigs.model.js";

export const getAll = async () => {
  try {
    return await cadFluigs.findAll();
  } catch (error) {
    console.log(error);
    return;
  }
}

export const createOne = async (data) => {
  try {
    return await cadFluigs.create(data)
  } catch (error) {
    console.log(error);
    return;
  }
}