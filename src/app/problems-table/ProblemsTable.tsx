import React from "react";
import { problems } from "@/problems-data/Problems";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { FaLock, FaLockOpen } from "react-icons/fa";

type ProblemsTableProps = {
  setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
  return (
    <>
      <tbody className="text-white ">
        {problems.map((problem, idx) => {
          const difficulyColor =
            problem.difficulty === "Easy"
              ? "text-dark-green-s"
              : problem.difficulty === "Medium"
              ? "text-dark-yellow"
              : "text-dark-pink";
          return (
            <tr
              className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`}
              key={problem.id}
            >
              <th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
              <td className="px-6 py-4">
                {!problem.isPaid ? <BsCheckCircle></BsCheckCircle> : <p>X</p>}
              </td>
              </th>
              
              <td className="px-6 py-4">
                {problem.title}
              </td>
              <td className={`px-6 py-4 ${difficulyColor}`}>
                {problem.difficulty}
              </td>
              <td className={"px-6 py-4"}>{problem.category}</td>
              <td className={"px-6 py-4 flex flex-row justify-between"}>
                {problem.videoId ? (
                  <AiFillYoutube
                    fontSize={"28"}
                    className="cursor-pointer hover:text-red-600"
                  />
                ) : (
                  <p className="text-gray-400">Coming soon</p>
                )}
                <span>{problem.isPaid ? <FaLock /> : <FaLockOpen />}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};
export default ProblemsTable;
