import React from "react";
import styled from "styled-components";
import Card from "../../components/library/card";
import Link from "../../components/common/link";

import Avatar from "../../components/library/avatar";
import Description from "./description";

const ProfileCard = styled(Card)`
  text-align: center;
  box-sizing: border-box;
  margin: 50px auto 0;
  min-height: 180px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;
const Profile = ({ userProfile }) => {
  return (
    <ProfileCard>
      <Avatar url={userProfile.photo} />
      <br />
      <Link url={userProfile.url}>{userProfile.name}</Link>
      <br />
      <Description content={userProfile.bio || userProfile.error} />
    </ProfileCard>
  );
};
export default Profile;
