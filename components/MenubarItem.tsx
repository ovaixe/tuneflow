import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface MenubarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const MenubarItem: React.FC<MenubarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      className={twMerge(
        `
      flex
      flex-col
      items-center
      justify-center
    `,
        active && "text-green-500"
      )}
      href={href}
    >
      <Icon size={25} />
      <p className="text-xs w-full">{label}</p>
    </Link>
  );
};

export default MenubarItem;
