import React, { FC, useEffect, useState } from "react";

export const WelcomePage: FC = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const userData = JSON.parse(currentUser);
      setEmail(userData.email);
    }
  }, []);
  return (
    <div className="welcomePage">
      <p>Welcome page!</p>
      <h1>Dobrodosli, {email} </h1>
    </div>
  );
};
