import Factory from "../DAOs/factory.js";
import validaciones from "../utils/validaciones.js";
import SondaModelo from "../models/SondaModelo.js";

class SondaApi {
    constructor() {
        this.factory = Factory.factory();
    }

    createSonda = async (id, temperatura ) => {
        try {
            if (
                validaciones.sondaValida(id) &&
                validaciones.temperaturaValida(temperatura)
            ) {
                const fechaHora = new Date();
                const sonda = new SondaModelo(id, temperatura, fechaHora);
                const data = await this.factory.SondaMemoryDao.createSonda(sonda);
                return data;
            } else{
                throw new Error("Datos no válidos");
            }
        } catch (error) {
            throw error;
        }
    }

    getAllSondas = async () => {
        try {
            const sondas = await this.factory.SondaMemoryDao.getAllSondas();
            return sondas;
        } catch (error) {
            throw error;
        }
    }

    getAllSondaById = (id) => {
        try {
            if (
                validaciones.sondaValida(id)
            ) {
                const sonda = this.factory.SondaMemoryDao.getAllSondaById(id);
                return sonda;
            } else{
                throw new Error("Número de sonda incorrecto");
            }

        } catch (error) {
            throw error;
        }
    }

    getEstadisticas = () => {
        try {
            const stats = this.factory.SondaMemoryDao.getEstadisticas();
            return stats;
        } catch (error) {
            throw error;
        }
    }
}

export default SondaApi