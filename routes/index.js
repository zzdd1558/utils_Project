let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {title: 'Express'});
});

router.get('/date', (req, res, next) => {

    res.render('date', {title: 'Date Utils 관련 페이지'});
});

router.get('/db' , (req , res , next)  => {
    res.render('index' , {title:'MySQL Test'});
});

module.exports = router;
