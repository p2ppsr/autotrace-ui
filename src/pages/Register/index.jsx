import React from 'react'

const Register = () => {
    return (
        <div className='Register'>
            <h1>REGISTER</h1>
            <h4>Start your journey today</h4>
            <div className='registerSection'>
                <form className='registerForm'>
                    <label>VIN Number</label>
                    <input type='text' className='textBox' name='vinNumber' />
                    <label>Make</label>
                    <input type='text' className='textBox' name='make' />
                    <label>Model</label>
                    <input type='text' className='textBox' name='model' />
                    <label>Year</label>
                    <input type='text' className='textBox' name='year' />
                    <label>Color</label>
                    <input type='text' className='textBox' name='color' />
                    <label>First Name</label>
                    <input type='text' className='textBox' name='firstName' />
                    <label>Last Name</label>
                    <input type='text' className='textBox' name='lastName' />
                    <input type='button' name='submitRegister' value='Register' className='button'/>
                </form>
            </div>
            <div className='background' />
        </div>
    )
}

export default Register