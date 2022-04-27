const express = require('express');
const router = express.Router();

const controller = require('../controllers/productController')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/createProduct', controller.createProduct);
router.get('/getAllProducts', controller.getAllProducts);
router.get('/getProductsByName/:name', controller.getProductsByName);
router.get('/getById/:name', controller.getProductById);
// router.delete('/deleteuser/:id', controller.deleteData);
// router.put('/updateuser/:id', controller.updateData);
module.exports = router;
