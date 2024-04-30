const path = require('path');
const User = require(path.resolve(DB_MODEL, 'user'));
const Student = require(path.resolve(DB_MODEL, 'student'));
const Expert = require(path.resolve(DB_MODEL, 'expert'));
const Teacher = require(path.resolve(DB_MODEL, 'teacher'));

const dbconnect = require(path.resolve(__dirname, '..', 'dbconnect'));
const jwt = require('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');


/**
 * User controller
 * 
 * signup 
 *       first one to signup/signin is given admin role
 *       read these
 * https://developers.google.com/identity/gsi/web/guides/verify-google-id-token
 * 
 * reason for sub existance
 */

const OUTSIDERROLE = 'outsider'; // DEFAULT ROLE
const ADMINROLE = 'admin';
const EXPERTROLE = 'expert';
const TEACHERROLE = 'teacher';
const STUDENTROLE = 'student';
const TOKENEXPIRE = '7d';

const client = new OAuth2Client();
module.exports = {


  login: async (req, res) => {
    try {
      await dbconnect();
      const { credential } = req.body;

      if (!credential) {

        return res.status(400).json({ message: 'Id token (credential) is needed' });
      }

      const ticket = await client.verifyIdToken({ idToken: credential, audience: __configurations.CLIENT_ID });
      const payload = ticket.getPayload();
      const userSub = payload['sub'];
      const userName = payload['name'];
      const userEmail = payload['email'];

      const userCount = await User.countDocuments();

      if (userCount == 0) {

        let newUser = await User.create({ email: userEmail, name:userName, sub: userSub, role: ADMINROLE });

        let token = await jwt.sign({ userId: newUser._id, role: newUser.role }, __configurations.SECRETKEY, { expiresIn: TOKENEXPIRE });
        return res.status(201).json({ token: token });
      }


      let existingUser = await User.findOne({ sub: userSub });

      if (existingUser) {

        let token = await jwt.sign({ userId: existingUser._id, role: existingUser.role }, __configurations.SECRETKEY, { expiresIn: TOKENEXPIRE });
        return res.status(200).json({ token: token });
      }



      let studentUser = await Student.findOne({ email: userEmail });

      if (studentUser) {
        let newUser = await User.create({ email: userEmail, sub: userSub, role: STUDENTROLE });

        let token = await jwt.sign({ userId: newUser._id, role: newUser.role }, __configurations.SECRETKEY, { expiresIn: TOKENEXPIRE });
        return res.status(201).json({ token: token });
      }

      let teacherUser = await Teacher.findOne({ email: userEmail });

      if (teacherUser) {
        let newUser = await User.create({ email: userEmail, sub: userSub, role: TEACHERROLE });

        let token = await jwt.sign({ userId: newUser._id, role: newUser.role }, __configurations.SECRETKEY, { expiresIn: TOKENEXPIRE });
        return res.status(201).json({ token: token });
      }

      let expertUser = await Expert.findOne({ email: userEmail });

      if (expertUser) {
        let newUser = await User.create({ email: userEmail, sub: userSub, role: EXPERTROLE });

        let token = await jwt.sign({ userId: newUser._id, role: newUser.role }, __configurations.SECRETKEY, { expiresIn: TOKENEXPIRE });
        return res.status(201).json({ token: token });
      }
      let newUser = await User.create({ email: userEmail, sub: userSub, role: OUTSIDERROLE });

      let token = await jwt.sign({ userId: newUser._id, role: newUser.role }, __configurations.SECRETKEY, { expiresIn: TOKENEXPIRE });
      return res.status(201).json({ token: token });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },



  find: async (req, res) => {
    try {
      await dbconnect();
      const userId = req.params.id;

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ data: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },




  search: async (req, res) => {
    try {
      await dbconnect();
      const users = await User.find();
      res.status(200).json({ count: users.length, data: users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
