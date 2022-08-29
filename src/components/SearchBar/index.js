import React from "react";
import { useDispatch } from "react-redux";
import { resetData } from "../../redux/actions/rootActions";
import styles from "./style.module.css";

function SearchBar({ value, setValue }) {
  const dispatch = useDispatch();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    setValue(formProps.search)
    dispatch(resetData());
  };
  return (
    <form className={styles.searchBarContainer} onSubmit={handleSubmit}>
      <input
        className={styles.searchBar}
        name="search"
        placeholder="Enter your Keyword"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
