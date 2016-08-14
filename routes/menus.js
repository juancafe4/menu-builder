"use strict"

const express = require('express')
const router = express.Router();

let menu = require('../models/menu')

router.get('/', (req, res) =>{
  menu.getAll()
            .then(menus =>{
              res.send(menus);
            })
            .catch(err=>{
              console.log(err)
              res.status(400).send(err);
            })
})

router.post('/', (req, res)=>{
  menu.create(req.body)
            .then(()=>{
              return menu.getAll()
            })
            .then(menus => {
              res.send(menus)
            })
            .catch(err =>{
              res.status(400).send(err);
            })
})

router.get('/:id', (req, res)=>{
  menu.getOne(req.params.id)
            .then(menu=>{
              res.send(menu);
            })
            .catch(err =>{
              res.status(400).send(err);
            })
})

router.delete('/:id', (req, res)=>{
  menu.delete(req.params.id)
            .then(()=>{
              return menu.getAll()
            })
            .then(menus => {
              res.send(menus)
            })
            .catch(err =>{
              res.status(400).send(err);
            })
})

router.put('/:id', (req, res)=>{

  menu.update(req.params.id, req.body)
            .then(()=>{
              return menu.getOne(req.params.id)
            })
            .then(mn => {
              res.send(mn)
            })
            .catch(err =>{
              console.log(err)
              res.status(400).send(err);
            });
})

module.exports = router
