
// require dotenv, database script to connect to database 
require('dotenv').config(); 
require('./config/database'); 

// require Mongoose models  

const User = require('./models/user'); 
// const Item = require('./models/item'); 
// const Category = require('./models/category'); 
// const Order = require('./models/order'); 

// local variables will come in handy for holding retrieved documents 
let user, item, category, order; 
let users, items, categories, orders; 




/*  CRUD-HELPER.js used to create user on DB before all components of 'user' is fleshed out i.e. if client side form component is not finished setting up for user creation submission 
> .load crud-helper.js

// require dotenv, database script to connect to database 
require('dotenv').config(); 
require('./config/database'); 

// require Mongoose models  

const User = require('./models/user'); 
// const Item = require('./models/item'); 
// const Category = require('./models/category'); 
// const Order = require('./models/order'); 

// local variables will come in handy for holding retrieved documents 
let user, item, category, order; 
let users, items, categories, orders; 
{}
> Connected to mern-infrastructure at ac-zmz7dpu-shard-00-01.9z3527d.mongodb.net:27017
> User.create({
... name: 'Norbu', 
... email: 'akyeshi@norbue.com', 
... password: 'scientist'
... }).then(u => user = u)
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 2932,
  [Symbol(trigger_async_id_symbol)]: 2919
}
> user
{
  name: 'Norbu',
  email: 'akyeshi@norbue.com',
  password: '$2b$06$gWp9s.l8HJrv3LmcxerYI./grO3YHtPOjKI5.o40.uKMG.3IDwxQW',
  _id: new ObjectId('66369d62ca06c801b049b353'),
  createdAt: 2024-05-04T20:41:06.353Z,
  updatedAt: 2024-05-04T20:41:06.353Z,
  __v: 0
}
> JSON.stringify(user); 
'{"name":"Norbu","email":"akyeshi@norbue.com","_id":"66369d62ca06c801b049b353","createdAt":"2024-05-04T20:41:06.353Z","updatedAt":"2024-05-04T20:41:06.353Z","__v":0}'
> user.password = 'scientist2143'
'scientist2143'
> user.save()
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 6647,
  [Symbol(trigger_async_id_symbol)]: 5
}
> user
{
  name: 'Norbu',
  email: 'akyeshi@norbue.com',
  password: '$2b$06$2WeanrqxyjKPzbDcxBgXbejMr.BXJCjM8O/LlWoCeMV2vmPuK21YS',
  _id: new ObjectId('66369d62ca06c801b049b353'),
  createdAt: 2024-05-04T20:41:06.353Z,
  updatedAt: 2024-05-04T20:44:05.249Z,
  __v: 0
}
> .exit



*/