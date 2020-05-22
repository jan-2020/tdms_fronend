import React from "react";
import { Link } from "react-router-dom";

const ListButton = () => {
  return (
    <React.Fragment>
      <Link to="/listDocument" className="btn btn-lg btn-info">
        List Document
      </Link>
    </React.Fragment>
  );
};

export default ListButton;