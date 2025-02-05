import { Outlet, useParams } from "react-router-dom";
import { users } from "../../db";
import { Link } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with it {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name, //userId를 Number(숫자)로 변환해서-1
        }}
      />
    </div>
  );
}
export default User;
