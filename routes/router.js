import { Router } from "express";
import sondaRoutes from "./sondasRoutes.js";

const router = Router();

router.use("/sondas", sondaRoutes);

export default router;
