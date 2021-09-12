import Servicios from "../Controller/pet";
import Helper from "./../../Utils/Helpers/Validation";

let helper = new Helper();

export default class Pet {

    static async createPets(input) {
        let result = await Servicios.createPets(input)
            .then(() => {
               return helper.setStatusCorrectShort("Operación Correcta")
            })
            .catch(err => { return helper.setStatusIncorrect(err.message); });
        return result;
    }

    static async showPetById(input) {
        let result = await Servicios.showPetById(input)
            .then((resp) => {
                return helper.setStatusCorrectLong("Operación Correcta", resp, 201);
            })
            .catch(err => { return helper.setStatusIncorrect(err.message); });
        return result;
    }

    static async listPets(input) {
        let result = await Servicios.listPets(input)
            .then((resp) => {
                return helper.setStatusCorrectLong("Operación Correcta", resp, 200);
            })
            .catch(err => { return helper.setStatusIncorrect(err.message); });
        return result;
    }

}