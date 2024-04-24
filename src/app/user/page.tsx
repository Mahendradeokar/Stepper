"use client";

import UserInfoCart from "@/components/UserInfoCard";
import { camelCaseToHeading } from "@/lib/utils";
import {
  getUserInfo,
} from "@/redux";
import { useSelector } from "react-redux";

export default function userInfo() {
  const userInfo = useSelector(getUserInfo);
  return (
    <div className="max-w-[850px] mx-auto space-y-2 shadow-lg">
      {Object.entries(userInfo).map(([key, value]) => {
        return <UserInfoCart key={key} heading={camelCaseToHeading(key)} infoObject={value} />;
      })}
    </div>
  );
}
