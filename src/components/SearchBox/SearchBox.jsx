import { useId } from "react";
import { useDispatch } from "react-redux";

import css from "./SearchBox.module.css";
import { filterNumbers } from "../../redux/";

const SearchBar = () => {
  const id = useId();
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(filterNumbers(e.target.value.trim()));

  return (
    <div className={css.searchBar}>
      <label htmlFor={id}>Find contact by name</label>
      <input
        type="text"
        id={id}
        className={css.searchInput}
        onChange={onChange}
        placeholder="Search"
        name="search"
      />
    </div>
  );
};
export default SearchBar;
