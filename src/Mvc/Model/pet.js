import Pett from "../../models/Pet";

export default class Pet {

    static async createPets(data) {
        let { name, tag="" } = data;
        try {
            return await Pett.create({ name, tag })
        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async showPetById(data) {
        let { petId } = data;
        try {
            return await Pett.findAll({
                attributes: ["id", "name", "tag"],
                where: { id:petId }
            })
        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async listPets(data) {
        let { limit, page } = data;
        try {

            let offset = 0
            page = parseInt(page)

            while (page!=0) {
                if(page!=1){
                    offset += 100
                }
                page--;
            }
            
            return await Pett.findAll({
                limit: parseInt(limit) || 100, offset,
                attributes: ["id", "name", "tag"],
                order: [
                    ['id', 'ASC'],
                ],
            })
        } catch (err) {
            throw new Error(err.message);
        }
    }

}
