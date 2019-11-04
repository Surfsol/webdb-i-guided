const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

//knex query builder http://knexjs.org/#Builder-select
router.get('/', (req, res) => {
    //get lists of post from db
    db.select('*').from('posts') //all knex commands return a promise
    .then(posts => {
        res.status(200).json(posts)
    }).catch(error => {
        res.status(500).json(error)
    })

});

router.get('/:id', (req, res) => {
    //select * from posts where id = req.params.id
    db.select('*').from('posts').where('id', '=', req.params.id)
    .then(post => {
        res.status(200).json(post)
    }).catch(error => {
        res.status(500).json(error)
    })
});

router.post('/', (req, res) => {
    db.insert(req.body, 'id')
    .into('posts')
    .then(ids => {
        res.status(200).json(post)
    }).catch(error => {
        res.status(500).json(error)
    })
});

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body;

    db('posts').where({id: req.params.id})
    .update(changes)
    .then(count => {
        res.status(200).json(count)
    }).catch(error => {
        res.status(500).json(error)
    })
});

router.delete('/:id', (req, res) => {
    db('posts').where({id: req.params.id})
    .del()
    .then(count => {
        res.status(200).json(count)
    }).catch(error => {
        res.status(500).json(error)
    })
});

module.exports = router;