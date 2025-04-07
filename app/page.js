// pages/index.js
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <Head>
        <title>Solaris Energy | Clean Energy Solutions</title>
        <meta
          name="description"
          content="Sustainable energy solutions for a better future"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/accueil.jpg"
            alt="Solar panels on a residential roof"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
             
            Installez des panneaux solaires avec Samara et économisez 1 092 €/an sur votre facture d’électricité            </h1>
          
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/solution"
                className="bg-green-800 text-white px-8 py-3 rounded-full font-medium hover:bg-green-900 transition text-center"
              >
               
               Obtenez votre devis
              </Link>
             
            </div>
            <p>L’entreprise solaire la mieux notée en france
            4,9 ★★★★★ sur Google</p>
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
          Pourquoi nous choisir ?         </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-stone-50 p-8 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
  Faites confiance à des experts
</h3>
<p className="text-gray-600">
  Nous disposons d’une équipe d’installation qualifiée et ne travaillons qu’avec des matériaux de première qualité.
</p>

            </div>
            <div className="bg-stone-50 p-8 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
  Solution intégrale
</h3>
<p className="text-gray-600">
  Nous gérons l’ensemble du projet, du début à la fin, y compris les aides, subventions et démarches de légalisation.
</p>

            </div>
            <div className="bg-stone-50 p-8 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
  Réduisez votre facture
</h3>
<p className="text-gray-600">
  Économies immédiates chaque mois, que vous pouvez maximiser grâce à des batteries physiques ou virtuelles.
</p>

            </div>
            <div className="bg-stone-50 p-8 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
  Sans investissement initial
</h3>
<p className="text-gray-600">
  Payez votre projet de manière flexible. Si vous le souhaitez, financez votre installation et commencez à économiser dès maintenant.
</p>

            </div>
          </div>
        </div>
      </section>



      <div className="bg-white text-black py-10">
  <div className="container mx-auto px-4 lg:px-8 space-y-20">

    {/* SECTION INSTALLATION */}
    <section className="border rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">
        ¿Cómo es el proceso de instalación con Samara?
      </h2>
      <ol className="space-y-3">
        {[1, 2, 3, 4, 5].map((step, i) => (
          <li key={i}>
            <details className="cursor-pointer">
              <summary className="font-bold">{step} {["Estudio solar", "Visita técnica", "Instalación", "Subvenciones", "Legalización"][i]}</summary>
              <p className="text-sm text-gray-600 mt-2">Detalles de {["estudio solar", "la visita técnica", "la instalación", "subvenciones", "la legalización"][i]}...</p>
            </details>
          </li>
        ))}
      </ol>
    </section>

    {/* SECTION OFFRE FINANCEMENT */}
    <section className="bg-green-800 text-white p-6 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            Pásate a energía solar con el formato de pago que mejor funcione para ti
          </h2>
          <p className="mb-6 text-sm text-gray-200 max-w-lg">
            En Samara queremos que todo el mundo pueda disfrutar de la energía solar, ahorrar en la factura de la luz y reducir sus emisiones de carbono. Por eso ofrecemos distintos formatos de pago, para que elijas el que más te convenga.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full font-semibold">
            Consigue tu presupuesto
          </button>
        </div>

        <div className="bg-white text-black rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2 text-green-800">Financiado*</h3>
          <p className="text-sm mb-2">Todos los beneficios de la energía solar</p>
          <p className="text-2xl font-bold text-black mb-2">desde 43 €/mes</p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
            <li>Hasta 240 meses</li>
            <li>Cuotas competitivas</li>
            <li>Ahorra desde el primer día</li>
          </ul>
          <p className="text-xs mt-4 text-gray-500">
            *Sujeto a estudio y aprobación por parte de los partners financieros con los que trabajamos en Samara Energía.
          </p>
        </div>
      </div>
    </section>

    {/* SECTION IMAGE & LISTE */}
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="flex justify-center">
        <Image
          src="/person.png"
          alt="Mockup presupuesto Samara"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <div className="space-y-4">
        <ul className="space-y-3 text-sm md:text-base">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">✓</span>
            <span>Tu presupuesto inicial en un minuto.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">✓</span>
            <span>Conocerás cuánto puedes ahorrar gracias al autoconsumo.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">✓</span>
            <span>Un asesor energético contactará contigo para resolver todas tus dudas.</span>
          </li>
        </ul>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full font-semibold mt-4">
          Consigue tu presupuesto →
        </button>
      </div>
    </section>

    {/* SECTION IMPORTANTE */}
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="bg-green-900 text-white p-6 rounded-2xl shadow-md">
        <h3 className="text-xl md:text-2xl font-semibold text-red-500 mb-4">Centrados en lo importante</h3>
        <p className="text-sm md:text-base">
          En Samara, queremos que la transición energética sea un proceso sencillo y de calidad para tu hogar. Por eso trabajamos con los mejores materiales, tenemos una de las mejores garantías del mercado y contamos con un equipo de expertos que te acompañarán en todo el proceso.
        </p>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-md">
        <Image
          src="/person.png"
          alt="Equipo técnico trabajando"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
    </section>

  </div>
