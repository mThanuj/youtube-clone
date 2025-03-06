import React from "react";

type HomeLayoutProps = {
  children: React.ReactNode;
};

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <div className="p-4 bg-blue-500">
        <p>My Navbar</p>
      </div>
      {children}
    </div>
  );
};
