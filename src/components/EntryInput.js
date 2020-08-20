import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { updateInput } from '../actions'

function EntryInput(input_item) {
    const {val} = input_item
    const dispatch = useDispatch()

    function handleChange(e) {
        return handleUpdate(e.target.value)
    }
    
    function handleUpdate(value) {
        dispatch(updateInput(val.slug, value))
    }
    
    function getDateString(offset=0) {
        let d = new Date()
        d.setDate(d.getDate() - offset)
        return `${d.getFullYear()}-${String(d.getMonth()).padStart(2, 0)}-${String(d.getDate()).padStart(2, 0)}`
    }

    function setUpdateInputValue(id, value) {
        document.getElementById(id).value = value
        handleUpdate(value)
    }

    function inputSelector(val) {
        switch (val.type) {
            case "date":
                let date_id = `${val.slug}_id`
                return (
                    <div className="field has-addons">
                        <div className="control">
                            <input 
                                className="input is-small"
                                type="date"
                                id={date_id}
                                onChange={handleChange}
                                placeholder={val.slug}>
                            </input>
                        </div>
                        <div className="control">
                            <button 
                                className="button is-small" 
                                onClick={() => setUpdateInputValue(date_id, getDateString())}
                                type="button">
                                Today
                            </button>
                        </div>
                        <div className="control">
                            <button 
                                className="button is-small" 
                                onClick={() => setUpdateInputValue(date_id, getDateString(1))}
                                type="button">
                                Yesterday
                            </button>
                        </div>
                    </div>
                )
            case "radio":
                return (
                    <>
                        {val.options.map((x, index) => {
                            return (
                                <label key={index} className="radio">
                                    <input 
                                        type="radio" 
                                        name={val.slug}
                                        value={x} 
                                        onChange={handleChange} />
                                    &nbsp;{x}
                                </label>
                            )
                        })}
                    </>
                )
            default:
                return (
                    <input 
                        className="input is-small"
                        type="text"
                        onChange={handleChange}
                        placeholder={val.slug}>
                    </input>
                )
        }
    }

    return (
        <div className="control">
            {inputSelector(val)}
        </div>
    )
}

const mapStateToProps = state => ({
    answers: state.answers
})

const mapDispatchToProps = { updateInput }

export default connect(mapStateToProps, mapDispatchToProps)(EntryInput)