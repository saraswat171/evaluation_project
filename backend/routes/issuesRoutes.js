const authenticateJWT = require('../middleware/authMiddleware');
const express = require('express')
const { adminController, issuesController } = require('../controller');
const router = express.Router();

router.post('/issuesbook' ,authenticateJWT , issuesController.borrowbook)
router.get('/fetchallrecords/:id' ,authenticateJWT, )  // for admin & user both


router.put('/updateStatus' , authenticateJWT , issuesController.updatestatus) // book id to update book status


module.exports = router;