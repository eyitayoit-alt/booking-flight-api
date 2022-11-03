const express = require('express');

const router = express.Router();
const allcontroller = require('../controllers/allflight');
const addcontroller = require('../controllers/addflight');
const removecontroller = require('../controllers/removeflight');
const viewcontroller = require('../controllers/viewflight');
const changecontroller = require('../controllers/changeflight');


router.get('/', allcontroller.example)
router.post('/add', addcontroller.addtoflight)
router.delete('/delete/:id',removecontroller.removefromflight)
router.get('/view/:id', viewcontroller.viewaflight)
router.put('/update/:id', changecontroller.changeaflight)




module.exports = router;

