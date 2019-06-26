import multer, { memoryStorage } from 'multer';

const storage = memoryStorage()
const uploadMem = multer({
    storage: storage
});

export default uploadMem;