// pages/contact.js

import Link from "next/link";

const logements = [
  {
    label: "Maison",
    value: "maison",
    icon: (
      <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v11a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V10z" />
      </svg>
    ),
  },
  {
    label: "Appartement",
    value: "appartement",
    icon: (
      <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 3h16v18H4V3zM9 9h1M9 13h1M9 17h1M14 9h1M14 13h1M14 17h1" />
      </svg>
    ),
  },
  {
    label: "Copropriété",
    value: "copropriete",
    icon: (
      <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l6-6 6 6M15 10v10H9V10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12h-6v8h6v-8z" />
      </svg>
    ),
  },
  {
    label: "Autres",
    value: "autres",
    icon: (
      <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16M9 4v16" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-2xl font-bold text-center mb-8">
        Quel type de logement souhaitez-vous pour l'installation ?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {logements.map((logement) => (
          <Link key={logement.value} href={`/formulaire?type=${logement.value}`}>
            <div className="flex flex-col items-center p-6 rounded-xl border text-center bg-gray-50 hover:shadow-md transition cursor-pointer">
              {logement.icon}
              <span className="font-medium">{logement.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
