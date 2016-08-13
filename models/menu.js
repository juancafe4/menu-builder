"use strict";

const db = require('../config/db');
const squel = require('squel').useFlavour('mysql');
const uuid = require('uuid');

db.query(`create table if not exists menus(
  id varchar(50),
  name varchar(100),
  type varchar(50),
  resId, varchar(50) not null,
  price int,
  picUrl varchar(200)
  )`, err =>{
    if(err){
      console.log('table create err:', err)
    }
})

exports.getAll = function() {
  return new Promise((resolve, reject) => {
    let sql = select().from('menus').
  });
}