const express = require('express');
const router = express.Router();

var SubscriberController = require('../controllers/subscriberController');

const routes = {
    home:'/home',
    createSubscriber: '/subscriber/create',
    getAllSubscribers: '/subscriber/all'
}


router.get(routes.home, (req,res) => {
    res.send("THIS IS HOME");
});


//subscriber api
router.post(routes.createSubscriber, async (req,res) => {
    try {
        const subscriber = await SubscriberController.create(req);
        return res.send(subscriber);
    }catch(err) {
        return res.status(500).send('User already exist!')
    }
});

router.get(routes.getAllSubscribers, async (req,res) => {
    
    const subscribers = await SubscriberController.getAllSubscribers();
    
    res.send(subscribers);
});


module.exports = router;