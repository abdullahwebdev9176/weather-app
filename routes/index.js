const express = require('express');

const router = express.Router()

router.get('/', (req, resp)=>{
    resp.render('home')
})

router.get('/contact', (req, resp)=>{
    resp.render('contact')
})

router.get('/about', (req, resp)=>{
    resp.render('about')
})

router.get('/weather', (req, resp)=>{
    resp.render('weather')
})

router.use((req, res) => {
    res.render('404');
  });

module.exports = router