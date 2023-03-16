import Subject from "../models/Subject.model.js";

export const addData = (req, res, next) => {
  const { subject, type, link } = req.body;
  console.log(req.body);

  res.status(200).json({
    message: "Added Successfully",
  });
};
