const path = require('path');

const unit = require(path.resolve(DB_MODEL, 'unit'));
const dbconnect = require(path.resolve(__dirname, '..', 'dbconnect'));

module.exports = {


    create: async (req, res) => {

        try {

            await dbconnect();

            

            let unitDoc = await unit.create(req.body);
            res.status(201).json({ _id: unitDoc._id });
        } catch (err) {
            console.log(`Error occured while creating a unit`)
            res.status(500).json({ message: "internal server error" });
        }
    },

    search: async (req, res) => {
        try {

            await dbconnect();
            let unitDocs = await unit.find({});
            res.status(200).json({ data: unitDocs });
        } catch (err) {
            console.log(`Error occured while searching units`)
            res.status(500).json({ message: "internal server error" });
        }

    },

    find: async (req, res) => {

        try {

            await dbconnect();
            const id = req.params.id;
            let unitDoc = await unit.findbyId(id);
            res.status({ data: unitDoc });
        } catch (err) {
            console.log(`Error occured while creating a unit`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    update: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let unitDoc = await unit.findbyIdAndUpdate(id, req.body);
            res.status(201).json({ message: 'updated successfullu' });
        } catch (err) {
            console.log(`Error occured while creating a unit`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    delete: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let unitDoc = await unit.findbyIdAndDelete(id);
            await User.findOneAndDelet({ email: unitDoc.email });
            res.status(201).json({ message: 'deleted successfullu' });
        } catch (err) {
            console.log(`Error occured while deleting a unit`)
            res.status(500).json({ message: "internal server error" });
        }
    }
}