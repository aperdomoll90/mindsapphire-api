const cors = require('cors')
const functions = require('firebase-functions');
const express = require('express');
const { getAllUsers, getUserById, newUser,updateUser,deleteUser } = require('./src/users/');
const {newLog,updateLog, getLogById}= require('./src/logs/index')
const app = express();
app.use(cors())

app.post('/users/:userId', newUser);//create New user
app.get('/users/:userId', getUserById); //get user by ID

app.patch('/users/:userId', updateUser) // update User by id

app.post('/logs/:logId', newLog); //create New log
app.patch('/logs/:logId', updateLog) // update User by id
app.get('/logs/:logId', getLogById); //get getLogById



exports.app = functions.https.onRequest(app);