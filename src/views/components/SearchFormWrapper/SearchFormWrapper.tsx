import React, { useEffect, useRef, useState } from "react";
import SearchForm from "@views/components/SearchForm/SearchForm";
import RepositoriesList from "@views/components/RepositoriesList/RepositoriesList";
import { loadRepositories } from "@store/repositories/actions";
import { useDispatch } from "react-redux";

function SearchFormWrapper() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRepositories());
  }, []);

  const [search, setSearch] = useState<string>("");

  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        searchFormRef.current?.clearSearch();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <SearchForm ref={searchFormRef} setOuterSearch={setSearch} />
      <RepositoriesList search={search} />
    </div>
  );
}

export default SearchFormWrapper;
