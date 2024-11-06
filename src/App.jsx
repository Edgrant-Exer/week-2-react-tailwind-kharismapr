import Card from "./Card.jsx"
import { useState } from 'react';

function App () {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

      // function buttonClick1() {
      //   setCounter1(counter1 + 1)
      // }

      // function buttonClick2() {
      //   setCounter2(counter2 + 1)
      // }

      // function buttonClick3() {
      //   setCounter3(counter3 + 1)
      // }

  return (
    <div className="bg-[#E7F6FF]">
      <div className="flex justify-center items-center p-5 m-8 bg-[#E7F6FF] line-height-1">
        <div className="w-[500px]">
          <h1 className="text-2xl font-bold">Welcome to Internship Exercise</h1>
          <h1 className="text-2xl font-bold">Front End</h1>
          <p className="mt-4">
            Website ini dibuat oleh Edgrant sebagai sarana pembelajaran Front End. Terdapat sumber belajar dan juga website ini sendiri dapat jadi sumber belajar.
          </p>
          <div className="mt-8">
            <button
              onClick={() => window.location.href='https://intern-exer-3.vercel.app/'}
              className="bg-[#0D2734] text-white py-2 px-5 rounded-full text-lg hover:scale-110 transition-transform duration-300">Repository
            </button>
          </div>
        </div>

        <div className="ml-5">
          <img src="Assets/1.png" alt="Picture" className="w-[445px] h-[272.19px]" />
        </div>
      </div>

      <div className="bg-[#527182] rounded-3xl p-8 m-8">
        <div className="flex justify-center items-center gap-10 py-5">
        <div className="flex items-center">
            <div className="bg-[#758D9B] p-4 rounded-2xl">
              <img src="Assets/2.png" alt="Java Script Git" />
            </div>
            <div className="ml-5 text-[#E7F6FF]">
              <h2 className="text-xl font-semibold">Java Script + Git</h2>
              <p>Mempelajari dasar-dasar JavaScript dengan materi tambahan git</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-[#758D9B] p-4 rounded-2xl">
              <img src="Assets/3.png" alt="Frontend Basic" />
            </div>
            <div className="ml-5 text-[#E7F6FF]">
              <h2 className="text-xl font-semibold">Frontend Basic</h2>
              <p>Mempelajari HTML dan CSS dengan fokus dalam pembuatan layout website</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-[#758D9B] p-4 rounded-2xl">
              <img src="Assets/4.png" alt="React Tailwind" />
            </div>
            <div className="ml-5 text-[#E7F6FF]">
              <h2 className="text-xl font-semibold">React + Tailwind</h2>
              <p>Mempelajari tools yang digunakan dalam pembuatan website modern</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="bg-[#0D2734] text-white py-2 px-6 rounded-full text-lg hover:scale-110 transition-transform duration-300">
            View Resources
          </button>
        </div>
      </div>

      <div className="text-center mt-8 ">
        <h1 className="mb-3 text-3xl font-bold">Our Tracks</h1>
        <p>Lorem ipsum is simply dummy text</p>
      </div>

      <div className="flex justify-center mt-8 space-x-10">
        <Card number=" 1" counter={() => setCounter1(counter1 + 1)}/>
        <Card number=" 2" counter={() => setCounter2(counter2 + 1)}/>
        <Card number=" 3" counter={() => setCounter3(counter3 + 1)}/>
      </div>

      <div className="text-center mt-5 mb-4">
        <p>Join Course 1: {counter1}</p>
        <p>Join Course 2: {counter2}</p>
        <p>Join Course 3: {counter3}</p>
      </div>

    </div>
  );
};

export default App;
