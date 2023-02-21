const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    console.log(process.env.MONGODB_URL);
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
