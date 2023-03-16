import Subject from "../models/Subject.model.js";

export const addData = (req, res, next) => {
  const { subject, type, link } = req.body;
  console.log(req.body);

  Subject.findOne({
    name: subject,
  })
    .then((resData) => {
      if (!resData) {
        const newSubject = new Subject({
          name: subject,
          semester: 1,
          notes:
            type === "notes" ? [{ name: req.body.noteName, link: link }] : [],
          mtpapers:
            type === "mtpapers" ? [{ year: req.body.year, link: link }] : [],
          etpapers:
            type === "etpapers" ? [{ year: req.body.year, link: link }] : [],
        });
        return newSubject.save();
      } else {
        return Subject.updateOne(
          { name: subject },
          {
            $push:
              type === "notes"
                ? { notes: { name: req.body.noteName, link: link } }
                : type === "mtpapers"
                ? { mtpapers: { year: req.body.year, link: link } }
                : { etpapers: { year: req.body.year, link: link } },
          }
        );
      }
    })
    .then((resData) => {
      console.log("Updated Successfully");
      res.status(200).json({
        message: "Added Successfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
