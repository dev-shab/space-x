import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <div className="flex justify-center border border-b-gray-200 shadow-sm">
      <img className="py-6" alt="logo" src={logo} />
    </div>
  );
};

export default Header;
