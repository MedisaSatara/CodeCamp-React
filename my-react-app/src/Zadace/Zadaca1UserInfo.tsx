import React from "react";

/*Napisi React kompomentu koja prima props ime, prezime, godina
rođenja, te ih ispisuje u paragraph, sa izračunatim brojem godina
(koristiti new Date).*/

type UserInfoProps = {
  ime: string;
  prezime: string;
  godinaRodjenja: number;
};
export const Zadaca1UserInfo: React.FC<UserInfoProps> = ({
  ime,
  prezime,
  godinaRodjenja,
}) => {
  const trenutnaGodina = new Date().getFullYear();
  const godine = trenutnaGodina - godinaRodjenja;
  return (
    <div>
      <p>
        Ime i prezime korisnika: {ime} {prezime}
      </p>
      <p>Godina rodjenja: {godinaRodjenja}</p>
      <p>Korisnik ima {godine} godina.</p>
    </div>
  );
};
