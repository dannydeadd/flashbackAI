'use client';

import { POST } from 'app/api/user/route';
import { useEffect, useState } from 'react';
import styles from "../layout/Images.module.css";
import Anbtn from './anbtn';

const AgeForm = ({ onNext }) => {
  const [age, setAge] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const enteredAge = parseInt(event.target.value, 10); // Parse the entered age as an integer
      setAge(enteredAge);
      setErrorMessage(''); // Clear error message
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (age >= 5 && age <= 130) {
      setErrorMessage('')
      console.log('Submitted age:', age);
      // Save the age in localStorage
      localStorage.setItem('age', age);
      // Reset the form
      setAge('');

      // Proceed to the next step
      onNext();
    } else {
      setErrorMessage('Please choose an age between 5 and 130.');
    }
  };

  return (
    <main className="flex items-center justify-center">
      <div
        className={`flex items-center justify-center bg-cover bg-no-repeat  bg-center fixed top-[30%] ${styles.myblacko}`}
        style={{ backgroundImage: 'url(/twin.jpg)' }}
      >
        <div
          className="absolute  font-display opacity-30 py-5 px-10 rounded-lg animate-slide-down-fade tracking-[-0.02em] drop-shadow-sm "
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <label htmlFor="age" className="md:text-2xl mb-2 text-white">
              Enter your age:
            </label>
            <input
              type="number"
              id="age"
              className="w-[230px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-electricblue focus:border-electricblue"
              value={age}
              min="0"
              onChange={handleChange}
              required
            />
            <p className="text-white/50">{errorMessage}</p>
            <button
              type="submit"
              className="mt-4 px-4 py-2 text-xl bg-mypurple text-white rounded-lg hover:bg-white hover:text-electricblue duration-300 focus:outline-none focus:bg-bagray"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
const NameForm = ({ onNext }) => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the entered name
    console.log('Submitted name:', name);
    localStorage.setItem('creds', name);
    // Reset the form
    setName('');

    // Proceed to the next step
    onNext();
  };

  return (
    <main className='flex items-center justify-center'>
      <div className={`flex items-center justify-center bg-cover bg-no-repeat  bg-center fixed top-[35%] ${styles.myblack}`} style={{ backgroundImage: 'url(/twin.jpg)' }}>
        <div className=" absolute font-display py-5 px-10 rounded-lg animate-slide-down-fade opacity-0 tracking-[-0.02em] drop-shadow-sm " style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <label htmlFor="name" className="md:text-2xl mb-2 text-white">
              Enter your name:
            </label>
            <input
              type="text"
              id="name"
              className="w-[230px] px-4 py-2 border border-gray-300  rounded-lg focus:outline-none focus:ring-electricblue focus:border-electricblue"
              value={name}
              onChange={handleChange}
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

      </div>
    </main>
  );
};


