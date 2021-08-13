import dotenv from 'dotenv'
import aws from 'aws-sdk'
import multerS3 from 'multer-s3'
import path from 'path'
import express from 'express'
import multer from 'multer'

dotenv.config()

const router = express.Router()

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
  Bucket: process.env.AWS_BANNER_BUCKET_NAME,
})

/**
 * Single Upload
 */

const bannerImgUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BANNER_BUCKET_NAME,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
          '-' +
          Date.now() +
          path.extname(file.originalname)
      )
    },
  }),
  limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
}).single('banner-image')

/**
 * Check File Type
 * @param file
 * @param cb
 * @return {*}
 */
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  // Check mime
  const mimetype = filetypes.test(file.mimetype)
  if (mimetype && extname) {
    return cb(null, true)
  } else {
    cb('Error: Images Only!')
  }
}

/**
 * @route POST /api/bannerUpload
 * @desc Upload post image
 * @access public
 */
router.post('/', (req, res) => {
  bannerImgUpload(req, res, (error) => {
    // console.log('requestOkokok', '+++++++++ \n ' + req.file)
    // console.log('error', error)
    if (error) {
      res.json({ error: error })
    } else {
      // If File not found
      if (req.file === undefined) {
        console.log('Error: No File Selected!')
        res.json('Error: No File Selected')
      } else {
        // If Success
        const imageName = req.file.key
        const imageLocation = req.file.location // Save the file name into database into profile model
        res.json({
          image: imageName,
          location: imageLocation,
        })
      }
    }
  })
})
// End of banner Image Upload
export default router
