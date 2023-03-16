import Subject from "../models/Subject.model.js";

export const addData = (req, res, next) => {
  const body = req.body;

  console.log(body);
  const subject = body.subject;
  const type = body.type;
  const year = body.year ? body.year : null;
  const link = body.link;

  res.status(200).json({
    message: "Added Successfully",
  });
};
