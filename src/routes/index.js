import { Router } from 'express';
import { home, fluig, user } from '../controller/index.js';

export const routes = () => {
  return (
    Router()
      .all("/")

      // GET
      // Home
      .get("/", home().getHome)

      // Fluig:
      .get("/v1/fluigs", fluig().getAllFluigs)

      // User:
      .get("/v1/users", user().getAllUsers)
      .get("/v1/user/:id", user().getOneUser)

      // POST:
      // Fluig:
      .post("/v1/fluig", fluig().postOneFluig)

      // User:
      .post("/v1/user", user().postOneUser)

      // DELETE:
      // User:
      .delete("/v1/user/:id", user().deleteOneUser)
  );
} 

