
const functions = require('firebase-functions');
const express = require('express');
const { getAllUsers, getUserById, newUser,updateUser,deleteUser } = require('./src/users/');

const app = express();

app.post('/users', newUser); //create New user
app.get('/users/:userId', getUserById); //get user by ID
app.get('/users', getAllUsers); //get all users
app.patch('/users/:userId', updateUser) // update User by id
app.delete('/users/:userId', deleteUser) // delete User by id

// app.get('/logs/:useId', getAllLogs); //get all logs by user
// app.post('/logs/:useId', newLog); //create New log



exports.app = functions.https.onRequest(app);