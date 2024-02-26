type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine?: boolean;
};

export default function Profile({ email, isActive, name, singleLine }: ProfileProps) {
  {
    if (singleLine)
      return (
        <p>
          {name}, {email}, {isActive ? "Aktiv" : "Ikke aktiv"}, {singleLine}
        </p>
      );
  }
  {
    return (
      <div>
        <p>
          Navn: <b>{name}</b>
        </p>
        <p>{email}</p>
        <p>{isActive ? "Aktiv" : "Ikke aktiv"}</p>
        <br></br>
      </div>
    );
  }
}
