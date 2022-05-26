import React from 'react'

export default function Pagination({postPerPage, totalPosts, paginateHandler}) {
  let pageNumbers = []
  
  for(let i = 1; i<= Math.ceil(totalPosts /postPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li onClick={() => paginateHandler(number)} key={number}>
              {number}
          </li>
        ))}
      </ul>
    </div>
  )
}
