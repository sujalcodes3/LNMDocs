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
});

export default mongoose.model("Subject", SubjectSchema);
