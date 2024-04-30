const path = require('path');
const User = require(path.resolve(DB_MODEL, 'user'));
const expert = require(path.resolve(DB_MODEL, 'expert'));
const dbconnect = require(path.resolve(__dirname, '..', 'dbconnect'));

module.exports = {


    create: async (req, res) => {

        try {

            await dbconnect();

            const { email } = req.body;

            let expertDoc = await expert.create({ email: email });
            res.status(201).json({ _id: expertDoc._id });
        } catch (err) {
            console.log(`Error occured while creating a expert`)
            res.status(500).json({ message: "internal server error" });
        }
    },

    search: async (req, res) => {
        try {

            await dbconnect();
            let expertDocs = await expert.find({});
            res.status(200).json({ data: expertDocs });
        } catch (err) {
            console.log(`Error occured while searching experts`)
            res.status(500).json({ message: "internal server error" });
        }

    },

    find: async (req, res) => {

        try {

            await dbconnect();
            const id = req.params.id;
            let expertDoc = await expert.findbyId(id);
            res.status({ data: expertDoc });
        } catch (err) {
            console.log(`Error occured while creating a expert`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    update: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let expertDoc = await expert.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: 'updated successfullu' });
        } catch (err) {
            console.log(`Error occured while creating a expert`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    delete: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let expertDoc = await expert.findByIdAndDelete(id);
            await User.findOneAndDelet({ email: expertDoc.email });
            res.status(201).json({ message: 'deleted successfullu' });
        } catch (err) {
            console.log(`Error occured while deleting a expert`)
            res.status(500).json({ message: "internal server error" });
        }
    }
}