module.exports = {
    findPetByIdServices: async (req, res) => {
        if (req.params.id) {
            const id = req.params.id;
            const petInfo = await Pet.findOne({_id: id});

            return res.json(petInfo)
        } else return res.badRequest({error: 'No any params!!'})
    },
    getAllPetService: async (req, res) => {
        const allPet = await Pet.find();
        return res.json(allPet)
    },
    createPetServices: async (req, res) => {
        if (req.body.name) {
            const name = req.body.name;
            const pet = await Pet.create({name: name});

            return res.json({result: 'Pet ' + name + ' was created!'});
        } else return res.badRequest({error: 'Not enough query params!'})
    },
    uploadImageServices: async (req, res) => {
        if (req.params.id && req.file('image')){
            const id = req.params.id;

            req.file('image').upload({
                // Max size
                // maxBytes: 5*1024*1024, // 5 MB
                // Upload to asset/images, path start from disk, example, here is G:\\Sails\\....
                dirname: require('path').resolve(sails.config.appPath, 'asset/images'),

                // With custom file name + filename
                saveAs: Date.now() + '-' + req.file('image')._readableState.buffer.head.data.filename
            }, async (err, files) => {
                if (err) return res.serverError(err);
                const imageLink = files[0].fd.slice(files[0].fd.indexOf('asset'));
                console.log(files[0].fd.slice(files[0].fd.indexOf('asset')))
                
                //const imageLink = req.body.imageLink;
                const pet = await Pet.updateOne({_id: id}, {imageLink: imageLink})
                
                return res.json(pet)
            });
        } else res.badRequest({error: 'No any image link!!'})
    },
    updatePetServices: async (req, res) => {
        if (req.params.id && req.body.name && req.body.imageLink) {
            const id = req.params.id;
            const pet = await Pet.findOne({_id: id})
            const name = req.body.name | pet.name;
            const imageLink = req.body.imageLink | pet.imageLink;
            const result = await Pet.updateOne({_id: id}, {name: name, imageLink: imageLink})
            return res.json(result)
        } else return res.badRequest({error: 'Not enough param!'})
    },
    deletePetServices: async (req, res) => {
        if (req.params.id) {
            const id = req.params.id;

            const pet = await Pet.destroyOne({_id: id});
            
            return res.json(pet.name + ' was destroyed!')
        } else return res.badRequest({error: 'Pet id is neccessary!'})
    }
}