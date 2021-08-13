import dotenv from 'dotenv'
import path from 'path'
import express from 'express'
import multer from 'multer'
import AWS from 'aws-sdk'
const router = express.Router()

dotenv.config()

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
})

const storage = multer.memoryStorage({
  destination(req, file, cb) {
    cb(null, '')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
}).single('banner-image')

router.post('/', upload, (req, res) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${req.file.originalname}`,
    Body: req.file.buffer,
  }
  s3.upload(params, (err, data) => {
    if (err) {
      res.status(500).send(err)
    }
    res.status(200).send('see console')
  })
})

export default router
