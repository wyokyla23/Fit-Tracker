import React, { useEffect } from "react";
import firebase from "firebase/app";

const snapshotToDocument = (documentSnapshot) => {
  if (documentSnapshot.exists) {
    return {
      ...documentSnapshot.data(),
      id: documentSnapshot.id,
    };
  } else {
    return null;
  }
};

const snapshotToArray = (querySnapshot) => {
  if (querySnapshot.empty) {
    return [];
  } else {
    return querySnapshot.docs.map(
      snapshotToDocument
    );
  }
};

export default function WorkoutPage() {
  useEffect(() => {
    (async () => {
      const db = firebase.firestore();
      const querySnapshot = await db
        .collection("locations")
        .where("state", "==", "Nevada")
        .get();
      const locations = snapshotToArray(
        querySnapshot
      );
      console.log({ locations });
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const db = firebase.firestore();
      const querySnapshot = await db
        .collection("residents")
        .orderBy("lastName", "desc")
        .where("locationId", "in", [
          "5879YNoROaXQtr7BmpSe",
          "XRvpHWv8S3A0Ial8Zox8",
          "XWm6h7nrbFdqupsWbSWz",
          "cC21XleK7vdd1UmRpph2",
        ])
        .get();
      const locations = snapshotToArray(
        querySnapshot
      );
      console.log({ locations });
    })();
  }, []);

  return <h1>Workout Page</h1>;
}
