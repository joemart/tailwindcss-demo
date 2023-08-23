import { NextPage } from "next";
import React from "react";


export const PotatoWrapper: NextPage<{ children: React.ReactNode }> = ({ children }) => {

    return <div className="w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100"> {children}</div>
}

export default PotatoWrapper