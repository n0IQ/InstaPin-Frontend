import React, { useEffect } from "react";
import { useLoginStore } from "../store/store";

export default function PinButton() {
  const loggedIn = useLoginStore((state) => state.loggedIn);
  const setLoggedIn = useLoginStore((state) => state.setLoggedIn);

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
