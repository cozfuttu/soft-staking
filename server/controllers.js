const { getApp, getApps, initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} = require("firebase/firestore");

exports.getNftDbData = async (req, res) => {
  const { tokenId } = req.body;
  const app = getApp();

  // AUTH
  /*  const auth = getAuth(app)
    const firebaseEditorCredentials = { email: process.env.EMAIL, password: process.env.PASSWORD }
    await signInWithEmailAndPassword(auth, firebaseEditorCredentials.email, firebaseEditorCredentials.password) */

  // FIRESTORE
  const db = getFirestore(app);
  const dbRef = collection(db, "nftIds");
  const docsData = await getDocs(dbRef);
  const nftsData = docsData.docs.map((doc) => ({
    ...doc.data(),
    tokenId: doc.id,
  }));
  console.log(nftsData);
};
