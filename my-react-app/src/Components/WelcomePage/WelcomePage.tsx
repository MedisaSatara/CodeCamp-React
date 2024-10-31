import React, { FC, useEffect, useState } from "react";

export const WelcomePage: FC = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const savedData = localStorage.getItem("userProfile");
    if (savedData) {
      const userData = JSON.parse(savedData);
      setEmail(userData.email);
    }
  }, [email]);
  return (
    <div className="welcomePage">
      <p>Welcome page!</p>
      <h1>Dobrodosli, {email} </h1>
    </div>
  );
};
