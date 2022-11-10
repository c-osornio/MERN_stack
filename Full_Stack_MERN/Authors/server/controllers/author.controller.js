const Author= require('../models/author.model')

module.exports = {
    create: (req, res) => {
        Author.create(req.body)
            .then( result => {
                res.status(201).json(result)
            })
            .catch( err => {
                res.status(404).json({ message: 'Something went wrong!', error: err })
            });
    },
    getAll: (req, res) => {
        Author.find()
            .then( result => {
                res.json(result)
            })
            .catch( err => {
                res.status(404).json({ message: 'Something went wrong!', error: err })
            });
    },
    getOne: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(result=> {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ message: 'Something went wrong!', error: err })
            });
    },
    update: (req, res) => {
        Author.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then( result => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ message: 'Something went wrong!', error: err })
            });
    },
    delete: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ message: 'Something went wrong!', error: err })
            });
    }
}