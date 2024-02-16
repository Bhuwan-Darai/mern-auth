import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          <link to="/">
            <li>Home</li>
          </link>
          <link to="/about">
            <li>About</li>
          </link>
          <link to="/sign-in">
            <li>SignIn</li>
          </link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
