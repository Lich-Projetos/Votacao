import express from "express";
import userController from "./src/controllers/userController.js";


const routes = express();

routes.use("user",userController);

export default routes;