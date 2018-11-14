let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('signUp', {title: '회원가입'});
});


module.exports = router;
