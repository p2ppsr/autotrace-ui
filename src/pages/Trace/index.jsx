import React from 'react'

const Trace = () => {
    return (
        <div className='Trace'>
            <h1>Trace</h1>
            <h4>We leave no stone unturned in revealing the complete vehicle story.</h4>
            <div className='form'>
                <label>VIN Number</label>
                <input type='text' className='textBox' name='vinNumber' />
                <input type='button' name='submitSearch' value='Search' className='button'/>

                {/*<label>Make</label>
                <label>Model</label>    
                <label>Year</label>
                <label>Color</label>
                <label>First Name</label>
                <label>Last Name</label>*/}

            </div>
            <div className='background' />
        </div>
    )
}

export default Trace