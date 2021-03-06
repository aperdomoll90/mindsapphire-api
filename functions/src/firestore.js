  
const admin = require('firebase-admin')
const serviceAccount = require('../credentials.json')

exports.connectToFB = () => {
	if (admin.apps.length === 0) {
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
		})
	}
  return admin.firestore()
}