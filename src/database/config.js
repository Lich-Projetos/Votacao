import "reflect-metadata";
import { DataSource } from "typeorm";
import user from "../model/user.js";
import Lula from "../model/Lula.js";
import Bolsonaro from "../model/Bolsonaro.js";
import Brancos from"../model/Brancos.js";
import Nulos from "../model/Nulos.js";



const AppDataSource = new DataSource({
    type:"mysql",
    host:"localhost",
    username:"root",
    password:"86741661",
    port:3306,
    database:"votacao",
    entities:[Lula , Bolsonaro, Brancos , Nulos],
    migrations:["./src/database/migrations"],

})

export{AppDataSource};