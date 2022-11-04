const Pizza= require('../models/pizza.model')

module.exports = {
    create: (req, res) => {
        Pizza.create(req.body)
            .then( result => {
                res.status(201).json(result)
            })
            .catch( err => {
                res.status(404).json({ message: 'Something went wrong!', error: err })
            });
    },
    getAll: (req, res) => {
        Pizza.find()
            .then( result => {
                res.status(200).json(result)
            })
            .catch( err => {
                res.status(404).json({ message: 'Something went wrong!', error: err })
            });
    },
    getOne: (req, res) => {
        Pizza.findOne({ _id: req.params.id })
            .then(result=> {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(404).json({ message: 'Something went wrong!', error: err })
            });
    },
    update: (req, res) => {
        Pizza.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then( result => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(404).json({ message: 'Something went wrong!', error: err })
            });
    },
    delete: (req, res) => {
        Pizza.deleteOne({ _id: req.params.id })
            .then(result => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(404).json({ message: 'Something went wrong!', error: err })
            });
    }
}