</div>

   {/* FAQ Section */}
<section className="py-20 bg-stone-100">
  <div className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-xl shadow-lg">
    <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
    Questions fréquentes
    </h2>

    <div className="space-y-6">
      {[
        {
          question: "Pourquoi passer à l'énergie solaire ?",
          answer:
            "La technologie solaire a beaucoup progressé ces dernières années, permettant aujourd’hui de réaliser jusqu’à 70 % d’économies sur votre facture d’électricité avec un investissement bien plus accessible. De plus, vous pouvez profiter de subventions et d’aides pour rendre l’installation encore plus économique.",
        },
        {
          question: "Combien puis-je économiser en installant des panneaux solaires ?",
          answer:
            "Le montant exact dépendra de votre consommation annuelle d’énergie, des conditions de votre toit et de vos habitudes de consommation. Vous pouvez économiser jusqu’à 70 % sur votre facture. C’est pourquoi chez Samara, nous proposons des offres 100 % personnalisées pour chaque client.",
        },
        {
          question: "Comment fonctionne Samara ?",
          answer:
            "Chez Samara, nous nous occupons de tout le processus pour que vous n’ayez qu’à profiter de votre installation solaire : nous réalisons une analyse de votre logement, préparons une proposition sur mesure et prenons en charge l’ensemble des démarches, de l’installation au suivi administratif.",
        },
        {
          question: "En quoi consiste une installation solaire ?",
          answer:
            "Les éléments principaux sont les panneaux solaires, l’onduleur et le câblage. Les panneaux captent l’énergie du soleil et la transforment en électricité. L’onduleur convertit cette énergie pour que vous puissiez l’utiliser dans votre maison. Vous pourrez suivre tout cela via une application dédiée. Nous pouvons aussi installer des batteries ou une borne de recharge pour voiture électrique.",
        },
        {
          question: "Combien de temps dure l’installation ? Faut-il faire des travaux chez moi ?",
          answer:
            "L’installation est rapide : nos techniciens sont généralement chez vous entre 1 et 3 jours. Cependant, il faut d’abord organiser une visite pour convenir des détails et demander l’autorisation de travaux à la mairie, ce qui peut prendre environ un mois.",
        },
        {
          question: "Installez-vous aussi des batteries ou des bornes de recharge ?",
          answer:
            "Oui, nous pouvons installer des batteries ou une borne de recharge pour véhicule électrique afin de préparer votre maison à l’énergie du futur.",
        },
        {
          question: "Comment fonctionnent les subventions ?",
          answer:
            "Il existe plusieurs aides pour réduire le coût de votre installation, mais pas d’inquiétude : nous nous occupons des principales démarches pour vous :\n\n• Réduction de la taxe foncière (IBI) : le montant et la durée varient selon les communes.\n• Aides de l’Union européenne : elles sont gérées au niveau régional.",
        },
        {
          question: "Quelle est la garantie des panneaux ?",
          answer:
            "La garantie des panneaux dépend du modèle utilisé, certains pouvant aller jusqu’à 40 ans. La garantie de production assure jusqu’à 92 % de capacité au bout de 25 ans.*\n\nDe plus, chez Samara, nous surveillons votre installation en continu et intervenons en cas de problème.\n\n*Basé sur les panneaux SunPower | Maxeon 5 AC",
        },
        {
          question: "Que se passe-t-il après l’installation ?",
          answer:
            "Une fois l’installation terminée, votre maison commencera à utiliser l’énergie solaire produite sur votre toit. L’étape suivante est la légalisation de l’installation, ce qui peut prendre entre 1 et 2 mois. Ensuite, vous pourrez passer à un contrat en autoconsommation et vendre l’excédent d’électricité.",
        }
      ].map((item, idx) => (
        <details key={idx} className="group border-b pb-4">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900 hover:text-green-700 transition-colors">
            <span>{item.question}</span>
            <span className="text-green-600 text-2xl transform transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-gray-700 whitespace-pre-line">{item.answer}</p>
        </details>
      ))}
    </div>
  </div>
</section>

    
      
    </div>
  );
}
