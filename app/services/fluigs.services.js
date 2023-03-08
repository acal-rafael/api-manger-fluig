import { cadFluigs } from "../models/fluigs.model.js";

export const getAll = async () => {
  try {
    return await cadFluigs.findAll();
  } catch (error) {
    console.log(error);
    return;
  }
}