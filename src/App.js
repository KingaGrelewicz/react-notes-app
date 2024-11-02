import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ThemeProvider } from "styled-components";
import Container from "./common/Container";
import NotesList from "./features/NotesList";
import { Globalstyle } from "./GlobalStyle";
import { theme } from "./theme";
import Search from "./features/Search";
import Header from "./features/Header";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));
    return (
      savedNotes || [
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
          text: "This is your third note",
          date: "12.10.2024",
        },
      ]
    );
  });

  const [searchNote, setSearchNote] = useState("");

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

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

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Globalstyle />
        <Header />
        <Search handleSearchNote={setSearchNote} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchNote.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
