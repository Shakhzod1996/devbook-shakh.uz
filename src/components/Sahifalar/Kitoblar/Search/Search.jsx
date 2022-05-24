import React from 'react'
import './Search.css'

export default function Search({searchVal,handleChange, searchText }) {
  return (
    <div className='search-com'>
    <h2>Qidirish</h2>

    <form className='form'>
      <input type="search" onChange={e => handleChange(e.target.value)} value={searchText}   placeholder='Adiblar, kitoblar, audiolar, maqollar' />
      <button type='submit'><i className='bx bx-search'></i>Izlash</button>
    </form>
    </div>
  )
}
