import React, { useEffect, useState } from "react";

export default function PinButton() {
  let [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setLoggedIn(true);
  }, []);

  return loggedIn ? (
    <div className="add-pin-btn">
      <a href={`/createPin`}>+</a>
    </div>
  ) : null;
}
