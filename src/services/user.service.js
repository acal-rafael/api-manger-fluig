import { CadUserAPI } from "../models/user.models.js";

export const getAll = async () => {
  try {
    return await CadUserAPI.findAll({ 
      attributes: ['id','nome','login','email','authe','autho'] 
    });
  } catch (error) {
    console.log(error);
    return;
  }
}

export const getOne = async (id) => {
  try {
    return await CadUserAPI.findOne({ where: { id }});
  } catch (error) {
    console.log(error);
    return;
  }
}

export const postOne = async (data) => {
  try {
    return await CadUserAPI.create(data);
  } catch (error) {
    console.log(error);
    return;
  }
}

export const updateOne = async (data, id) => {
  try {
    return await CadUserAPI.update({ data }, {
      where: { id: id }
    })
  } catch (error) {
    console.log(error);
    return;
  }
}

export const deleteOne = async (id) => {
  try {
    return await CadUserAPI.destroy({ where: { id }});
  } catch (error) {
    console.log(error);
    return;
  }
}