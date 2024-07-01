class SondaMemoryDAO {
    constructor() {
        this.sondas = [];
    }

    createSonda = async (sonda) => {
        try {
            this.sondas.push(sonda);
            return sonda
        } catch (error) {
            throw error;
        }
    }

    getAllSondas() {
        return this.sondas;
    }

    getAllSondaById(id){
        return this.sondas.filter(sonda => sonda.id === id);
    }

    getEstadisticas() {
        let totalMuestras = this.sondas.length;
        let temperaturaSondas = {};

        this.sondas.forEach(sonda => {
            if (!temperaturaSondas[sonda.id]) {
                temperaturaSondas[sonda.id] = {
                    cantidad: 0,
                    sumaTemperaturas: 0
                };
            }
            temperaturaSondas[sonda.id].cantidad++;
            temperaturaSondas[sonda.id].sumaTemperaturas += sonda.temperatura;
        });

        Object.keys(temperaturaSondas).forEach(id => {
            temperaturaSondas[id].promedio = temperaturaSondas[id].sumaTemperaturas / temperaturaSondas[id].cantidad;
        });

        return {
            totalMuestras,
            temperaturaSondas
        };
    }
}

export default SondaMemoryDAO;
