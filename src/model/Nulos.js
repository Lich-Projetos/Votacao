import { EntitySchema } from "typeorm";


const Nulos = new EntitySchema({
    tableName:"Nuloa",
    name: "Nulos",
    columns:{
        id:{primary:true,generated:"increment",type:"int"},
        name_eleitor:{type:"varchar", length:70, nullable:false},
        date_born:{type:"datetime",nullable:false},
        nacionality:{type:"varchar", nullable:false},
        deleteAt:{type:"datetime", nullable:true},
        createAt:{type:"datetime",default:() => "CURRENT_TIMESTAMP"}
    }
})

export default Nulos;