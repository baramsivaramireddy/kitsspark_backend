const path = require('path');

const topic = require(path.resolve(DB_MODEL, 'topic'));
const dbconnect = require(path.resolve(__dirname, '..', 'dbconnect'));

module.exports = {


    create: async (req, res) => {

        try {

            await dbconnect();

            

            let topicDoc = await topic.create(req.body);
            res.status(201).json({ _id: topicDoc._id });
        } catch (err) {
            console.log(`Error occured while creating a topic`)
            res.status(500).json({ message: "internal server error" });
        }
    },

    search: async (req, res) => {
        try {

            await dbconnect();
            let topicDocs = await topic.find({});
            res.status(200).json({ data: topicDocs });
        } catch (err) {
            console.log(`Error occured while searching topics`)
            res.status(500).json({ message: "internal server error" });
        }

    },

    find: async (req, res) => {

        try {

            await dbconnect();
            const id = req.params.id;
            let topicDoc = await topic.findbyId(id);
            res.status({ data: topicDoc });
        } catch (err) {
            console.log(`Error occured while creating a topic`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    update: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let topicDoc = await topic.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: 'updated successfullu' });
        } catch (err) {
            console.log(`Error occured while creating a topic`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    delete: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let topicDoc = await topic.findByIdAndDelete(id);
            await User.findOneAndDelet({ email: topicDoc.email });
            res.status(201).json({ message: 'deleted successfullu' });
        } catch (err) {
            console.log(`Error occured while deleting a topic`)
            res.status(500).json({ message: "internal server error" });
        }
    }
}