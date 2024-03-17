import { createFileRoute } from '@tanstack/react-router';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



export const Route = createFileRoute('/order')({
  component: OrderComponent,
})

function OrderComponent() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_eboxk9o', 'template_pfylzvy', form.current)
        .then(
          () => {
            alert('Message sent successfully!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{ marginTop: '20px', marginBottom: '20px' }}
      className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md"
    >
      <div className="mb-4">
        <label htmlFor="user_name" className="block text-gray-700 text-sm font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="user_email" className="block text-gray-700 text-sm font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <div>
        <input
          type="submit"
          value="Send"
          name="submit" 
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        />
      </div>
    </form>
  );
}

export default OrderComponent;
