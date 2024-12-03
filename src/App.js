import { ThemeProvider } from "styled-components";
import Container from "./common/Container";
import { Globalstyle } from "./GlobalStyle";
import { theme } from "./theme";
import Search from "./features/notes/Search";
import Header from "./common/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Globalstyle />
        <Header />
        <Search />
      </Container>
    </ThemeProvider>
  );
};

export default App;
