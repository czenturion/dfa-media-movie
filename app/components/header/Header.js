export default function Header() {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return <nav>
    <form>
      <input type="text" placeholder="Search movie..."/>
    </form>
  </nav>
}