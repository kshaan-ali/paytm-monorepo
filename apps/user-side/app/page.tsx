"use client"
import { useRecoilState, useRecoilValue } from "recoil"
import { balanceAtom } from "@repo/store/atoms";

export default function Home() {
  const balance=useRecoilValue(balanceAtom)

  return (
   <div  className="justify-center bg-black	">
    hello im shaan
    {balance}
   </div>
  );
}
