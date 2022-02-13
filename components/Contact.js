import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com";

function Contact() {

  // contact form unlocking
  const [userInput, setUserInput] = useState("");

  // emailjs
  const emailService = process.env.emailService;
  const emailTemplate = process.env.emailTemplate;
  const emailUser = process.env.emailUser;
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(emailService, emailTemplate, form.current, emailUser)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return <>
    <div className="contact" id="contact">
      <h2>Contact 💌</h2>
      <p>It's getting serious! Please use the contact form to get in touch! You can use the contact form for questions, interest in our products or if you want to collaborate. We look forward hearing from you!</p>
      {userInput === "okay" ? 
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Please type in your name here" required />
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="Please type in your email here" required />
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit" value="Send" className="submit-button">Send!</button>
        </form> 
      :
        <form>
          <p>Please note that spam and advertising are strictly forbidden. Type "okay" to unlock the contact form:</p>
          <label htmlFor="riddle"></label>
          <input type="text" id="riddle" name="riddle" placeholder="Just type 'okay' in here" value={userInput} onChange={(e) => setUserInput(e.target.value.toLowerCase())} required />
        </form>
      }
    </div>
  </>;
}

export default Contact;
