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
          return { name: data.name };
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addLink = (req, res, next) => {
  const subject = req.params.subject;
  const type = req.params.type;

  const enteredLink = req.body.link ? req.body.link : null;
  const enteredName = req.body.name ? req.body.name : null;
  const enteredYear = req.body.year ? req.body.year : null;

  const newNote = { name: enteredName, link: enteredLink };
  const newPaper = { year: enteredYear, link: enteredLink };

  return Subject.updateOne(
    { name: subject },
    {
      $push:
        type === "notes"
          ? { notes: newNote }
          : type === "mtpapers"
          ? { mtpapers: newPaper }
          : { etpapers: newPaper },
    }
  )
    .then((result) => {
      res.json({ message: "Updated Successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
};
