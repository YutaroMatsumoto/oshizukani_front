import "twin.macro";
import React from "react";

interface Props {
  content: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export const NavbarItem = ({ content, icon, onClick }: Props) => {
  return (
    <div
      tw="flex items-center px-3.5 py-1.5 cursor-pointer hover:bg-green-200"
      onClick={onClick}
    >
      {icon}
      <span tw="ml-2">{content}</span>
    </div>
  );
};
