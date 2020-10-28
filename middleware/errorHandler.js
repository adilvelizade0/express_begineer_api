const path = require("path");
const errorHandler = (req, res, next) => {
  const succsess = true;
  if (!succsess) {
    res.sendFile(path.join(__dirname, "../public", "errorPage.html"));
  } else {
    next();
  }
};

module.exports = { errorHandler };
