import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  notes: [
    {
      name: { type: String, required: true },
      link: { type: String, required: true },
    },
  ],
  mtpapers: [
    {
      year: { type: String, required: true, unique: true },
      link: { type: String, required: true, unique: true },
    },
  ],
  etpapers: [
    {
      year: { type: String, required: true, unique: true },
      link: { type: String, required: true, unique: true },
    },
  ],
});

export default mongoose.model("Subject", SubjectSchema);
