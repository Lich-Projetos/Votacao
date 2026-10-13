import "reflect-metadata";
import { DataSource } from "typeorm";
import user from "../model/user.js";
import Lula from "../model/Lula.js";
import Bolsonaro from "../model/Bolsonaro.js";
import Brancos from"../model/Brancos.js";
import Nulos from "../model/Nulos.js";
import Voto from "../model/Voto.js";


const AppDataSource = new DataSource({
    type:"mysql",
    host:"localhost",
    username:"root",
    password:"",
    port:3306,
    database:"votacao",
    entities:[user,Lula , Bolsonaro, Brancos , Nulos, Voto],
    migrations: ["src/database/migrations/*.cjs"],

})

export{AppDataSource};
