const express = require('express');
const router = express.Router();

var courses = require('../../../../data');

// [POST] dominio.../api/v1/log/add
router.get('/list',(req,res)=>{
    res.send(courses);
})

module.exports = router;

