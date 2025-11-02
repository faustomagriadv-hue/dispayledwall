
import React, { useState } from 'react';
import { FAQS } from './constants';
import type { FAQItem } from '../types';

const AccordionItem: React.FC<{ item: FAQItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 dark:border-zinc-700">
            <h2>
                <button
                    type="button"
                    className="flex justify-between items-center w-full py-5 font-medium text-left text-gray-700 dark:text-gray-200"
                    onClick={onClick}
                    aria-expanded={isOpen}
                >
                    <span className="text-lg">{item.question}</span>
                    <svg className={`w-6 h-6 shrink-0 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
            </h2>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-5 px-1">
                    <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                </div>
            </div>
        </div>
    );
}

const FAQPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const filteredFaqs = FAQS.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-slate-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 py-12 sm:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold">Domande Frequenti (FAQ)</h1>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Trova risposte rapide alle domande più comuni.</p>
                </div>
                
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Cerca una domanda..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                </div>

                <div className="bg-white dark:bg-zinc-800 p-4 sm:p-8 rounded-xl shadow-lg">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                item={faq}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 dark:text-gray-400 py-8">Nessun risultato trovato per "{searchTerm}".</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
