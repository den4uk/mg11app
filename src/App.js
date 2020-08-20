import React from 'react';
import ShowText from './components/ShowText'
import EntryText from './components/EntryText'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className='container box'>
      <Navbar />
      <div className='columns'>
        <div className='column'>
          <EntryText />
        </div>
        <div className='column'>
          <div className="tile is-parent is-12">
            <ShowText />
          </div>
        </div>
      </div>
    </div>
  )
}