"use client"

import s from "./header.module.scss";
import SearchInput from "@/src/components/search-input/SearchInput";


export default function Header() {

  return <div className={s.header}>
    <SearchInput />
  </div>
}