import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  semesterID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Semester",
  },
  notes: [
    {
      name: { type: String, required: true },
      link: { type: String, required: true },
    },
  ],
  mtpapers: [
    {
      year: { type: String, required: true },
      link: { type: String, required: true },
    },
  ],
  etpapers: [
    {
      year: { type: String, required: true },
      link: { type: String, required: true },
    },
  ],
});

export default mongoose.model("Subject", SubjectSchema);
