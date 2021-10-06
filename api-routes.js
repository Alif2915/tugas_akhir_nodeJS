const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "API its working",
        status: "Welcome to resthub app",
    });
});

const mahasiswaController = require('./mahasiswaController');

router.route('/contacs')
.get(mahasiswaController.index)
.post(mahasiswaController.new);

router.route('/contacts/:contact_id')
.get(mahasiswaController.view)
.patch(mahasiswaController.update)
.put(mahasiswaController.update)
.delete(mahasiswaController.delete);

module.exports = router;