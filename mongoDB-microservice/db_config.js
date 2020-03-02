const User = require('./models/users')
const Property = require('./models/properties')

exports.seedDB = () => {
    User.deleteMany({})
        .then(deletedUsersNum => {
            Property.deleteMany({})
                .then(deletedPropertiesNum => {
                    console.log(`Database was seeded. Deleted ${deletedUsersNum.deletedCount} users and ${deletedPropertiesNum.deletedCount} properties`)
                })
        })
}




