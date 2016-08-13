"use strict";

const db = require('../config/db');
const squel = require('squel').useFlavour('mysql');
const uuid = require('uuid');

db.query(`create table if not exists menus(
  id varchar(50),
  name varchar(100),
  type varchar(50),
  resId varchar(50) NOT NULL,
  price decimal(6, 2),
  picUrl varchar(200)
  )`, err =>{
    if(err)
      console.log('table create err:', err)
    
  });

exports.getAll = function() {
  return new Promise((resolve, reject) => {
    let sql = squel.select().from('menus').toString();
    db.query(sql, (err, menus) =>{
      if(err){
        reject(err);
      } else {
        resolve(menus);
      }
    })
  });
}


//name -> String
//type -> String
//resId -> String
//price -> Number
//picUrl -> String

exports.create = function(newMenu){
  return new Promise((resolve, reject)=>{
    let sql = squel.insert()
    .into('menus')
    .setFields(newMenu)
    .set('id', uuid())
    .toString()
    db.query(sql, (err, menu) =>{
      if(err){
        reject(err);
      } else {
        resolve(menu);
      }
    })
  });
}

//Get one menu item
exports.getOne = function(id) {
  return new Promise((resolve, reject) => {
    let sql = squel.select().from('menus')
    .where(`id="${id}"`)
    .toString()
    db.query(sql, (err , menus) => {
      if (err) reject(err)
      else if(!menus[0]) reject("Error: menu item could not be found!")
          else resolve(menus[0])
    });
  });
}


//Updates the menu item

//So the user can update the name, menu item, the price, and picture url
exports.update = function(id, updateObj) {
  return new Promise((resolve, reject) => {
    let sql = squel.update()
    .table('menus')
    .setFields(updateObj)
    .where(`id = "${id}"`)
    .toString();
    db.query(sql, err => {
      if (err) reject(err)
        else resolve()
      })
  })
}

//Delete a menu item

exports.delete = function(id) {
  return new Promise((resolve, reject) => {
    let sql = squel.delete()
    .from('menus')
    .where(`id = "${id}"`)
    .toString();
    db.query(sql, err => {
      if (err) reject(err)
        else resolve()
      })
  });
}
