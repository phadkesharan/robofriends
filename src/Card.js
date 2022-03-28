import React from 'react'
import "tachyons";

export default function Card({id, name, username, email}) {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow'>
        <img src={`https://robohash.org/${id}`} alt="robots"/>
        <div>
            <h2>{id}  {name}</h2>
            <h3>{username}</h3>
            <p>{email}</p>
        </div>
    </div>
  )
}
