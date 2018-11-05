import React from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import Moment from "react-moment";
import { FiBookOpen, FiCalendar } from "react-icons/fi";
import * as routes from "../../constants/routes";
const ProfileData = ({ data }) => {
  if (!data) {
    return null;
  } else
    return (
      <Card className="px-2 py-1 mt-1">
        <small className="text-uppercase w-100 text-muted">Your Profile</small>
        <strong className="h2"> {data.displayname}</strong>
        <p className="mb-1">{data.bio}</p>
        <small>
          <FiBookOpen /> {data.major}, {data.gradyear}
        </small>
        <small>
          <FiCalendar />
           Joined{" "}
          <Moment className="text-muted" fromNow>
            {data.dateJoined}
          </Moment>
        </small>
        <Link to={routes.ACCOUNT}>Edit your account &rarr;</Link>
      </Card>
    );
};

export default ProfileData;
