"use client"

import s from "./header.module.scss";
import dynamic from "next/dynamic";

// const TopProgressBar = dynamic(
//   () => {
//     return import("components/TopProgressBar");
//   },
//   { ssr: false },
// );

export default function Header() {

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return <div className={s.header}>
    <form onSubmit={submitHandler}>
      <input className={s.search} type="text" placeholder="Найти фильм..."/>
    </form>
  </div>
}