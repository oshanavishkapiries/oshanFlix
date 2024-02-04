const fs = require("fs");
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, query, where, getDocs } = require("firebase/firestore");

const firebaseConfig = require('../../firebaseAuth.js');
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function getAndSaveDocumentById(idToSearch) {
  try {
    const tvSeriesCollection = collection(db, "tv_series");
    const q = query(tvSeriesCollection, where("id", "==", idToSearch));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const seriesData = doc.data();
      const filePath = `./data/${idToSearch}.json`;
      fs.writeFileSync(filePath, JSON.stringify(seriesData, null, 2));
      console.log(`Document with ID ${idToSearch} saved as ${filePath}`);
    } else {
      console.log(`Document with ID ${idToSearch} not found.`);
    }
  } catch (error) {
    console.error("Error retrieving and saving document:", error);
  }
}

//==================================
const idToSearch = "108978";
//==================================
// RUN : node ./TV/CRUD/U.js
getAndSaveDocumentById(idToSearch);
