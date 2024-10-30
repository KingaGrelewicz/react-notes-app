import { SearchContainer, SearchInput } from "./styled";
import { IoMdSearch } from "react-icons/io";

const Search = ({ handleSearchNote }) => {
  return (
    <SearchContainer>
      <IoMdSearch size="24px" />
      <SearchInput
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </SearchContainer>
  );
};

export default Search;
