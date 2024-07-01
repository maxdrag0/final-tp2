import SondaApi from "../Api/sondaApi.js";

class SondaController {
    constructor() {
        this.sondaApi = new SondaApi();
    }

    createSonda = async (req, res) => {
        try {
            const { id, temperatura } = req.body;
            const sonda = await this.sondaApi.createSonda(id, temperatura);
            res.status(200).json({ data: sonda });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    getAllSondas = async (req, res) => {
        try {
            const sondas = await this.sondaApi.getAllSondas();
            res.status(200).json({ data: sondas });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }

    getAllSondaById = async (req, res) => {
        try {
            const id = parseInt(req.params.id, 10);
            const sonda = await this.sondaApi.getAllSondaById(id);
            if (sonda.length === 0) {
                throw new Error("Número de sonda incorrecto");
            }
            res.status(200).json({ data: sonda });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }

    getEstadisticas = async (req, res) => {
        try {
            const stats = await this.sondaApi.getEstadisticas();
            res.status(200).json({ estadisticas: stats });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
}

export default SondaController;
