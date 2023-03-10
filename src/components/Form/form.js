import React, { useState, useRef } from 'react';

export function Form() {
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzedHbZUebxyT-T-pkRa3td3Pg43JaaQUd3Ub0bTLrrSDvGvjz_YihWlFLJtsj2094P/exec"
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [web, setWeb] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (name && email && web && message) {
        setLoading(true)
        fetch(scriptUrl, {
        method: 'POST', 
        body: new FormData(formRef.current),

    }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            alert('Success: The form has been submitted!')
            setLoading(false)
            setName('')
            setEmail('')
            setWeb('')
            setMessage('')
        })
        .catch(err => console.log(err))

    } else {alert('Error: Please complete all fields!')}}

    return (
        <section className='contact-form-container'>
                <form className='contact-form' id="contact-form" ref={formRef} name="google-sheet">
                    <div className="input-container">
                        <input required className='input' type="text" name="name" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                        <input required className='input' type="email" name="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <input required className='input' type="text" name="web" placeholder="Your Company/Website" value={web} onChange={e => setWeb(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="textarea-container">
                        <textarea required className="textarea" name="contact-content" placeholder="What would you like to discuss?" cols="100" rows="10" resize="none" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <br></br>
                    <div className={loading ? "contact-submit-button-container-submitted" :"contact-submit-button-container"} >
                        <input type="submit" value={loading ? "" : "Submit"} className={loading ? "contact-submit-button-submitted" : "contact-submit-button"}onClick={handleSubmit} /> 
                    </div>
                </form>
            </section>
    )
}