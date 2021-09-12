import peticiones from "../Model/pet";
import generador from "../../Utils/Helpers/Generador";

export default class Pet {
    static async createPets(req) {
        try {
            const { id, name, tag } = req.body;
            let datos = {
                name
            };
            if (generador.verificarIndifinidos(datos) == true) {
                datos.tag=tag;
                await peticiones.createPets(datos);
            } else {
                throw new Error("Datos indifinidos");
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async showPetById(req) {
        try {
            const { petId } = req;
            let datos = {
                petId
            };
            if (generador.verificarIndifinidos(datos) == true) {
                let encontrar = await peticiones.showPetById(datos);
                return encontrar;
            } else {
                throw new Error("Datos indifinidos");
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async listPets(req) {
        try {
            const { limit  } = req.body;
            const { page  } = req.params;
            let datos = {
                limit,
                page
            };
            let encontrar = await peticiones.listPets(datos);
            return encontrar;
        } catch (err) {
            throw new Error(err.message);
        }
    }

}