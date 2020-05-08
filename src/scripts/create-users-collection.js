const admin = require("firebase-admin");
const serviceAccount = require("../../firebase-service-account.json");
admin.initializeApp({
  credential: admin.credential.cert(
    serviceAccount
  ),
  databaseURL:
    "https://sandbox-j123kj.firebaseio.com",
});
const db = admin.firestore();

function addUserToCollection(user) {
  db.collection("users").doc(user.uid).set({
    admin: true,
    email: user.email,
  });
}

function listAllUsers(nextPageToken) {
  // List batch of users, 1000 at a time.
  admin
    .auth()
    .listUsers(1000, nextPageToken)
    .then(function (listUsersResult) {
      listUsersResult.users.forEach(function (
        userRecord
      ) {
        const user = userRecord.toJSON();
        addUserToCollection(user);
        console.log("user", user);
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(listUsersResult.pageToken);
      }
    })
    .catch(function (error) {
      console.log("Error listing users:", error);
    });
}
// Start listing users from the beginning, 1000 at a time.
listAllUsers();
