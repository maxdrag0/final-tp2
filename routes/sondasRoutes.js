import { Router } from "express";
import SondaController from "../controller/sondaController.js";

const sondaRoutes = Router();
const sondaController = new SondaController();

sondaRoutes.post("/", sondaController.createSonda);

sondaRoutes.get("/", sondaController.getAllSondas);

sondaRoutes.get("/estadisticas", sondaController.getEstadisticas);

sondaRoutes.get("/:id", sondaController.getAllSondaById);

export default sondaRoutes;