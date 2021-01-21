import React, { useEffect, useRef } from "react";
import SearchForm from "@views/components/SearchForm/SearchForm";
import RepositoriesList from "@views/components/RepositoriesList/RepositoriesList";

function SearchFormWrapper() {
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
      <SearchForm ref={searchFormRef} />
      <RepositoriesList />
    </div>
  );
}

export default SearchFormWrapper;
