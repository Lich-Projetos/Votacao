import { EntitySchema } from "typeorm";

const Voto = new EntitySchema({
    name: "Voto",
    tableName: "votos",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true
        },
        candidato: {
            type: "varchar",
            length: 1,
            nullable: false
        }
    }
});

export default Voto;
