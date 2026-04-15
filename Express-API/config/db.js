const mongoose = require("mongoose");
// const dbgr = require("debug")("development:server");
const config = require("config")

const connectDb = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log(`mongoDb connected.!!!`);
    })
    .catch((err) => {
        console.log(err.message);
    })
}

// const connectDb = () => {
//     mongoose.connect(`${config.get("MongoDb_URL")}/ecommerce`)
//     .then(() => {
//         dbgr(`mongoDb connected.!!!`);
//     })
//     .catch((err) => {
//         dbgr(err.message);
//     })
// }


module.exports = connectDb;