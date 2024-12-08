import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Note from "../Note";
import AddNoteForm from "../AddNoteForm";
import {
  ErrorWrapper,
  LoadingSpinner,
  LoadingText,
  LoadingWrapper,
  NotesListContainer,
} from "./styled";
import { deleteNote, fetchNotesStart, selectNotesStatus } from "../noteSlice";
import loading_spinner from "../../../image/loading_spinner.png";

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
    return (
      <LoadingWrapper>
        <LoadingText>Wait please... is loading...</LoadingText>
        <LoadingSpinner src={loading_spinner} />
      </LoadingWrapper>
    );
  }

  if (status === "error") {
    return (
      <ErrorWrapper>
        There was something happened, try to refresh your browser 🫣
      </ErrorWrapper>
    );
  }

  if (status === "success") {
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
