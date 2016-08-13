"use strict";

const db = require('../config/db');
const squel = require('squel').useFlavour('mysql');
const uuid = require('uuid');

db.query(`create table if not exists restaurants(
  id varchar(50),
  name varchar(50),
  location varchar(150),
  cuisine varchar(50)
  )`, err =>{
    if(err){
      console.log('table create err:', err)
    }
  })

exports.getAll = function(){
  return new Promise((resolve, reject)=>{
    let sql = squel.select().from('restaurants').toString()
    db.query(sql, (err, restaurants) =>{
      if(err){
        reject(err);
      } else {
        resolve(restaurants);
      }
    })
  })
}

//name -> String
//location -> String
//cuisine -> String
exports.create = function(newRestaurant){
  return new Promise((resolve, reject)=>{
    
    console.log(newRestaurant)
    
    let sql = squel.insert()
    .into('restaurants')
    .setFields(newRestaurant)
    .set('id', uuid())
    .toString()
    db.query(sql, (err, restaurants) =>{
      if(err){
        reject(err);
      } else {
        resolve(restaurants);
      }
    })
  })
}

//Get one restaurant
exports.getOne = function(id) {
  return new Promise((resolve, reject) => {
    let sql = squel.select().from('restaurants')
    .where(`id="${id}"`)
    .toString()
    db.query(sql, (err , restaurants) => {
      if (err) reject(err)
      else if(!restaurants[0]) reject("Error: restaurant could not be found!")
          else resolve(restaurants[0])
    });
  });
}

exports.delete = function(id) {
  return new Promise((resolve, reject) => {
    let sql = squel.delete().from('restaurants').where(`id="${id}"`).toString()
    
    db.query(sql, (err , restaurants) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

exports.update = function(id, updateRes) {
  return new Promise((resolve, reject) => {
    delete updateRes.id;
    let sql = squel.update().table('restaurants').setFields(updateRes).where(`id="${id}"`).toString();
    
    db.query(sql, err => {
      console.log('err')
      if (err) reject(err);
      else resolve();
    });
  });
}

