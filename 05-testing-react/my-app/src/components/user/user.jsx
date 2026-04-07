import React, { useState } from "react";

const User = ({
  firstName,
  lastName,
  age,
  email,
  pictureURL,
  city,
  country,
}) => {
  const [isShowAddress, setIsShowAddress] = useState(false);

  return (
    <div className="user-container" key={email}>
      <img alt={`${firstName} ${lastName}`} width={175} src={pictureURL} />
      <div>
        <h2 data-testid="user-name">
          {firstName} {lastName}
        </h2>
        <p>
          <b>Age: </b>
          {age}
        </p>
        <p>
          <b>Email: </b>
          {email}
        </p>
        {isShowAddress && (
          <p>
            <b>Address: </b>
            {city}, {country}
          </p>
        )}
      </div>
      <div>
        <button
          data-testid="user-btn"
          onClick={() => setIsShowAddress(!isShowAddress)}
          className={isShowAddress ? "btn-hide" : "btn-show"}
        >
          {isShowAddress ? "Hide Address" : "Show Address"}
        </button>
      </div>
    </div>
  );
};

export default User;
