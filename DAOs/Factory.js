import { MODE } from "../config/config.js";
import SondaMemoryDao from "./Memory/sondaMemoryDAO.js";

class Factory {
    constructor() {}

    static factory = () => {
        if (MODE === "memory") {
            return {
                SondaMemoryDao: new SondaMemoryDao(),
            };
        }
    }
}

export default Factory;