import React, { useState, useRef } from 'react';

export function Form() {
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzedHbZUebxyT-T-pkRa3td3Pg43JaaQUd3Ub0bTLrrSDvGvjz_YihWlFLJtsj2094P/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
        method: 'POST', 
        body: new FormData(formRef.current),

    }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

    return (
        <section className='contact-form-container'>
                <form className='contact-form' id="contact-form" ref={formRef} name="google-sheet">
                    <div className="input-container">
                        <input required className='input' type="text" name="name" placeholder="Your Name" />
                        <input required className='input' type="email" name="email" placeholder="Your Email" />
                        <input required className='input' type="text" name="web" placeholder="Your Company/Website" />
                    </div>
                    <br></br>
                    <div className="textarea-container">
                        <textarea required className="textarea" name="contact-content" placeholder="What would you like to discuss?" cols="100" rows="10" resize="none"></textarea>
                    </div>
                    <br></br>
                    <div className="contact-submit-button-container">
                        <input type="submit" value={loading ? "Loading..." : "Submit"} className="contact-submit-button" onClick={handleSubmit} /> 
                    </div>
                </form>
            </section>
    )
}