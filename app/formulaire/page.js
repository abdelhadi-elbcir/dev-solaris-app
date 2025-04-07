// pages/formulaire.js

"use client";   
import { useState } from "react";

export default function Formulaire() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);
    // ici tu peux envoyer vers ton backend / API
  };

  return (
    <div className="min-h-screen bg-white px-4 py-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-2">Dernière étape</h2>
        <h1 className="text-3xl font-bold mb-8">
          Pour recevoir un devis initial, veuillez renseigner les informations suivantes :
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom complet"
            className="w-full p-4 rounded-full bg-gray-100 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-4 rounded-full bg-gray-100 focus:outline-none"
            required
          />
          <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
            <div className="flex items-center px-4">
              <img
                src="https://flagcdn.com/w40/fr.png"
                alt="FR"
                className="w-6 h-4 mr-2"
              />
              <span className="text-sm font-medium">+33</span>
            </div>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Numéro de téléphone"
              className="flex-1 p-4 bg-gray-100 focus:outline-none"
              required
            />
          </div>

          <p className="text-xs text-gray-500 mt-2">
            En cliquant sur « Envoyer mes coordonnées », vous acceptez notre{" "}
            <a href="#" className="underline text-gray-700">Politique de confidentialité</a>. Nous utiliserons vos
            données pour vous contacter avec une proposition personnalisée. Votre appel peut être enregistré à des fins
            de qualité.
          </p>

          <button
            type="submit"
            className="w-full bg-green-400 text-white py-4 rounded-full mt-4 hover:bg-green-800 transition font-medium"
          >
            Envoyer mes coordonnées →
          </button>
        </form>
      </div>
    </div>
  );
}
