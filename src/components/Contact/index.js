import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            'service_oky533w',
            'template_c8bc8f4',
            form.current,
            'rX9g5X6d3ryal4B9D'
        )
            .then(
                (result) => {
                console.log(result.text);
                console.log("message sent");
            },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
    );
};

export default Contact;

