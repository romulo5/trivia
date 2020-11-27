import React from 'react';

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-700 h-100v mt-6">
      <div className="flex flex-col m-4 shadow-2xl p-6 sm:p-16  ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
