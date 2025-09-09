
type headerprops = {
  username: string;
  creatat: string;
};

export default function HeaderPost(props: headerprops) {
  return (
    <div className="headerpost">
      <div>{props.username}</div>
      <div>{props.creatat}</div>
    </div>
  );
}
