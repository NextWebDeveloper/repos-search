import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RepositoriesListComponent from "@views/components/RepositoriesList/RepositoriesListComponent";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";

const StyledRepositoriesList = styled.div`
  max-width: 456px;
`;

const RepositoriesList = () => {
  const repositoriesList = useSelector(
    (state: RootState) => state.repositories.data
  );

  return repositoriesList?.length ? (
    <StyledRepositoriesList className="w-full absolute top-18 left-0">
      {repositoriesList.map((repo) => (
        <RepositoriesListComponent repo={repo} key={repo.id} />
      ))}
    </StyledRepositoriesList>
  ) : null;
};

export default RepositoriesList;
