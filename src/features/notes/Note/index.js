import { MdDeleteForever } from "react-icons/md";
import {
  NoteButton,
  NoteContainer,
  NoteCreationDate,
  NoteFooter,
  NoteParagraph,
  NoteTitle,
} from "./styled";
import { NoteTile } from "../NoteTile";

const Note = ({ id, title, text, date, handleDeleteNote }) => {
  return (
    <NoteTile $variant="note">
      <NoteTitle id={id}>{title}</NoteTitle>
      <NoteContainer>
        <NoteParagraph>{text}</NoteParagraph>
        <NoteFooter>
          <NoteCreationDate>{date}</NoteCreationDate>
          <NoteButton onClick={() => handleDeleteNote(id)}>
            <MdDeleteForever size="25px" />
          </NoteButton>
        </NoteFooter>
      </NoteContainer>
    </NoteTile>
  );
};

export default Note;
