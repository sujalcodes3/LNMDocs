import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  name: {
    type: String,
    // required: true,
    /**
     * This required might work after clearing the entire database as it seems like that one entry which was made during early phase of development has no name in it.
     */
  },
  semester: {
    type: Number,
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
