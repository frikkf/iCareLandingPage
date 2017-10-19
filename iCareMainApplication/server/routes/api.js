const express = require('express');
const router = express.Router();

var SubscriberController = require('../controllers/subscriberController');

router.get('/home', (req,res) => {
    res.send("THIS IS HOME");
});


//subscriber api
router.post('/subscriber/create', async (req,res) => {
    
    const subscriber = await SubscriberController.create(req);
    
    res.send(subscriber);
});
router.get('/subscriber/all', async (req,res) => {
    
    const subscribers = await SubscriberController.getAllSubscribers();
    
    res.send(subscribers);
});


module.exports = router;