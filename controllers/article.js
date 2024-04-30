const path = require('path');

const article = require(path.resolve(DB_MODEL, 'article'));
const dbconnect = require(path.resolve(__dirname, '..', 'dbconnect'));

module.exports = {


    create: async (req, res) => {

        try {

            await dbconnect();

            

            let articleDoc = await article.create(req.body);
            res.status(201).json({ _id: articleDoc._id });
        } catch (err) {
            console.log(`Error occured while creating a article`)
            res.status(500).json({ message: "internal server error" });
        }
    },

    search: async (req, res) => {
        try {

            await dbconnect();
            let articleDocs = await article.find({});
            res.status(200).json({ data: articleDocs });
        } catch (err) {
            console.log(`Error occured while searching articles`)
            res.status(500).json({ message: "internal server error" });
        }

    },

    find: async (req, res) => {

        try {

            await dbconnect();
            const id = req.params.id;
            let articleDoc = await article.findbyId(id);
            res.status({ data: articleDoc });
        } catch (err) {
            console.log(`Error occured while creating a article`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    update: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let articleDoc = await article.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: 'updated successfullu' });
        } catch (err) {
            console.log(`Error occured while creating a article`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    delete: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let articleDoc = await article.findByIdAndDelete(id);
            
            res.status(201).json({ message: 'deleted successfullu' });
        } catch (err) {
            console.log(`Error occured while deleting a article`)
            res.status(500).json({ message: "internal server error" });
        }
    }
}