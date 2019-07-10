const express = require('express');
const router = express.Router();

// import controllers
const aboutController = require('../controllers/aboutController');
const travelController = require('../controllers/travelController');
const testimonialsController = require('../controllers/testimonialsController');
const homeController = require('../controllers/homeController');

module.exports = () => {
    router.get('/', homeController.displayHomePage);
    router.get('/about', aboutController.aboutInformation);
    router.get('/travels', travelController.travelsInformation);
    router.get('/travels/:id', travelController.travelInformation);
    router.get('/testimonials', testimonialsController.displayTestimonials);
    router.post('/testimonials', testimonialsController.addTestimonials);
    return router;
}