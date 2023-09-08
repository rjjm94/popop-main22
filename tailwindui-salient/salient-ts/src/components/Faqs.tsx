import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      "question": "Does CNTRL support multiple Large Language Models (LLMs)?",
      "answer": "Yes, CNTRL sets itself apart from many other AI platforms by supporting multiple Large Language Models (LLMs). Users have the flexibility to plug in different models based on their specific requirements, enhancing the AI's adaptability and ensuring a tailored user experience."
    },
    {
      "question": "Can I create multiple profiles with CNTRL?",
      "answer": "Absolutely, with CNTRL, users can create multiple profiles, each with its unique settings. This feature enhances the platform's versatility, allowing users to tailor each task or chat with system messages, temperature, and other settings."
    },
  ],
  [
    {
      "question": "How does CNTRL help in scheduling tasks?",
      "answer": "CNTRL introduces the feature of Scheduled Tasks, allowing users to schedule tasks, create chains of tasks, and manage ongoing tasks with ease. This feature provides automation capabilities, enhancing productivity and efficiency."
    },
  
  
    {
      "question": "What is the Web UI feature in CNTRL?",
      "answer": "CNTRL provides an intuitive web user interface, making it easy for users to interact with the AI. The platform is designed to be user-friendly, ensuring a seamless user experience even for those who are new to AI interaction."
    },
  ],
  [
    {
      "question": "What are Ingestion Tools?",
      "answer": "CNTRL offers various ingestion tools that can analyze and extract data from different types of documents and websites. Whether you need to analyze code, PDFs, Word documents, YouTube videos, websites, or Google searches, our Ingestion Tools have got you covered."
    },
    {
      "question": "How does CNTRL interact with other software and services?",
      "answer": "With CNTRL, users can post data to an API endpoint, providing a way to interact with other software and services. Whether you need to finalize your tasks by having the output submitted to a Google Sheet, sent via email or SMS, or pull data from 3rd party services, our API Tools make it possible."
    }
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
