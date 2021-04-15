import React from 'react'
import '../css/header.css'
import search from "../assets/icons/search.svg";
import Switch from './Switch';

function Header() {
    return (
      <header>
        <div className="logo">Entertainment</div>
        <form className="form">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <img src={search} alt="" className="search icon"/>
          </button>
        </form>
        <ul className="nav">
          <li>Anime</li>
          <li>TV Shows</li>
          <li>
            <Switch />
          </li>
        </ul>
      </header>
    );
}

export default Header
