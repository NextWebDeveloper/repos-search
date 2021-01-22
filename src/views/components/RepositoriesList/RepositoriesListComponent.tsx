import React, { FC } from "react";
import { ReactComponent as RepoIcon } from "@assets/icons/repo-icon.svg";
import styled from "styled-components";
import { Repository } from "@store/repositories/types";
const StyledRepoIcon = styled(RepoIcon)`
  fill: #2f2f2f;
  margin: 0 18px;
`;

const LinkName = styled.span``;

const Link = styled.a`
  border-left: 1px solid #cecece;
  border-right: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  &:first-child {
    border-top: 1px solid #cecece;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  &:hover {
    border-color: #de7064;
    ${StyledRepoIcon} {
      fill: white;
    }
    ${LinkName} {
      color: white;
    }
  }
`;

interface Props {
  repo: Repository;
}

const RepositoriesListComponent: FC<Props> = ({ repo }) => {
  return (
    <Link
      className="flex items-center  bg-grey-light hover:bg-accent py-4 text-dark cursor-pointer leading-none"
      href={repo.html_url}
      target="_blank"
    >
      <StyledRepoIcon />
      <LinkName>{repo.name}</LinkName>
    </Link>
  );
};

export default RepositoriesListComponent;
