import multer, { diskStorage } from 'multer';
const dotenv = require('dotenv');

dotenv.config();

const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.env.FileDestination)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const uploadDisk = multer({
    storage: storage
});

export default uploadDisk;