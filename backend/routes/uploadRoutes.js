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
  Bucket: process.env.AWS_PRODUCT_BUCKET_NAME,
})

/// Multiple File Uploads ( max 4 )
const productImages = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_PRODUCT_BUCKET_NAME,
    acl: 'public-read',
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
}).array('images', 6)

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
 * @route POST /api/upload
 * @desc Upload product images
 * @access public
 */
router.post('/', (req, res) => {
  productImages(req, res, (error) => {
    if (error) {
      console.log('errors', error)
      res.json({ error: error })
    } else {
      // If File not found
      if (req.files === undefined) {
        console.log('Error: No File Selected!')
        res.json('Error: No File Selected')
      } else {
        // If Success
        let fileArray = req.files,
          fileLocation
        const galleryImgLocationArray = []
        for (let i = 0; i < fileArray.length; i++) {
          fileLocation = fileArray[i].location
          galleryImgLocationArray.push(fileLocation)
        }
        // Save the file name into database
        res.json({
          filesArray: fileArray,
          locationArray: galleryImgLocationArray,
        })
      }
    }
  })
}) // We export the router so that the server.js file can pick it up
export default router
