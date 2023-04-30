import multer from "multer";

export const uploadFile = multer({
  dest: "uploads/fileTypes/",
  limits: {
    fileSize: 1000000,
  },
});
