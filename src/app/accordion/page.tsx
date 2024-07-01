"use client";
import React, { useState } from 'react';

type AccordionType = {
  id: number;
  title: string;
  body: string;
};

export default function Accordion() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const accordionItems: AccordionType[] = [
    { id: 1, title: "item 1", body: "some text 1" },
    { id: 2, title: "item 2", body: "some text 2" },
    { id: 3, title: "item 3", body: "some text 3" },
  ];

  const toggleAccordionItem = (id: number) => {
    setIsOpen(isOpen === id ? null : id);
  };

  return (
    <ul className="divide-y divide-gray-200">
      {accordionItems.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => toggleAccordionItem(item.id)}
            className="w-full text-left p-4 font-medium text-gray-900 bg-gray-100 hover:bg-gray-200"
          >
            {item.title}
          </button>
          <div
            className={`p-4 transition-all duration-300 ease-in-out ${isOpen === item.id ? 'block' : 'hidden'}`}
          >
            {item.body}
          </div>
        </li>
      ))}
    </ul>
  );
}
