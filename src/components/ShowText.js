import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { delay } from 'lodash'
import ShowItem from './ShowItem'
import { clearAllInputs } from '../actions'

function ShowText() {
    const answers = useSelector(state => state.answers)
    const source = useSelector(state => state.source)
    const [btnState, btnCopy] = useState(false)
    const dispatch = useDispatch()

    const copyText = () => {
        if (btnState) return
        btnCopy(true)
        delay(btnCopy, 1000, false)
        let textField = document.createElement('textarea')
        textField.innerText = document.getElementById('copyTextId').innerHTML
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }

    const hasValues = (obj) => {
        const vals = Object.values(obj).map(x => Boolean(x))
        return vals.some(v => v === true)
    }

    return (
        <div>
            <p id="copyTextId">{source.map((src, index) => 
                <ShowItem 
                    key={index} 
                    src={src} 
                    answers={answers} 
                />
            )}</p>
            <hr/>
            <p style={{display: !hasValues(answers) && 'none'}}>
              <button
                form='entry-form-id'   
                type="reset" 
                onClick={() => dispatch(clearAllInputs())}
                className='button is-small is-white'>
                Clear
              </button>
              <button 
                className={btnState ? 'button is-small is-light is-success' : 'button is-small is-light'}
                onClick={copyText}>
                  {btnState ? 'Copied' : 'Copy'}
              </button>
            </p>
        </div>
    )
}

const mapStateToProps = state => ({
    answers: state.answers,
    source: state.source
})

const mapDispatchToProps = { clearAllInputs }

export default connect(mapStateToProps, mapDispatchToProps)(ShowText)