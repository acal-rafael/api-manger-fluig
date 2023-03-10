import { Router } from 'express';
import { home, fluig, user } from '../controller/index.js';
import { setCors } from '../middles/cors.js';


export const routes = () => {

  const { postCors } = setCors();

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
      .post("/v1/fluig", postCors, fluig().postOneFluig)

      // User:
      .post("/v1/user", user().postOneUser)

      // DELETE:
      // User:
      .delete("/v1/user/:id", user().deleteOneUser)
  );
} 

