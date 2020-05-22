import React from "react";
import { Link } from "react-router-dom";

const CreateButton = () => {
  return (
    <React.Fragment>
      <Link to="/addDocument" className="btn btn-lg btn-info">
        Create Document
      </Link>
    </React.Fragment>
  );
};

export default CreateButton;