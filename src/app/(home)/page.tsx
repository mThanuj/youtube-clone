import React from "react";
import Image from "next/image";

type Props = {};

const Page = ({}: Props) => {
  return (
    <div>
      <Image src="/logo.svg" width={50} height={50} alt="logo" />
      <p className="text-xl font-semibold tracking-tight">NewTube</p>
    </div>
  );
};

export default Page;
