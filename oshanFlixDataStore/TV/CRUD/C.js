const { initializeApp } = require("firebase/app");
const { getFirestore, addDoc, collection } = require("firebase/firestore");

const firebaseConfig = require('../../firebaseAuth.js');

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function storeTvSeriesData() {
  try {
    const tvSeriesCollection = collection(db, "tv_series");
    const docRef = await addDoc(tvSeriesCollection, tvSeriesData);

    console.log("TV series data stored successfully!");
    console.log("Document ID:", docRef.id);
  } catch (error) {
    console.error("Error storing TV series data:", error);
  }
}
//==================================
const tvSeriesData = require('../data/73375.js');
//==================================
// RUN : node ./TV/CRUD/C.js
storeTvSeriesData();
