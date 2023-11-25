"use client";
import AuthModal from "@/components/modals/AuthModal";
import Navbar from "@/components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/atoms/AuthModalAtom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  const authModal = useRecoilValue(authModalState);
  const [loading, user, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(false);
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/");

  //   if (!loading && !user) {
  //     console.log("User not signed in, setPageLoading(false)");
  //     setPageLoading(false);
  //   }
  // }, [user, router]);
  // return pageLoading ? null : 
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className=" max-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center pointer-events-none select-none h-[calc(100vh-5rem)]">
          <img src="/hero.png" alt="main image" />
        </div>
        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  );
};
export default AuthPage;
