import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("maygpkql");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>

      
      <label htmlFor="email" color='white'>
       name
      </label>
      <input
        id="name"
        type="text" 
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />

      <label htmlFor="email" color='white'>
       Phone
      </label>
      <input
        id="phone"
        type="phone" 
        name="phone"
      />
      <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />

      <label htmlFor="email" color='white'>
       subject
      </label>
      <input
        id="subject"
        type="text"
        name="subject"
      />
      <ValidationError 
        prefix="subject" 
        field="subject"
        errors={state.errors}
      />

<label htmlFor="email" color='white'>
       Email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

    <label htmlFor="email" color='white'>
       Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export {ContactForm};