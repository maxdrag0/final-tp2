import express from "express";
import { SERVER_PORT } from "./config/config.js";
import router from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router); 

app.listen(SERVER_PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${SERVER_PORT}`);
});
