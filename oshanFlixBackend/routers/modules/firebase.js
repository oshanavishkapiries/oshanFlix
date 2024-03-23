import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  startAfter,
  limit,
} from "firebase/firestore";
import { firebaseConfig } from "./firebaseAuth.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to fetch TV series data
export const getTVSeriesData = async (offset = 1, limitAmount = 30) => {
  const result = [];
  try {
    const tvSeriesCollection = collection(db, "tv_series");

    const q = query(
      tvSeriesCollection,
      orderBy("created_at"),
      startAfter(offset),
      limit(limitAmount)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const { created_at, id, type, title, poster_url, rating } = data;

      result.push({
        created_at,
        id,
        type,
        title,
        poster_url,
        rating,
      });
    });

    return result;
  } catch (error) {
    console.error("Error getting TV series data", error);
    throw new Error("Internal Server Error");
  }
};

// Function to fetch TV series details data

export async function filterDataByIdAndType(id, type) {
  let collectionName = "";
  type === "tv" ? (collectionName = "tv_series") : (collectionName = "movies");

  try {
    const collectionRef = collection(db, collectionName);

    const q = query(
      collectionRef,
      where("id", "==", id),
      where("type", "==", type)
    );
    const querySnapshot = await getDocs(q);
    const filteredData = querySnapshot.docs.map((doc) => doc.data());

    return filteredData;
  } catch (error) {
    console.error("Error filtering data:", error);
    throw error;
  }
}
