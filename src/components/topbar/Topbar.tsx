"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { auth } from "../../firebase/firebase";

type TopbarProps = {
  problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
  const [user] = useAuthState(auth);

  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div className={`flex w-full items-center justify-between`}>
        <Link href="/" className="h-[22px] flex-1">
          <Image src="/logo-full.png" alt="Logo" height={100} width={100} />
        </Link>

        {problemPage && (
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer">
              <FaChevronLeft />
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer"
            >
              <div>
                <BsList />
              </div>
              <p>Problem List</p>
            </Link>
            <div className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer">
              <FaChevronRight />
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <a
              // href='https://www.buymeacoffee.com/burakorkmezz'
              target="_blank"
              rel="noreferrer"
              className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
            >
              Premium
            </a>
          </div>
          {!user && (
            <Link
              href="/auth"
              // onClick={() => setAuthModalState((prev) => ({ ...prev, isOpen: true, type: "login" }))}
            >
              <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
