import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { SearchContainer, SearchIcon, SearchInput } from "./styled";

import NotesList from "../NotesList";
import { selectNotes } from "../noteSlice";

const Search = () => {
  const notes = useSelector(selectNotes);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = useMemo(() => {
    if (!searchQuery.trim()) {
      return notes;
    }

    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [notes, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.trim());
  };

  return (
    <div>
      <SearchContainer>
        <SearchIcon size="24px" />
        <SearchInput
          onChange={handleSearchChange}
          value={searchQuery}
          type="text"
          placeholder="type to search..."
        />
      </SearchContainer>
      <NotesList notes={filteredNotes} />
    </div>
  );
};

export default Search;
