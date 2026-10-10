import { Router } from 'express';

const userController = Router();

// Exemplo de rota básica dentro do controller:
userController.get('/', (req, res) => {
    res.json({ message: "Rota de usuários funcionando!" });
});

export default userController;