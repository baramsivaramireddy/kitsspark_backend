const path = require('path');
const User = require(path.resolve(DB_MODEL, 'user'));
const regulation = require(path.resolve(DB_MODEL, 'regulation'));
const dbconnect = require(path.resolve(__dirname, '..', 'dbconnect'));

module.exports = {


    create: async (req, res) => {

        try {

            await dbconnect();

            const { name } = req.body;

            let regulationDoc = await regulation.create({ name: name });
            res.status(201).json({ _id: regulationDoc._id });
        } catch (err) {
            console.log(`Error occured while creating a regulation`)
            res.status(500).json({ message: "internal server error" });
        }
    },

    search: async (req, res) => {
        try {

            await dbconnect();
            let regulationDocs = await regulation.find({});
            res.status(200).json({ data: regulationDocs });
        } catch (err) {
            console.log(`Error occured while searching regulations`)
            res.status(500).json({ message: "internal server error" });
        }

    },

    find: async (req, res) => {

        try {

            await dbconnect();
            const id = req.params.id;
            let regulationDoc = await regulation.findbyId(id);
            res.status({ data: regulationDoc });
        } catch (err) {
            console.log(`Error occured while creating a regulation`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    update: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let regulationDoc = await regulation.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: 'updated successfullu' });
        } catch (err) {
            console.log(`Error occured while creating a regulation`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    delete: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let regulationDoc = await regulation.findByIdAndDelete(id);
            res.status(201).json({ message: 'deleted successfullu' });
        } catch (err) {
            console.log(`Error occured while deleting a regulation`)
            res.status(500).json({ message: "internal server error" });
        }
    }
}