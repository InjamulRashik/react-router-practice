import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendID } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <p>
        This is friend detail of : <b>{friend.name}</b>
      </p>
      <h3> Name : {friend.name}</h3>
      <h4> ID : {friend.id}</h4>
      <h5> Email : {friend.email}</h5>
    </div>
  );
};

export default FriendDetail;
