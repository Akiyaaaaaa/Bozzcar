"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { showMoreProps } from "@/type";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/util";

const ShowMore = ({ pageNumber, isNext }: showMoreProps) => {
  const router = useRouter();

  const handleNav = () => {
    const newlimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newlimit}`);

    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNav}
        />
      )}
    </div>
  );
};

export default ShowMore;
