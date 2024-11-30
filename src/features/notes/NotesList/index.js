import { useDispatch } from "react-redux";
import Note from "../Note";
import AddNoteForm from "../AddNoteForm";
import { NotesListContainer } from "./styled";
import { deleteNote } from "../noteSlice";

const NotesList = ({ notes }) => {
  const dispatch = useDispatch();

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

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
      <AddNoteForm />
    </NotesListContainer>
  );
};

export default NotesList;
