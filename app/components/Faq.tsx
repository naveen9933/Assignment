import React, { useState } from 'react';

const FAQs: React.FC = () => {
  // State to manage the index of the currently expanded question
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Array of questions
  const questions = [
    "What is Toingg?",
    "Why is Toingg better than others?",
    "Does Toingg support your existing database?",
    "How does Toingg ensure security?",
    "How does Toingg address Enterprise solutions?",
    "Does Toingg support your own proprietary LLM model?",
    "What is Toingg’s pricing model?",
    "How can I contact Toingg?",
  ];

  // Array of corresponding answers
  const answers = [
    "Toingg is a realistic English & Hindi AI Calling Agent with features like interruption handling, batch calling, live text sending, sentiment analysis, and integration with over 5000+ apps. You can call anyone at any corner of the world easily. We are also developing our own proprietary TTS model to enhance voice interactions with a focus on reducing costs, enhancing accent and dialects to promote research for non-commercial use.",
    "Toingg differentiates itself through it’s realistic Hindi & English speaking system with interruption, memory, back channeling, database connection, extensive app integration, and customizable solutions and all of this at the lowest price in the market.",
    "Yes, Toingg offers customizable solutions that can integrate with your existing database, ensuring seamless data synchronization.",
    "Toingg prioritizes data security and privacy, adhering to global standards and employing internal hard audits and compliance measures to protect your information.",
    "Toingg provides bespoke enterprise solutions with dedicated support for smooth implementation, integration, and customization to meet specific enterprise needs.",
    "Yes, we support LLM proprietary models that can be integrated in Toingg, we also offer LLM’s fine tuning with your call recordings and data sets.",
    "Toingg has three pricing models based on our offerings:AI Calling Agent: $0.12/minute (minimum $10 recharge),SaaS Platform: $0.12/minute (build your own AI agent)API Access: $0.05/minute (bring you own ASR, GPT, TTS)",
    "For inquiries or more info, you can reach us out at contact@toingg.com and our team will promptly ass",
  ];

  // Function to toggle the expanded state of a question
  const toggleAnswer = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className=' pl-[17px] pr-[17px] h-[750px] flex flex-col justify-center items-center mt-[100px]'>
      {/* FAQ title */}
      <div className='w-[319px] h-[92px] text-[38px] font-medium mb-8'>
        Frequently asked questions
      </div>
      {/* List of questions and answers */}
      <div className='w-[311.3px] pt-[40px]'>
        {questions.map((question, index) => (
          <div key={index} className="mb-4 ">
            {/* Question button */}
            <button
              className="flex justify-between items-center w-full px-4 py-2 rounded-lg focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              <span className="font-semibold">{question}</span>
              <span className=''>{expandedIndex === index ? '-' : '+'}</span>
            </button>
            {/* Horizontal line */}
            <div className="h-px bg-gray-300 w-[311.3px]"></div>
            {/* Answer section */}
            {expandedIndex === index && (
              <div className="p-4 rounded-lg mt-2">
                <p>{answers[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
