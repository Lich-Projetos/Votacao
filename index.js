import express from "express";
import {AppDataSource } from "./src/database/config.js";
import routes from "./routes.js";
import { error } from "node:console";

const servidor = express();
servidor.use(express.json());
servidor.use("/",routes);


AppDataSource.initialize().then(() => {
    console.log("Conectado ao banco de dados");


    servidor.listen(3333,()=>{
        console.log("Servidor esta funcionando")
    });

}).catch((error) => {
    console.log("Houve um erro no servidor",error);
    
});
