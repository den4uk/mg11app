import React from 'react'
import EntryInput from './EntryInput'

export default function EntryItem({item}) {
    return (
        <div className="field">
            <label className="label is-small">{item.question}</label>
            {item.values.map((val, index) => {
                return <EntryInput key={index} val={val} />
            })}
        </div>
    )
}
