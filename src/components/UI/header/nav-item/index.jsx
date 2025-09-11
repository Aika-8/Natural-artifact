export const NavItem = ({ text = "" }) => {
  return (
    <div>
      <div className="flex space-x-52 cursor-pointer">
        <span className="text-almost-white hover:text-premium-green">
          {text}
        </span>
      </div>
    </div>
  );
};
