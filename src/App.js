import { ThemeProvider } from "styled-components";
import Container from "./common/Container";
import { Globalstyle } from "./GlobalStyle";
import { darkTheme, lightTheme } from "./theme";
import Search from "./features/notes/Search";
import Header from "./common/Header";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./common/Theme/themeSlice";

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Globalstyle />
        <Header />
        <Search />
      </Container>
    </ThemeProvider>
  );
};

export default App;
