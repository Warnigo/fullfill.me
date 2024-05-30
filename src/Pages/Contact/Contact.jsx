import React, { useState } from 'react'
import Data from "./utils";
import Question from './Question'

export const Contact = () => {
  const [questions] = useState(Data)
  return (
    <div className="App max-w-6xl mx-auto">
      <main className="flex w-full mx-auto my-10">
        <div className="w-2/5">
          <h1 className="text-8xl text-black">Inquire about our services</h1>
          <p className="mt-6 text-xl ">We serve all business models and address any business challenge. Don't hesitate to contact us!</p>
        </div>
        <div className="w-3/5">
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
          <div className="mt-24">
            <button className="bg-yellow-200 rounded-md px-6 py-2 text">Send Message</button>
          </div>
        </div>
      </main>
    </div>
  )
}
