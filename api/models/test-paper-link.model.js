import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DocLink = new Schema({
  link: String,
  subjectID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
  },
  isWhat: {
    type: String,
    enum: ["Notes", "Midterm", "Endterm"],
  },
  year: {
    type: Number,
  },
});

export default mongoose.model("Doclink", DocLink);
