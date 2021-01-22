import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RepositoriesListComponent from "@views/components/RepositoriesList/RepositoriesListComponent";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import { Repository } from "@store/repositories/types";

const StyledRepositoriesList = styled.div`
  max-width: 456px;
`;

interface Props {
  search: string;
}

const RepositoriesList: React.FC<Props> = ({ search }) => {
  const repositoriesList = useSelector(
    (state: RootState) => state.repositories.data ?? []
  );

  const [filteredRepositories, setFilteredRepositories] = useState<
    Repository[]
  >([]);

  useEffect(() => {
    if (search.length <= 2) {
      setFilteredRepositories([]);
      return;
    }
    const filtered = repositoriesList.filter((repo: Repository) =>
      repo.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRepositories(filtered);
  }, [search]);

  return repositoriesList?.length ? (
    <StyledRepositoriesList className="w-full absolute top-18 left-0">
      {filteredRepositories.map((repo) => (
        <RepositoriesListComponent repo={repo} key={repo.id} />
      ))}
    </StyledRepositoriesList>
  ) : null;
};

export default RepositoriesList;
