import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { updateInput } from '../actions'

function EntryInput(input_item) {
    const {val} = input_item
    const dispatch = useDispatch()

    function handleChange(e) {
        dispatch(updateInput(val.slug, e.target.value))
    } 

    return (
        <div>
            <input 
                className="input is-small"
                type={val.type}
                onChange={handleChange}
                placeholder={val.slug}>
            </input>
        </div>
    )
}

const mapStateToProps = state => ({
    answers: state.answers
})

const mapDispatchToProps = { updateInput }

export default connect(mapStateToProps, mapDispatchToProps)(EntryInput)