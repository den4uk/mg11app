import React from 'react'
import { connect, useSelector } from 'react-redux'
import EntryItem from './EntryItem'

function EntryText() {
    const source = useSelector(state => state.source)

    return (
        <form id="entry-form-id">
            {source.map((item, index) => {
                return <EntryItem key={index} item={item} />
            })}
        </form>
    )
}

const mapStateToProps = state => ({
    source: state.source
});

export default connect(mapStateToProps)(EntryText)