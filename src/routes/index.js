import { Router } from 'express';
import { home, fluigs } from '../controller/index.js';

export const routes = () => {
  return Router()
    .all("/")
      .get("/", home().getHome)
      .get("/v1/fluigs", fluigs().getAllFluigs)

      // POST:
      .post('/v1/fluig', fluigs().postOneFluig)
} 