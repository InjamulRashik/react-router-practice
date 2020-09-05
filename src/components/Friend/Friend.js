import React from "react";
import { Link, useHistory } from "react-router-dom";

const Friend = (props) => {
  const { name, email, id } = props.friend;
  const history = useHistory();
  const handleClick = (friendID) => {
    history.push(`/friend/${friendID}`);
  };
  const friendStyle = {
    border: "1px solid purple",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
  };

  return (
    <div style={friendStyle}>
      <h2>name : {name}</h2>
      <p>email : {email}</p>
      {/* <button
        onClick={() => {
          handleClick(id);
        }}
      >
        Show Details
      </button> */}
      <button>
        <Link to={`/friend/${id}`}>Show Detail Of {id}</Link>
      </button>
    </div>
  );
};

export default Friend;
