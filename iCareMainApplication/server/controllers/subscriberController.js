var Subscriber = require('../models/subscriber');

module.exports = {
    create: (req) => {
        return new Promise((resolve, reject) => {
            var newSubscriber = new Subscriber({
                name: req.body.name,
                email: req.body.email
            });

            newSubscriber.save((err) => {
                if(err) reject(err);
                resolve(newSubscriber);
            });
        });
    },
    getAllSubscribers: () => {
        return new Promise((resolve, reject) => {
            Subscriber.find({}, (err, subscribers) => {
                if(err) reject(err);
                resolve(subscribers);
            });
        });
    }
}