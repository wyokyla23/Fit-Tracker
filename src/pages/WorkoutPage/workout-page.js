import React, { useEffect } from "react";
import firebase from "firebase/app";

export default function WorkoutPage() {
  useEffect(() => {
    (async () => {
      const db = firebase.firestore();
      const snapshot = await db
        .collection("locations")
        .get();
      const locations = [];
      snapshot.forEach((doc) => {
        locations.push(doc.data());
      });
      console.log({ locations });
    })();
  }, []);

  return <h1>Workout Page</h1>;
}

// let locationsRef = db.collection('locations')
// let queryRef = locationsRef.where('')
//Get all Nevada locations
//Get all residents with
