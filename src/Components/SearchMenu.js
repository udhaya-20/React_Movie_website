import React from 'react';
import './SearchMenuStyle.css';
import { FaSearch } from 'react-icons/fa'

export const SearchMenu = () => {
  return (
    <div >
      <form className="searchbar">
        <button className="searchbtn" type=""><FaSearch/></button>
          <input type="search" placeholder="Search..."/>
      </form>
    </div>
  )
}
