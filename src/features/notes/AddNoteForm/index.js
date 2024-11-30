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
import { useDispatch } from "react-redux";
import { addNote } from "../noteSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddNoteForm = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (text.trim().length > 0 && title.trim().length > 0) {
      const date = new Date().toLocaleDateString();
      const newNote = {
        id: nanoid(),
        title,
        text,
        date,
      };

      dispatch(addNote(newNote));

      setText("");
      setTitle("");
    }
  };

  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  };

  const titleCharacterLimit = 25;

  const handleTitleChange = (e) => {
    if (e.target.value.length <= titleCharacterLimit) {
      setTitle(e.target.value);
    }
  };

  return (
    <NoteTile $variant="addNote">
      <AddNoteTitle
        placeholder="Title of your note"
        value={title}
        onChange={handleTitleChange}
      ></AddNoteTitle>
      <AddNoteContainer>
        <AddNoteText
          rows="8"
          cols="15"
          placeholder="Type your notes here..."
          value={text}
          onChange={handleChange}
        ></AddNoteText>
        <AddNoteFooter>
          <AddNoteRemaining>
            {characterLimit - text.length} Remaining
          </AddNoteRemaining>
          <AddNoteButton onClick={handleAddNote}>Save</AddNoteButton>
        </AddNoteFooter>
      </AddNoteContainer>
    </NoteTile>
  );
};

export default AddNoteForm;
