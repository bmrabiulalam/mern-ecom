//const { addCategory, getCategory } = require('../controllers/category');
const express = require('express');
const multer = require('multer');
const shortid = require('shortid');
const { adminMiddleware, requireSignin } = require('../common-middleware');
const { createProduct } = require('../controllers/product');
const router = express.Router();
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function(req, file, cb){
        cb(null, shortid.generate() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.post('/product/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProduct);
//router.get('/category/getcategory', getCategory);

module.exports = router;