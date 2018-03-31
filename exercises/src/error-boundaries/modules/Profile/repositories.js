import React from "react";
import styled from "styled-components";
import Card from "../../components/library/card";
import Star from "../../components/library/star";
import Clear from "../../components/library/clear";
import Link from "../../components/common/link";

const RepoList = styled(Card)`
  margin: 10px auto;
  box-sizing: border-box;
  min-height: 215px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Repo = styled.div`
  color: #777;
  > a {
    float: left;
    margin-top: 10px;
  }
  > span {
    float: right;
  }
`;

export default props => (
  <RepoList>
    {props.repos &&
      props.repos.map((repo, index) => (
        <Repo key={index}>
          <Link url={repo.url}>{repo.name}</Link>
          <Star>{repo.stars}</Star>
          <Clear />
        </Repo>
      ))}
  </RepoList>
);
