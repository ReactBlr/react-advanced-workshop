import React, { Component, Fragment } from "react";
import { getRepos } from "../../api/repos";
import { getUser } from "../../api/user";
import ProfileInput from "./profile-input";
import UserProfile from "./profile";
import Repositories from "./repositories";
import Card from "../../components/library/card";
import Nav from "../../components/common/nav";
import styled from "styled-components";

const RepositoriesCard = styled(Card)`
  text-align: center;
  box-sizing: border-box;
  margin: 20px auto 0;
  padding: 30px 50px;
  width: 500px;
  min-height: 100px;
  color: #000000;

  @media (max-width: 600px) {
    width: 90%;
  }
`;
export default class Profile extends Component {
  state = {
    userRepos: [{}, {}, {}, {}, {}],
    userProfile: {}
  };
  getUserInfo = userName => {
    getUser(userName).then(userProfile => this.setState({ userProfile }));
    getRepos(userName).then(userRepos => this.setState({ userRepos }));
  };
  render() {
    const { userRepos, userProfile } = this.state;
    let RepositoriesData = (
      <RepositoriesCard>
        <UserProfile userProfile={userProfile} />
        <Repositories repos={userRepos} />
      </RepositoriesCard>
    );

    if (!userProfile.url) {
      RepositoriesData = <RepositoriesCard>No Data Found..</RepositoriesCard>;
    }
    return (
      <Fragment>
        <ProfileInput getUserInfo={this.getUserInfo} />
        {RepositoriesData}
      </Fragment>
    );
  }
}
