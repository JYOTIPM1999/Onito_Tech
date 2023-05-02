const { Schema, model } = require("mongoose");

const DetailsSchema = Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 1 },
  sex: {
    type: String,
    enum: ["male", "female", "others"],
    default: "male",
    required: true,
  },
});
const DetailsModel = model("detail", DetailsSchema);
module.exports = DetailsModel;
