export const snapshotToDoc = (
  documentSnapshot
) => {
  if (documentSnapshot.exists) {
    return {
      ...documentSnapshot.data(),
      id: documentSnapshot.id,
    };
  } else {
    return null;
  }
};

export const snapshotToArray = (
  querySnapshot
) => {
  if (querySnapshot.empty) {
    return [];
  } else {
    return querySnapshot.docs.map(snapshotToDoc);
  }
};
