import { Link } from "react-router-dom";
//컴포넌트 import할 때는 {} 사용

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
