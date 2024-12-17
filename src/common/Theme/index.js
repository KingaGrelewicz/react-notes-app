import { useDispatch } from "react-redux";
import { ThemeButton, ThemeIcon } from "./styled";
import { switchTheme } from "./themeSlice";

const Theme = () => {
  const dispatch = useDispatch();

  return (
    <ThemeButton onClick={() => dispatch(switchTheme())}>
      <ThemeIcon />
    </ThemeButton>
  );
};

export default Theme;