const DigitAge = ({ onNext }) => {
  const age = localStorage.getItem('age');

  const handleSubmit = (event, selectedDage) => {
    event.preventDefault();
    // Calculate the digital age
    const digitalAge = age - selectedDage;
    // Save the age in localStorage
    localStorage.setItem('dage', digitalAge);

    console.log("Submitted digital age:", digitalAge);
    // Reset the form
    onNext();
  };

  return (
    <main className='flex items-center justify-center'>
      <div className={`flex items-center justify-center bg-cover bg-no-repeat  bg-center fixed top-[25%] ${styles.myblackt}`} style={{ backgroundImage: 'url(/twin.jpg)' }}>
        <div className=' text-white pt-[33px] py-[37px] px-[50px] rounded-lg animate-slide-down-fade opacity-0 tracking-[-0.02em] drop-shadow-sm' style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <div className='flex justify-center  items-center mb-5 text-3xl'>Choose the age of a Twin</div>
          <div className='flex gap-[10px]'>
            <button
              onClick={(e) => handleSubmit(e, 1)}
              className='bg-white py-5 px-10 text-xl rounded-lg text-black border-2 border-electricblue hover:text-white hover:bg-electricblue duration-300'
            >
              1 year ago
            </button>

            <button
              onClick={(e) => handleSubmit(e, 2)}
              className='bg-white py-5 px-10 text-xl rounded-lg text-black border-2 border-electricblue hover:text-white hover:bg-electricblue duration-300'
            >
              2 years ago
            </button>

            <button
              onClick={(e) => handleSubmit(e, 3)}
              className='bg-white py-5 px-10 text-xl rounded-lg text-black border-2 border-electricblue hover:text-white hover:bg-electricblue duration-300'
            >
              3 years ago
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};


const TextInfo = ({ onNext }) => {
  const [userInfo, setUserInfo] = useState({
    mainGoal: '',
    hobbies: '',
    education: '',
  });

  const [loading, setLoading] = useState(false); // State variable for loading state

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const digitalAge = localStorage.getItem('dage');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInfoString = JSON.stringify(userInfo);
    console.log('User Info:', userInfoString);
    localStorage.setItem('info', userInfoString);
    const Payload = {
      creds: localStorage.getItem('creds'),
      age: localStorage.getItem('age'),
      dage: localStorage.getItem('dage'),
      info: userInfoString,
    };
    try {
      setLoading(true); // Start loading state
      const response = await POST(Payload);
      localStorage.setItem('greet', response);
      console.log(response);
      onNext();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Stop loading state (whether the request succeeds or fails)
    }
  };

  return (
    <main className="flex items-center justify-center">
      <div
        className={`flex items-center justify-center bg-cover bg-no-repeat bg-center fixed top-[20%] ${
          styles.myblackf
        }`}
        style={{ backgroundImage: 'url(/twin.jpg)' }}
      >
        <div
          className={`text-white  pt-[33px] py-[37px] px-[50px] rounded-lg animate-slide-down-fade ${
            loading ? 'opacity-50' : 'opacity-0'
          } tracking-[-0.02em] drop-shadow-sm `}
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          {loading ? ( // If loading is true, show the loading spinner
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <>
          <div className="flex justify-center items-center mb-5 text-2xl">
            Enter more specific information about you
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[10px]">
              <input
                type="text"
                name="mainGoal"
                value={userInfo.mainGoal}
                onChange={handleChange}
                placeholder={`What was your main goal when you were at age ${digitalAge}`}
                className="bg-white pb-10 px-3 rounded-lg text-black border-2 border-electricblue focus:outline-none focus:border-electricblue"
              />
              <input
                type="text"
                name="hobbies"
                value={userInfo.hobbies}
                onChange={handleChange}
                placeholder="Hobbies"
                className="bg-white py-2 px-3 rounded-lg text-black border-2 border-electricblue focus:outline-none focus:border-electricblue"
              />
              <input
                type="text"
                name="education"
                value={userInfo.education}
                onChange={handleChange}
                placeholder="Location, education, if you had any"
                className="bg-white pb-10 px-3 rounded-lg text-black border-2 border-electricblue focus:outline-none focus:border-electricblue"
              />
            </div>
            <button
              type="submit"
              className="bg-mypurple py-2 px-5 mt-5 rounded-lg text-white hover:bg-blue-600 duration-300"
            >
              Next
            </button>
          </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

const Finish = () => {
  return(
  <main className='flex items-center justify-center'>
      <div className={`flex items-center justify-center bg-cover bg-no-repeat  bg-center fixed top-[13%] ${styles.myblackf}`} style={{ backgroundImage: 'url(/twin.jpg)' }}>
      <Anbtn />
    </div>
  </main>
  )
}


const ProgressBar = ({ steps, currentStep }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    if (currentStep === 0) {
      setProgressWidth(100);

      const timeout = setTimeout(() => {
        setProgressWidth(1);
      }, 1300); // Reset to 0 after 1 second

      return () => {
        clearTimeout(timeout);
      };
    } else {
      const width = (currentStep / steps) * 100;
      setProgressWidth(width);
    }
  }, [currentStep, steps]);

  return (
    <main className="flex justify-center items-center">
      <div className="absolute top-[10%] bg-gray-200 border-2 border-gray-200  w-[90%] h-[22px] rounded-full">
        <div
          className=" bg-gradient-to-br from-electricblue to-uldanapurple h-full rounded-lg "
          style={{
            width: `${progressWidth}%`,
            transition: 'width 0.5s',
          }}
        ></div>
      </div>
    </main>
  );
};



const Formulae = () => {
  const [step, setStep] = useState(0);
  const totalSteps = 4;
  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <ProgressBar steps={totalSteps} currentStep={step} />

      {step === 0 && <NameForm onNext={handleNext} />}
      {step === 1 && <AgeForm onNext={handleNext} />}
      {step === 2 && <DigitAge onNext={handleNext} />}
      {step === 3 && <TextInfo onNext={handleNext} />}
      {step === 4 && <Finish />}
    </div>
  );
};

export default Formulae;
