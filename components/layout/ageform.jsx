'use client';

import { useState } from 'react';

const AgeForm = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    const enteredAge = event.target.value;
    if (enteredAge >= 0 && enteredAge <= 130) {
      setAge(enteredAge);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the entered age
    console.log('Submitted age:', age);
    // Reset the form
    setAge('');
  };

  return (
    <main className='flex items-center justify-center'>
    <div className=" absolute top-[42%] font-display bg-bagray py-5 px-10 rounded-lg animate-fade-up opacity-0 tracking-[-0.02em] drop-shadow-sm " style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label htmlFor="age" className=" md:text-2xl mb-2 text-white">
          Enter your age:
        </label>
        <input
          type="number"
          id="age"
          className="w-[230px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-electricblue focus:border-electricblue"
          value={age}
          onChange={handleChange}
          min="0"
          required
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 text-xl bg-electricblue text-white rounded-lg hover:bg-white hover:text-electricblue duration-300 focus:outline-none focus:bg-bagray"
        >
          Submit
        </button>
      </form>
    </div>
    </main>
  );
};

export default AgeForm;
