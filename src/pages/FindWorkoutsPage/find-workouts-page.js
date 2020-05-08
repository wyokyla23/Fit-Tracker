import React, {
  useEffect,
  useState,
} from "react";
import firebase from "firebase/app";
import { snapshotToArray } from "../../utils/firebase-utils";

export default function FindWorkouts(props) {
  const [exercises, setExercises] = useState({
    loading: true,
    data: [],
  });
  useEffect(() => {
    async function getExercises() {
      const db = firebase.firestore();
      let exercisesRef = db.collection(
        "exercises"
      );
      let snapshot = await exercisesRef.get();
      const exerciseDocs = snapshotToArray(
        snapshot
      );
      setExercises({
        loading: false,
        data: exerciseDocs,
      });
    }
    getExercises();
  }, []);

  return <div>Find Workouts Here!</div>;
}
