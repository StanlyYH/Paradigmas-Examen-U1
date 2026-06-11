import { Link } from "react-router-dom";

interface Props {
  icon: React.ReactNode;
  text: string;
  to: string;
  active?: boolean;
}

export const MobileNavLink = ({
  icon,
  text,
  to,
  active = false,
}: Props) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
        active
          ? "bg-indigo-800 text-white"
          : "hover:bg-indigo-700"
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};