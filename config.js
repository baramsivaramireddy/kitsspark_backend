
require('dotenv').config()

module.exports ={
    MONGO_URI:process.env.MONGO_URI ,
    ENVIRONMENT:process.env.ENV_TYPE,
    SECRETKEY:process.env.SECRETKEY,
    CLIENT_ID:process.env.CLIENT_ID,
    accessKeyId:process.env.ACCESS_KEY,
    secretAccessKey:process.env.AWSSECRET_KEY,
    region:process.env.REGION,
  
}