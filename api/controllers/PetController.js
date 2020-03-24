module.exports = {
    findPetById: async (req, res) => {
        if (req.params.id) {
            const id = req.params.id;
            const petInfo = await Pet.findOne({_id: id});

            return res.json(petInfo)
        } else return res.badRequest({error: 'No any params!!'})
    },
    createPet: async (req, res) => {
        if (req.body.name) {
            const name = req.body.name;
            const pet = await Pet.create({name: name});

            return res.json({result: 'Pet ' + name + ' was created!'});
        } else return res.badRequest({error: 'Not enough query params!'})
    },
    uploadImage: async (req, res) => {
        //if (req.params.id)
        if (req.params.id && req.body.imageLink){
            const id = req.params.id;
            const imageLink = req.body.imageLink;
            const pet = await Pet.updateOne({_id: id}, {imageLink: imageLink})

            return res.json(pet)
        } else res.badRequest({error: 'No any image link!!'})
    },
    updatePet: (req, res) => {
        return res.json({pet: 'update pet'})
    },
    deletePet: async (req, res) => {
        if (req.params.id) {
            const id = req.params.id;

            const pet = await Pet.destroyOne({_id: id});
            
            return res.json(pet.name + ' was destroyed!')
        } else return res.badRequest({error: 'Pet id is neccessary!'})
    }
}