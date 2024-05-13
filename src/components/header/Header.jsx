"use client"

import s from "./header.module.scss";
import dynamic from "next/dynamic";
import SearchInput from "@/src/components/search-input/SearchInput";

// const TopProgressBar = dynamic(
//   () => {
//     return import("components/TopProgressBar");
//   },
//   { ssr: false },
// );

export default function Header() {

  return <div className={s.header}>
    <SearchInput />
  </div>
}