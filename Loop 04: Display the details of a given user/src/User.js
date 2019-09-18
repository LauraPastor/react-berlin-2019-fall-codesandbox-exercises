import React from "react";

function User(props) {
  return (
    <div>
      {Object.keys(props.user).map(key => (
        <div className="detail" key={key}>
          {key}:{props.user[key]}
        </div>
      ))}
    </div>
  );
}

export default User;
