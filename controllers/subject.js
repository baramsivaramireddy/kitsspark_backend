const path = require('path');

const subject = require(path.resolve(DB_MODEL, 'subject'));
const dbconnect = require(path.resolve(__dirname, '..', 'dbconnect'));

module.exports = {


    create: async (req, res) => {

        try {

            await dbconnect();

            

            let subjectDoc = await subject.create(req.body);
            res.status(201).json({ _id: subjectDoc._id });
        } catch (err) {
            console.log(`Error occured while creating a subject`)
            res.status(500).json({ message: "internal server error" });
        }
    },

    search: async (req, res) => {
        try {

            await dbconnect();
            let subjectDocs = await subject.find({});
            res.status(200).json({ data: subjectDocs });
        } catch (err) {
            console.log(`Error occured while searching subjects`)
            res.status(500).json({ message: "internal server error" });
        }

    },

    find: async (req, res) => {

        try {

            await dbconnect();
            const id = req.params.id;
            let subjectDoc = await subject.findbyId(id);
            res.status({ data: subjectDoc });
        } catch (err) {
            console.log(`Error occured while creating a subject`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    update: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let subjectDoc = await subject.findbyIdAndUpdate(id, req.body);
            res.status(201).json({ message: 'updated successfullu' });
        } catch (err) {
            console.log(`Error occured while creating a subject`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    delete: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let subjectDoc = await subject.findbyIdAndDelete(id);
            await User.findOneAndDelet({ email: subjectDoc.email });
            res.status(201).json({ message: 'deleted successfullu' });
        } catch (err) {
            console.log(`Error occured while deleting a subject`)
            res.status(500).json({ message: "internal server error" });
        }
    }
}