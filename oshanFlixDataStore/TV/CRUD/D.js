const { initializeApp } = require("firebase/app");
const { getFirestore, collection, query, where, getDocs, deleteDoc, doc } = require("firebase/firestore");

const firebaseConfig = require('../../firebaseAuth.js');

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function deleteDocumentById(idToDelete) {
  try {
    const tvSeriesCollection = collection(db, "tv_series");
    const q = query(tvSeriesCollection, where("id", "==", idToDelete));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      await deleteDoc(doc.ref);
      console.log(`Document with ID ${idToDelete} deleted successfully`);
    } else {
      console.log(`Document with ID ${idToDelete} not found.`);
    }
  } catch (error) {
    console.error("Error deleting document:", error);
  }
}

//==================================
const idToDelete = "108978";
//==================================
// RUN : node ./TV/CRUD/D.js
deleteDocumentById(idToDelete);
