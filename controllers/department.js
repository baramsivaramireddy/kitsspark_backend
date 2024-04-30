const path = require('path');

const department = require(path.resolve(DB_MODEL, 'department'));
const dbconnect = require(path.resolve(__dirname, '..', 'dbconnect'));

module.exports = {


    create: async (req, res) => {

        try {

            await dbconnect();

            

            let departmentDoc = await department.create(req.body);
            res.status(201).json({ _id: departmentDoc._id });
        } catch (err) {
            console.log(`Error occured while creating a department`)
            res.status(500).json({ message: "internal server error" });
        }
    },

    search: async (req, res) => {
        try {

            await dbconnect();
            let departmentDocs = await department.find({});
            res.status(200).json({ data: departmentDocs });
        } catch (err) {
            console.log(`Error occured while searching departments`)
            res.status(500).json({ message: "internal server error" });
        }

    },

    find: async (req, res) => {

        try {

            await dbconnect();
            const id = req.params.id;
            let departmentDoc = await department.findbyId(id);
            res.status({ data: departmentDoc });
        } catch (err) {
            console.log(`Error occured while creating a department`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    update: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let departmentDoc = await department.findbyIdAndUpdate(id, req.body);
            res.status(201).json({ message: 'updated successfullu' });
        } catch (err) {
            console.log(`Error occured while creating a department`)
            res.status(500).json({ message: "internal server error" });
        }
    },
    delete: async (req, res) => {

        try {

            await dbconnect();


            const id = req.params.id;
            let departmentDoc = await department.findbyIdAndDelete(id);
            await User.findOneAndDelet({ email: departmentDoc.email });
            res.status(201).json({ message: 'deleted successfullu' });
        } catch (err) {
            console.log(`Error occured while deleting a department`)
            res.status(500).json({ message: "internal server error" });
        }
    }
}