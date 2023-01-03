import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SemesterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Semester", SemesterSchema);
