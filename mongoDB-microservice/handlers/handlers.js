const mongoose = require('mongoose')
const User = require('../models/users')
const Property = require('../models/properties')


exports.post = (req,res) => {
    const userData = {
        full_name: req.body.full_name,
        email: req.body.email,
        phone: req.body.phone
    }
    User.create(userData)
    .then(user => {
        const propertyData = {
            Location: {
                Region: req.body.region,
                Subregion: req.body.subregion
            },
            Type: req.body.type,
            Owner: user._id
        }
        Property.create(propertyData)
          .then(
            res.send({
              message: "Information was succesfully saved to the database"
            })
          )
          .catch(e => console.log(e));
    })
    .catch(e => console.log(e))
}




