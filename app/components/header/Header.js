"use client"

import s from "./header.module.scss";

export default function Header() {

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return <div className={s.header}>
    <form onSubmit={submitHandler}>
      <input className={s.search} type="text" placeholder="Search movie..."/>
    </form>
  </div>
}