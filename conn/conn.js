const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        `mongodb+srv://tanmayrana602:Tanm9733@cluster0.9glq3qo.mongodb.net`
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
