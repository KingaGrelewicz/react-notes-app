import { useDispatch, useSelector } from "react-redux";
import Note from "../Note";
import AddNoteForm from "../AddNoteForm";
import { NotesListContainer } from "./styled";
import { deleteNote, fetchNotesStart, selectNotesStatus } from "../noteSlice";
import { useEffect } from "react";

const NotesList = ({ notes }) => {
  const status = useSelector(selectNotesStatus);
  const dispatch = useDispatch();

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  useEffect(() => {
    if (status === "initial") {
      dispatch(fetchNotesStart());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>uno momento</p>;
  }

  if (status === "error") {
    return <p>ups!</p>;
  }

  if (status === "success" && notes?.length) {
    return (
      <NotesListContainer>
        <AddNoteForm />
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
      </NotesListContainer>
    );
  }
};

export default NotesList;
