import { useMemo, useState } from "react";
import { SearchContainer, SearchInput } from "./styled";
import { IoMdSearch } from "react-icons/io";
import NotesList from "../NotesList";

const Search = ({ notes }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = useMemo(() => {
    if (!searchQuery.trim()) {
      return notes;
    }
    return notes.filter(
      (note) =>
        note.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [notes, searchQuery]);

  return (
    <>
      <SearchContainer>
        <IoMdSearch size="24px" />
        <SearchInput
          onChange={(event) => setSearchQuery(event.target.value)}
          type="text"
          placeholder="type to search..."
        />
      </SearchContainer>
      <NotesList notes={filteredNotes} />
    </>
  );
};

export default Search;
