const bodyParser = require("body-parser");
const express = require("express");
const { initializeApp } = require("firebase/app");
const { signInWithEmailAndPassword, getAuth } = require("firebase/auth");
const path = require("path");
require("dotenv").config();
const { apiRoutes } = require("./routes");

const app = express();
const port = process.env.PORT || 80;

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", apiRoutes);

app.listen(port, () => {
  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const firebaseEditorCredentials = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  };
  signInWithEmailAndPassword(
    auth,
    firebaseEditorCredentials.email,
    firebaseEditorCredentials.password
  );

  console.log(
    `Listening port ${port} and path to build is: ` +
      path.join(__dirname, "..", "build")
  );
});
