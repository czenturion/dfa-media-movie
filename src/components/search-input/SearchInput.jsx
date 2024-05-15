import s from "@/src/components/header/header.module.scss";
import {useState} from "react";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchValue('')
  }

  console.log(searchValue)

  return (
    <form onSubmit={submitHandler}>
      <input className={s.search} value={searchValue} onChange={e => setSearchValue(e.currentTarget.value)} type="text" placeholder="Find a movie..."/>
    </form>
  )
}

export default SearchInput;