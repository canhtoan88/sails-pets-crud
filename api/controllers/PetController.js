const PetServices = require('../services/pet')

module.exports = {
    findPetById: (req, res) => {
        PetServices.findPetByIdServices(req, res);
    },
    getAllPet: (req, res) => {
        PetServices.getAllPetService(req, res);
    },
    createPet: (req, res) => {
        PetServices.createPetServices(req, res)
    },
    uploadImage: (req, res) => {
        PetServices.uploadImageServices(req, res);
    },
    updatePet: (req, res) => {
        PetServices.updatePetServices(req, res);
    },
    deletePet: (req, res) => {
        PetServices.deletePetServices(req, res);
    }
}