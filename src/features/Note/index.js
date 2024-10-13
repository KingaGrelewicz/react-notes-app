import { MdDeleteForever } from "react-icons/md";
import {
    NoteContainer,
  NoteCreationDate,
  NoteFooter,
  NoteParagraph,
  NoteTitle,
} from "./styled";
import { NoteTile } from "../NoteTile";

const Note = ({ id, title, text, date }) => {
  return (
    <NoteTile $variant="note">
      <NoteTitle key={id}>{title}</NoteTitle>
      <NoteContainer>
        <NoteParagraph>{text}</NoteParagraph>
        <NoteFooter>
          <NoteCreationDate>{date}</NoteCreationDate>
          <MdDeleteForever size="25px" />
        </NoteFooter>
      </NoteContainer>
    </NoteTile>
  );
};

export default Note;
