const path = require('path');
const User = require(path.resolve(DB_MODEL, 'user'));
const teacher = require(path.resolve(DB_MODEL, 'teacher'));
const dbconnect = require(path.resolve(__dirname, '..', 'dbconnect'));

module.exports = {


    create: async (req, res) => {

        try {

            await dbconnect();

            const { email } = req.body;

            let teacherDoc = await teacher.create({ email: email });
            res.status(201).json({ _id: teacherDoc._id });
        } catch (err) {
            console.log(`Error occured while creating a teacher`)
            res.status(500).json({ message: "internal server error" });
        }
    },

    search: async (req, res) => {
        try {

            await dbconnect();
            let teacherDocs = await teacher.find({});
            res.status(200).json({ data: teacherDocs });
        } catch (err) {
            console.log(`Error occured while searching teachers`)
            res.status(500).json({ message: "internal server error" });
        }

    },

    find: async (req, res) => {

        try {

            await dbconnect();
            const id = req.params.id;
            let teacherDoc = await teacher.findbyId(id);
            res.status({ data: teacherDoc });
        } catch (err) {
            console.log(`Error occured while creating a teacher`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    update: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let teacherDoc = await teacher.findbyIdAndUpdate(id, req.body);
            res.status(201).json({ message: 'updated successfullu' });
        } catch (err) {
            console.log(`Error occured while creating a teacher`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    delete: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let teacherDoc = await teacher.findbyIdAndDelete(id);
            await User.findOneAndDelet({ email: teacherDoc.email });
            res.status(201).json({ message: 'deleted successfullu' });
        } catch (err) {
            console.log(`Error occured while deleting a teacher`)
            res.status(500).json({ message: "internal server error" });
        }
    }
}