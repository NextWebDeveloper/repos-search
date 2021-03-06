// @ts-ignore
import React, {
  useState,
  useEffect,
  useMemo,
  useImperativeHandle,
} from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "@assets/icons/search-icon.svg";
import { ReactComponent as SpinnerIcon } from "@assets/icons/spinner-icon.svg";
import { ReactComponent as CrossIcon } from "@assets/icons/cross-icon.svg";

import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import useDebounce from "@views/hooks/useDebounce";

const Form = styled.form`
  max-width: 456px;
  border-radius: 24px;
`;

const SearchForm = React.forwardRef<any, HTMLFormElement>(
  ({ setOuterSearch }, ref) => {
    const [search, setSearch] = useState<string>("");
    const [inputFocused, setInputFocused] = useState<boolean>(false);

    const debouncedSearch = useDebounce(search);

    useEffect(() => {
      setOuterSearch(debouncedSearch);
    }, [debouncedSearch]);

    const storeRepositories = useSelector(
      (state: RootState) => state.repositories
    );

    const repositoriesLoading = useMemo(() => storeRepositories.loading, [
      storeRepositories,
    ]);

    const handleSearchChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ): void => {
      setSearch(e.target.value);
    };

    const handleInputFocus = (): void => {
      setInputFocused(true);
    };

    const handleInputBlur = (): void => {
      setInputFocused(false);
    };

    const clearSearch = (): void => {
      setSearch("");
    };

    useImperativeHandle(ref, () => ({
      clearSearch,
    }));

    return (
      <Form
        className={`h-12 bg-grey-light border-2 ${
          inputFocused ? "border-accent" : "border-grey"
        } w-full flex items-center p-4`}
      >
        <button>
          <SearchIcon />
        </button>
        <input
          className="mx-4 flex-grow bg-transparent focus:outline-none"
          type="text"
          value={search}
          onChange={handleSearchChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder="Type anything..."
        />
        {repositoriesLoading ? (
          <SpinnerIcon className="animate-spin" />
        ) : (
          <button type="button" onClick={clearSearch}>
            <CrossIcon />
          </button>
        )}
      </Form>
    );
  }
);

export default SearchForm;
