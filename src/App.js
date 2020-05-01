import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Main from "./router/Main/main";
import Header from "./components/Header";
//   <Theme>
//     <Container>
//       <Header>
//       </Header>
//       <Routes/>
//     </Container>
//   </Theme>
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
