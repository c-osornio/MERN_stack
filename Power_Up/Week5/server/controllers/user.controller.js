const User = require('../models/user.model')

module.exports = {
    create: (req, res) => {
        User.create(req.body)
            .then(newUser => {
                res.json({ user: newUser })
            })
            .catch((err) => {
                res.status(400).json({ message: 'Something went wrong', error: err })
            });
    },
    getAll: (req, res) => {
        User.find()
            .then((allUsers) => {
                res.json({ users: allUsers })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    },
    getOne: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(oneSingleUser=> {
                res.json({ user: oneSingleUser })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    },
    update: (req, res) => {
        User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedUser => {
                res.json({ user: updatedUser })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    },
    delete: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({ result: result })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    }
}

// module.exports.findAllUsers = (req, res) => {
//     User.find()
//         .then((allUsers) => {
//             res.json({ users: allUsers })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }

// module.exports.findOneSingleUser = (req, res) => {
//     User.findOne({ _id: req.params.id })
//         .then(oneSingleUser=> {
//             res.json({ user: oneSingleUser })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }

// module.exports.createNewUser = (req, res) => {
//     User.create(req.body)
//         .then(newUser => {
//             res.json({ user: newUser })
//         })
//         .catch((err) => {
//             res.status(400).json({ message: 'Something went wrong', error: err })
//         });
// }

// module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedUser => {
//             res.json({ user: updatedUser })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }

// module.exports.deleteAnExistingUser = (req, res) => {
//     User.deleteOne({ _id: req.params.id })
//         .then(result => {
//             res.json({ result: result })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }