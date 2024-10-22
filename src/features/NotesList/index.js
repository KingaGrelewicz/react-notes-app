import AddNote from "../AddNote";
import Note from "../Note";
import { NotesListContainer } from "./styled";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <NotesListContainer>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </NotesListContainer>
  );
};

export default NotesList;
