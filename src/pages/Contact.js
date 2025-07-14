// import React, {useState} from 'react';
// import '../App.css';
//
// function Contact() {
//     const [form,  setForm] = useState({})
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Thanks ${form.name}, I'll get back to you!`);
//         setForm({name: "", message: ""});
//     };
//     return (
//
//         <form onSubmit={handleSubmit}>
//             <h2>Contact Ezra Bett</h2>
//             <input
//                 placeholder="Your Name"
//                 type="text"/>
//
//
//         </form>
//
//     );
// }
//
// export default Contact;

import React, { useState } from 'react';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        alert('Thank you for your message!');
        setForm({ name: '', email: '', message: '' });
    };
    return (
        <div className="contact-page">


        <div className="contact-overlay contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>

        </div>


        </div>
    );
}
export default Contact;
