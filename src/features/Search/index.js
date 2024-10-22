import { SearchContainer, SearchInput } from "./styled";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <SearchContainer>
      <IoMdSearch size="24px" />
      <SearchInput type="text" placeholder="type to search..." />
    </SearchContainer>
  );
};

export default Search;
