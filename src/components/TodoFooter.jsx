import React from 'react'

export default function TodoFooter({nrTask}) {
    
  return (
    <div className='todofooter'>
      <p>tasks left: {nrTask}</p>
    </div>
  )
}
