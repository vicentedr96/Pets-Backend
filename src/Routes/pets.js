import express from "express";
import servicios from "../Mvc/View/pet";
import Validacion from "../Utils/helpers/Validation";

const router = express.Router();
let Validar = new Validacion();

router.post('/createPets', [], async function (req, res) {
  servicios.createPets(req)
    .then((resp) => {
      res.status(201).json(resp);
    })
    .catch(err => {
      res.status(400).json(Validar.setStatusIncorrect(err.message));
    });
});

router.get('/:petId', [], async function (req, res) {
  servicios.showPetById(req.params)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch(err => {
      res.status(400).json(Validar.setStatusIncorrect(err.message));
    });

});


router.get('/listPets/:page?', [], async function (req, res) {
  servicios.listPets(req)
    .then((resp) => {
      res.setHeader('x-next', `${process.env.DOMINIO}/pets/listPets/${parseInt(req?.params?.page) + 1}`);
      res.status(200).json(resp);
    })
    .catch(err => {
      res.status(400).json(Validar.setStatusIncorrect(err.message));
    });
});

module.exports = router;
