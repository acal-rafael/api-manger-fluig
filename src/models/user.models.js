import { Sequelize } from "sequelize";
import { conn } from '../../config/sequelize.js';

export const CadUserAPI = conn.define(
  "CAD_USER_API",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    senha:  {
      type: Sequelize.STRING,
      allowNull: false,
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    authe: {
      type: Sequelize.BIGINT,
      allowNull: true,
    },
    autho: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  }
);