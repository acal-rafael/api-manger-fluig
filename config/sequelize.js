import Sequelize from 'sequelize';
import { setup } from './setup.js';

const { db } = setup;

export const conn = new Sequelize(
  db.base,
  db.user,
  db.pass, 
  {
    host: db.host,
    dialect: 'mssql'
  }
)