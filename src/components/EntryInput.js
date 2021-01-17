import React from 'react'
import dateFormat from 'date-format'
import { connect, useDispatch, useSelector } from 'react-redux'
import { updateInput } from '../actions'

function EntryInput(input_item) {
    const {val} = input_item
    const meta = useSelector(state => state.meta)
    const dispatch = useDispatch()

    function handleChange(e) {
        return handleUpdate(e.target.value)
    }
    
    function handleUpdate(value) {
        dispatch(updateInput(val.slug, value))
    }

    function handleChangeDate(value) {
        const d = new Date(value)
        const dateObj = new Intl.DateTimeFormat(meta.options.date.locale, meta.options.date.options).format(d)
        return handleUpdate(dateObj)
    }
    
    function getDateString(offset=0) {
        const d = new Date()
        d.setDate(d.getDate() - offset)
        return dateFormat.asString('yyyy-MM-dd', d)
    }

    function setDateUpdateInputValue(id, value) {
        document.getElementById(id).value = value
        handleChangeDate(value)
    }

    function inputSelector(val) {
        switch (val.type) {
            case "date":
                const date_id = `${val.slug}_id`
                return (
                    <div className="field has-addons">
                        <div className="control">
                            <input 
                                className="input is-small"
                                type={val.type}
                                id={date_id}
                                onChange={(e) => handleChangeDate(e.target.value)}
                                placeholder={val.slug}>
                            </input>
                        </div>
                        <div className="control">
                            <button 
                                className="button is-small" 
                                onClick={() => setDateUpdateInputValue(date_id, getDateString())}
                                type="button">
                                Today
                            </button>
                        </div>
                        <div className="control">
                            <button 
                                className="button is-small" 
                                onClick={() => setDateUpdateInputValue(date_id, getDateString(1))}
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
                                        type={val.type}
                                        name={val.slug}
                                        value={x}
                                        onClick={handleChange}/>
                                    &nbsp;{x}
                                </label>
                            )
                        })}
                    </>
                )
            case "select":
                return (
                    <div className="select is-small">
                        <select onChange={handleChange}>
                            <option value="">-----</option>
                            {val.options.map((x, index) => <option key={index} value={x}>{x}</option>)}
                        </select>
                    </div>
                )
            default:
                return (
                    <input 
                        className="input is-small"
                        type="text"
                        onChange={handleChange}
                        placeholder={val.placeholder || val.slug}>
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
    answers: state.answers,
    meta: state.meta
})

const mapDispatchToProps = { updateInput }

export default connect(mapStateToProps, mapDispatchToProps)(EntryInput)