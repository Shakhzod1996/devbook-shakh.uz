import React from 'react'
import './SearchBook.css'

export default function Search({searchHandler}) {
  return (
    <div className='search-com'>
    <h2>Qidirish</h2>

    <form className='form'>
      <input type="search" onKeyUp={searchHandler} placeholder='Adiblar, kitoblar, audiolar, maqollar' />
      <button type='submit'><i className='bx bx-search'></i>Izlash</button>
    </form>
    </div>
  )
}
