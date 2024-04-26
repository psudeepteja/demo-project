import { ClaritySearchLine } from "@/app/icons/search";
import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full px-34px h-63px text-white absolute top-0 ">
      <div>header</div>
      <div>
        {" "}
        <ClaritySearchLine />{" "}
      </div>
    </div>
  );
}
