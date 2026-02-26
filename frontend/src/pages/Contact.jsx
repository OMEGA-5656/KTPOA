import { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setMessage('');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {sent && <p>Thank you for your message!</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message here..."
          required
        />
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;