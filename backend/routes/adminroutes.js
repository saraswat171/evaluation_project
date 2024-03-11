
const express = require('express')
const authenticateJWT = require('../middleware/authMiddleware');
const { adminController } = require('../controller');
const router = express.Router();

router.post('/addBooks' ,authenticateJWT , adminController.addingbooks)
router.get('/fetchallbooks' , adminController.allbooks)  // route common for both role
router.put('/updatebooks/:id' , authenticateJWT , adminController.updatingBook) // book id to update book details
router.delete('/removebook/:id' , authenticateJWT , adminController.deletingBook) // book id to update book details

module.exports = router;

