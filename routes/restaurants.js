"use strict"

const express = require('express')
const router = express.Router();

let restaurant = require('../models/restaurant')

router.get('/', (req, res) =>{
  console.log('here')
  restaurant.getAll()
            .then(restaurants =>{
              res.send(restaurants);
            })
            .catch(err=>{
              res.status(400).send(err);
            })
});

router.post('/', (req, res)=>{
  restaurant.create(req.body)
            .then(()=>{
              res.send();
            })
            .catch(err =>{
              res.status(400).send(err);
            })
})

router.get('/:id', (req, res)=>{
  restaurant.getOne(req.params.id)
            .then(restaurant=>{
              res.send(restaurant);
            })
            .catch(err =>{
              res.status(400).send(err);
            })
})

module.exports = router
// router.delete('/:id', (req, res)=>{
//   restaurant.getOne(req.params.id)
//             .then(()=>{
//               res.send();
//             })
//             .catch(err =>{
//               res.status(400).send(err);
//             })
// })

// router.put('/:id', (req, res)=>{
//   restaurant.update(req.params.id, req.body)
//             .then(()=>{
//               res.send();
//             })
//             .catch(err =>{
//               res.status(400).send(err);
//             })
// })


