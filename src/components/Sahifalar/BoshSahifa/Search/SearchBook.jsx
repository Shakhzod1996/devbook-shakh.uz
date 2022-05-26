import React from 'react'
import './Search.css'

export default function SearchBook({handleChange,}) {
  return (
    <div className='search-com'>
    <h2>Qidirish</h2>

    <form className='form'>
      <input type="text" placeholder='Adiblar, kitoblar, audiolar, maqollar' />
      <button type='button'><i className='bx bx-search'></i>Izlash</button>
    </form>
    </div>
  )
}