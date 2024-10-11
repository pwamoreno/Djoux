import React from 'react'

const SearchBox = () => {
  return (
    <div className='inline-flex  '>
        <input 
            className='h-8 w-60 p-2'
            type='search'
            placeholder='What accessories would you like...'
        />
    </div>
  )
}

export default SearchBox