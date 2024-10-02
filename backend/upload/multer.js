import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/'); // Directory where the files will be stored
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // File will be named with a timestamp + original file extension
  },
});

const upload = multer({ storage: storage });

export default upload;
