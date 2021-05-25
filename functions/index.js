
const functions = require('firebase-functions');
const express = require('express');
const { getAllUsers, getUserById, newUser,updateUser,deleteUser } = require('./src/users/');

const app = express();

app.post('/users', newUser); //create New user
app.get('/users/:useId', getUserById); //get user by ID
app.get('/users', getAllUsers); //get all users
app.patch('/users/:userId', updateUser) // update User by id
app.delete('users/:userId', deleteUser) // delete User by id

// app.get('/users/:useId/logs', getAllLogs); //get all logs by user
// app.post('/users/:useId/logs', newLog); //create New log
// app.get('/users/:useId/logs/:logID', getLogById); //get log by ID
// app.patch('/users/:useId/logs/:logID', updateLog); //get log by ID
// app.delete('/users/:useId/logs/:logID', deleteLog); //get log by ID


exports.app = functions.https.onRequest(app);