import { useState } from "react";
import { NoteTile } from "../NoteTile";
import {
  AddNoteButton,
  AddNoteContainer,
  AddNoteFooter,
  AddNoteRemaining,
  AddNoteText,
  AddNoteTitle,
} from "./styled";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0 && noteTitle.trim().length > 0) {
      handleAddNote(noteText, noteTitle);
      setNoteText("");
      setNoteTitle("");
    }
  };

  return (
    <NoteTile $variant="addNote">
      <AddNoteTitle
        placeholder="Title of your note"
        value={noteTitle}
        onChange={handleTitleChange}
      ></AddNoteTitle>
      <AddNoteContainer>
        <AddNoteText
          rows="8"
          cols="15"
          placeholder="Type your notes here..."
          value={noteText}
          onChange={handleChange}
        ></AddNoteText>
        <AddNoteFooter>
          <AddNoteRemaining>200 Remaining</AddNoteRemaining>
          <AddNoteButton onClick={handleSaveClick}>Save</AddNoteButton>
        </AddNoteFooter>
      </AddNoteContainer>
    </NoteTile>
  );
};

export default AddNote;
