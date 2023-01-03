export const getIndexData = (req, res, next) => {
  res.json({
    message: "Hello world and the api is working",
  });
};
export const postIndexData = (req, res, next) => {
  console.log(req.body.name)
  res.json({
    message: "the body sent is mentioned below",
    body: req.body
  })
};
