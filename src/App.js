import React, {
  useEffect,
  useState,
} from "react";
import * as firebase from "firebase/app";
import { ThemeProvider } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import theme from "./theme";
import Main from "./router/Main";
import Header from "./components/Header";

const getUserByUID = async (db, uid) => {
  const snapshot = await db
    .collection("users")
    .doc(uid)
    .get();
  return snapshot.data();
};

function App() {
  const [user, setUser] = useState({
    loading: true,
    data: null,
  });
  const loggedIn = Boolean(user.data);
  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(async function (
        dbUser
      ) {
        const db = firebase.firestore();
        const user = dbUser
          ? await getUserByUID(db, dbUser.uid)
          : null;
        setTimeout(() => {
          setUser({
            loading: false,
            data: user,
          });
        }, 1000);
      });
  }, []);
  if (user.loading) {
    return (
      <div
        style={{
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Header
        loggedIn={loggedIn}
        user={user.data}
        isAdmin={user.data?.admin}
      />
      <Main
        loggedIn={loggedIn}
        user={user.data}
      />
    </ThemeProvider>
  );
}

export default App;
