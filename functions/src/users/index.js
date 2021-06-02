const admin = require('firebase-admin')
const { connectToFB } = require('../firestore')


exports.newUser = (req, res) => {
  const db = connectToFB()
  const { userId } = req.params
  const newData = req.body
  db.collection('users')
  .doc(userId)
  .set(newData)
  .then(data => {res.send(data)})
  .catch((err) => res.send('Error creating new user', +err.message))
}

exports.updateUser = (req, res) => {
  const db = connectToFB()
  const { userId } = req.params
  const newData = req.body
  db.collection('users')
  .doc(userId)
  .update(newData)
  .then(data => {res.send(data)})
  .catch((err) =>
  res.status(500).send('Error updating this user: ' + err.message)
  )
}

exports.getUserById = (req, res) => {
  const db = connectToFB()
  const { userId } = req.params
  db.collection('users')
  .doc(userId)
  .get()
  .then((doc) => {
    let user = doc.data()
    user.id = doc.id
    res.send(user)
  })
  .catch((err) => res.send('Error fetching user', +err.message))
}


// exports.newUserById = (req, res) => {
  //   const db = connectToFB()
  //   const {userId} = req.params
  //   const newData = req.body;
  //   db.collection('users/{userId}')
  //     .add(newData)
  //     .then(() => this.getAllUsers(req, res))
  //     .catch((err) => res.send('Error creating new user', +err.message));
  // };
  
  
  // exports.deleteUser = (req, res) => {
  //   const db = connectToFB()
  //   const { userId } = req.params
  //   db.collection('users')
  //   .doc(userId)
  //   .delete()
  //   .then(() => this.getAllUsers(req, res))
  //   .catch((err) =>
  //   res.status(500).send('Error deleting this user: ' + err.message)
  //   )
  // }
  
  // exports.getAllUsers = (req, res) => {
  //   const db = connectToFB()
  //   db.collection('users')
  //     .get()
  //     .then((collection) => {
  //       let allUsers = []
  //       collection.forEach((doc) => {
  //         let user = doc.data()
  //         user.id = doc.id
  //         allUsers.push(user)
  //       })
  //       res.send(allUsers)
  //     })
  //     .catch((err) => res.send('Error fetching user list', +err.message))
  // }