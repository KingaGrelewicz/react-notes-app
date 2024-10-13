import { useState } from "react";
import { nanoid } from "nanoid";
import { ThemeProvider } from "styled-components";
import Container from "./common/Container";
import NotesList from "./features/NotesList";
import { Globalstyle } from "./GlobalStyle";
import { theme } from "./theme";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Note Title",
      text: "This is your first note",
      date: "12.10.2024",
    },
    {
      id: nanoid(),
      title: "Note Title",
      text: "This is your second note",
      date: "12.10.2024",
    },
    {
      id: nanoid(),
      title: "Note Title",
      text: "This is your trird note",
      date: "12.10.2024",
    },
  ]);

  const addNote = (text, title) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Globalstyle />
        <NotesList notes={notes} handleAddNote={addNote} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
