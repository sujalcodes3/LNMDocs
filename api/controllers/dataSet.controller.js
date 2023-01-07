import Subject from "../models/subject.model.js";

export const addData = (req, res, next) => {
  const name = req.body.name;
  const semester = req.body.semester;
  const notes = req.body.notes;
  const mtpapers = req.body.mtpapers;
  const etpapers = req.body.etpapers;

  const subject = new Subject({
    name: name,
    semester: semester,
    notes: notes ? notes : [],
    mtpapers: mtpapers ? mtpapers : [],
    etpapers: etpapers ? etpapers : [],
  });

  subject
    .save()
    .then((result) => {
      res.json({
        message: "Subject Created",
        subject: subject,
      });
    })
    .catch((err) => {
      console.log(err, "From dataSet controller");
    });
};

export const getData = (req, res, next) => {
  Subject.find({
    name: "COA",
  })
    .then((resData) => {
      res.json(resData);
    })
    .catch((err) => {
      console.log(err, "From getData controller");
    });
};

export const getSubjects = (req, res, next) => {
  Subject.find()
    .then((resData) => {
      res.json(
        resData.map((data) => {
          return { key: data._id, name: data.name };
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
