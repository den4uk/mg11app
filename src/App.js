import React from 'react';
import ShowText from './components/ShowText'
import EntryText from './components/EntryText'

export default function App() {
  return (
    <div className='container box'>
      <h1 className='h1 title'>Fast MG11</h1>
      <div className='columns'>
        <div className='column'>
          <EntryText />
        </div>
        <div className='column'>
          <ShowText />
        </div>
      </div>
    </div>
  )
}