
import { Router } from "express";
import userController from "./src/controllers/userController.js";
import { AppDataSource } from "./src/database/config.js";
import Voto from "./src/model/Voto.js";

const routes = Router();

routes.use("/user", userController);

routes.post("/votar", async (req, res) => {
    const candidato = req.body.candidato;

    if (candidato !== "x" && candidato !== "y") {
        return res.status(400).json({
            erro: "Candidato inválido"
        });
    }

    try {
        const repositorio = AppDataSource.getRepository(Voto);

        await repositorio.save({ candidato });

        res.json({ mensagem: "Voto registrado!" });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao votar" });
    }
});

routes.get("/resultado", async (req, res) => {
    try {
        const repositorio = AppDataSource.getRepository(Voto);

        const x = await repositorio.countBy({ candidato: "x" });
        const y = await repositorio.countBy({ candidato: "y" });

        res.json({ x, y });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao consultar votos" });
    }
});

export default routes;
