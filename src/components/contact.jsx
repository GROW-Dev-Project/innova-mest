import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    _subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Add this to handle CORS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData._subject,
          message: formData.message
        }),
      });

      // Since mode is 'no-cors', we won't get response.ok
      // Instead, check if the request was sent
      if (response) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', _subject: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('There was an error sending your message.');
    }
  };
  return (
    <div className="bg-gray-200 text-blue-900 min-h-screen flex box-border justify-center items-center">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gray-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-gray-300 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-4xl text-blue-900 font-bold">Contact Us!</h1>
            <p className="text-blue-900">Fill up the form below to send us a message.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subject"
              name="_subject"
              value={formData._subject}
              onChange={handleChange}
            />
            <textarea
              className="shadow mb-4 appearance-none border rounded h-40 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="flex justify-between">
              <input
                className="shadow bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send ➤"
              />
              <input
                className="shadow bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
                onClick={() => setFormData({ name: '', email: '', _subject: '', message: '' })}
              />
            </div>
          </form>
          {status && <p className="mt-4 text-center text-blue-900">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;







// import img1 from "../assets/images/img1.jpg";

// className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12"
      // style={{
      //   backgroundImage: `url(${img1})`,
      //   height: "98vh",
      //   position: "relative",
      //   backgroundSize: "cover",
      // }}