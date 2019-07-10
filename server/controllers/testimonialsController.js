const Testimonials = require('../models/Testimonials');

exports.displayTestimonials = async (req, res) => {
    const testimonials = await Testimonials.findAll();
    res.render("testimonials", {
        pageTitle: "Testimonials",
        testimonials
    });
}

exports.addTestimonials = async (req, res) => {
    let {name, email, message} = req.body;

    // validate the form
    let errors = [];
    if(!name) {
        errors.push({'message': 'Add Your Name'});
    } 
    if(!email) {
        errors.push({'message': 'Add Your Email'});
    } 
    if(!message) {
        errors.push({'message': 'Add Your Testimonial'});
    } 

    // check if there are some errors
    if(errors.length > 0) {
        // we have some errors, display the warning to the view
        const testimonials = await Testimonials.findAll()
        res.render("testimonials", {
            pageTitle: "Testimonials",
            errors, 
            name,
            email,
            message,
            testimonials
        });
    } else {
        // save to the database
        const result = await Testimonials.create({
            name,
            email,
            message
        })
        if(result) {
            res.redirect('/testimonials')
        } else { console.log('Something Went Wrong') }
    }
}