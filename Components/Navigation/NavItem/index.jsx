import React from "react";
import Link from "next/link";
const index = ({ path, title }) => {
  return (
    <div>
      <Link href={path}>{title}</Link>
    </div>
  );
};

export default index;
