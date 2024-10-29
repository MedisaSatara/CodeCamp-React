import React from "react";

export const UserList: React.FC = () => {
  const userListName = [
    { id: 1, name: "Medisa", lastName: "Satara", godinaRodjenja: 1998 },
    { id: 2, name: "Amina", lastName: "Gerin", godinaRodjenja: 1998 },
    { id: 3, name: "Ajla", lastName: "Gerin", godinaRodjenja: 1997 },
    { id: 4, name: "Lejla", lastName: "Gerin", godinaRodjenja: 2010 },
  ];
  const trenutnaGodina = new Date().getFullYear();

  return (
    <div>
      {userListName.map((user, id) => {
        const godine = trenutnaGodina - user.godinaRodjenja;
        return (
          <p key={id}>
            Ime korisnika {user.name} i prezime
            {user.lastName}, a korisnik je rodjen {user.godinaRodjenja}
            godine.
            {godine < 18
              ? "Korisnik je mladji od 18"
              : "Korisnik je stariji od 18"}
          </p>
        );
      })}
    </div>
  );
};
