import React from 'react'

const Transfer = () => {
    return (
        <div className='Transfer'>
            <h1>Transfer</h1>
            <h4>From one buyer to the next</h4>
            <div className='form'>
                <label>VIN Number</label>
                <input type='text' className='textBox' name='vinNumber' />
                <label>New Owner</label>
                <input type='text' className='textBox' name='recipient' />
                <input type='button' name='submitTransfer' value='Search' className='button'/>
            </div>

            <div className='background' />
        </div>
    )
}

export default Transfer