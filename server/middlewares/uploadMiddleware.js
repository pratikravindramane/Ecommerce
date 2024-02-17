const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "../upload");
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});
// filter of image type
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};
const upload = multer({
  storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 },
});

module.exports = { upload };
