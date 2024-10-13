import AddNote from "../AddNote";
import Note from "../Note";
import { NotesListContainer } from "./styled";

const NotesList = ({ notes, handleAddNote }) => {
  return (
    <NotesListContainer>
      {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </NotesListContainer>
  );
};

export default NotesList;
