const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://passtheplate:passtheplate@cluster0.0ocnuzu.mongodb.net/passtheplatemern?retryWrites=true&w=majority";

async function mongoDB() {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("Connected to database successfully");
        const fetched_data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_data.find({}).toArray(function (err, data) {
          if (err) {
            console.log(err);
          } else {
            global.food_items = data;
            console.log();
          }
        });
      }
    }
  );
}

module.exports = mongoDB;
