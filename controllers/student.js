const path = require('path');
const User = require(path.resolve(DB_MODEL, 'user'));
const Student = require(path.resolve(DB_MODEL, 'student'));
const dbconnect = require(path.resolve(__dirname, '..', 'dbconnect'));

module.exports = {


    create: async (req, res) => {

        try {

            await dbconnect();

            const { email } = req.body;

            let studentDoc = await Student.create({ email: email });
            res.status(201).json({ _id: studentDoc._id });
        } catch (err) {
            console.log(`Error occured while creating a student`)
            res.status(500).json({ message: "internal server error" });
        }
    },

    search: async (req, res) => {
        try {

            await dbconnect();
            let studentDocs = await Student.find({});
            res.status(200).json({ data: studentDocs });
        } catch (err) {
            console.log(`Error occured while searching students`)
            res.status(500).json({ message: "internal server error" });
        }

    },

    find: async (req, res) => {

        try {

            await dbconnect();
            const id = req.params.id;
            let studentDoc = await Student.findbyId(id);
            res.status({ data: studentDoc });
        } catch (err) {
            console.log(`Error occured while creating a student`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    update: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let studentDoc = await Student.findbyIdAndUpdate(id, req.body);
            res.status(201).json({ message: 'updated successfullu' });
        } catch (err) {
            console.log(`Error occured while creating a student`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    delete: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let studentDoc = await Student.findbyIdAndDelete(id);
            await User.findOneAndDelet({ email: studentDoc.email });
            res.status(201).json({ message: 'deleted successfullu' });
        } catch (err) {
            console.log(`Error occured while deleting a student`)
            res.status(500).json({ message: "internal server error" });
        }
    }
}