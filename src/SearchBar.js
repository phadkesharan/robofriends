import React from 'react'

export default function SearchBar({searchChange}) {
    return ( 
        <div className='pa2'>
            <input type="search" 
            placeholder='search robots' 
            className='pa3 ba bg-lightest-blue b--green'
            onChange={searchChange}
            />
        </div>
    )
}
