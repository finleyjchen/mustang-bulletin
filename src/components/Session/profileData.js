import React from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
 const ProfileData = ({ data }) => {
  if(!data) {
    return null
  } else
  return ( 
    <Card className="p-4 mt-1">
         <small className="text-uppercase w-100 text-muted">Your Profile</small>
         <strong className="h1"> {data.displayname}</strong>

    </Card>
  )};

  export default ProfileData;