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
//   <Theme>
//     <Container>
//       <Header>
//       </Header>
//       <Routes/>
//     </Container>
//   </Theme>
function App() {
  const [user, setUser] = useState({
    loading: true,
    data: null,
  });
  const loggedIn = Boolean(user.data);
  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(function (user) {
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
      <Header loggedIn={loggedIn} user={user} />
      <Main loggedIn={loggedIn} user={user} />
    </ThemeProvider>
  );
}

export default App;
