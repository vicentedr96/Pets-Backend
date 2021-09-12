import supertest from 'supertest';
import { Routes, server, database } from '../Routes/index';

const api = supertest(Routes)

describe("[Test][Integración]",()=>{
    test(`[showPetById] retorna un json con informacíon (verifica conexíon)`, async () => {
        await api
            .get('/pets/191')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test(`[listPets] retorna un json con informacíon (verifica conexíon)`, async () => {
        await api
            .get('/pets/listPets/1')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test(`[createPets] retorna un json con informacíon (verifica conexíon)`, async () => {
        await api
            .get('/pets/createPets')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test(`[createPets] registra un animal a la base de datos`, async () => {
        let initialState={
            name:"Conejo"
        }
        let data = await api
            .post('/pets/createPets')
            .send(initialState)
            .expect(201)
            .expect('Content-Type', /application\/json/)
        
        let msj = data?.text;
        expect(msj).toContain("Operación Correcta")
    })

})


afterAll(() => {
    database.cnn.close();
    server.close()
})

