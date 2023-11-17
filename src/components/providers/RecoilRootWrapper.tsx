"use client"
import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

type RecoilRootWrapperProps = {
  children: ReactNode;
};

const RecoilRootWrapper: React.FC<RecoilRootWrapperProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
export default RecoilRootWrapper;
