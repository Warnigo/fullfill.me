import React, { useState } from 'react';
import Data from './utils';
import Question from './Question';

export const Contact = () => {
  const [questions] = useState(Data);
  return (
    <div className="App max-w-6xl mx-auto px-4">
      <main className="flex flex-col md:flex-row w-full mx-auto my-10">
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <h1 className="text-6xl text-center md:text-start md:text-8xl text-black">Inquire about our services</h1>
          <p className="mt-6 text-lg md:text-xl text-center md:text-start">
            We serve all business models and address any business challenge. Don't hesitate to contact us!
          </p>
        </div>
        <div className="w-full md:w-3/5">
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
          <div className="mt-8 md:mt-24 w-full">
            <button className="bg-yellow-200 rounded-md px-6 py-2 text w-full md:w-56 hover:bg-yellow-300 active:bg-yellow-200 hover:shadow-md">
              Send Message
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
