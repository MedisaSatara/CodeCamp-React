import React, { useEffect, useState } from "react";

type UserProfile = {
  email?: string;
  password?: string;
  gender?: string;
  country?: string;
};

export const Forma: React.FC = () => {
  const [amount, setAmount] = useState(5);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  function savePodaci() {
    setUserProfile({ email, password, gender, country });
    console.log("Podaci su spaseni");
  }
  useEffect(() => {}, [userProfile]);

  return (
    <form>
      <h1>Forma za unos korisnickih podataka</h1>
      <br />
      <label>Name</label>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Number:</label>
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <br />
      <label>Password:</label>
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label>Email</label>
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>
        <input
          type="radio"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          value="other"
          checked={gender === "other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
      </label>
      <br />
      <label>
        Country:
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="">Select your country</option>
          <option value="US">United States</option>
        </select>
      </label>
      <br />
      <button onClick={savePodaci}>Spasi</button>
    </form>
  );
};
