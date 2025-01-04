import React, { useState } from "react";

const Contact: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c04d96e9-478e-48ca-bdd4-467d70d27880");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="container mx-auto  bg-darkerbg mt-5 rounded-xl font-grotesk p-[1.75rem]">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <h1 className="h4 text-left text-n-1 font-bold mb-4 underline underline-offset-8">
          Contact Form
        </h1>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-base font-medium text-n-1 dark:text-white "
          >
            Your name
          </label>
          <input
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-n-6  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-base font-medium text-n-1 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-n-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-base font-medium text-n-1 dark:text-white"
          >
            Your message
          </label>
          <textarea
            cols={3}
            name="message"
            className="bg-gray-50 border border-gray-300 text-n-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />
        <div className="flex w-full items-center justify-left">
          <button
            type="submit"
            className="bg-lightAction text-lg px-8 rounded button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1"
          >
            Submit
          </button>
        </div>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Contact;
