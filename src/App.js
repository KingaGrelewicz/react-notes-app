import { ThemeProvider } from "styled-components";
import Container from "./common/Container";
import { Globalstyle } from "./GlobalStyle";
import { theme } from "./theme";
import Search from "./features/notes/Search";
import Header from "./common/Header";
import { useSelector } from "react-redux";
import { selectNotes } from "./features/notes/noteSlice";

const App = () => {
  const notes = useSelector(selectNotes);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Globalstyle />
        <Header />
        <Search notes={notes} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
