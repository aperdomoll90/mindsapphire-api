const cors =require('cors')
const functions = require('firebase-functions');
const express = require('express');
const { getAllUsers, getUserById, newUser,updateUser,deleteUser } = require('./src/users/');
const {newLog,updateLog}= require('./src/logs/index')
const app = express();
app.use(cors())

app.post('/users', newUser);//create New user
app.get('/users/:userId', getUserById); //get user by ID
app.get('/users', getAllUsers); //get all users
app.patch('/users/:userId', updateUser) // update User by id
app.delete('/users/:userId', deleteUser) // delete User by id

app.post('/logs/:logId', newLog); //create New log
// app.get('/logs/:logId', getLogObject); //get all logs objects
app.patch('/logs/:logId', updateLog) // update User by id


exports.app = functions.https.onRequest(app);