import Timepost from "./Timepost";
import User from "./User";

export default function HeaderPost() {
  return (
    <div className="headerpost">
      <User name="yonatan" email="yonatan@gmail.com" password="1111" />
      <Timepost />
    </div>
  );
}
