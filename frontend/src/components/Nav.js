import './styles/nav.css'

export default function Nav() {
  return <nav className='nav'>
    <a href='/'>Sylo</a>
    <ul>
      <li>
        <a href="/shoppingList">Shopping list</a>
      </li>
      <li>
        <a href="/chores">Chores</a>
      </li>
      <li>
        <a href="/socialEvents">Social Events</a>
      </li>
      <li>
        <a href="/bills">Bills</a>
      </li>
    </ul>
  </nav>
} 