// pages/index.js
import Head from "next/head";
import Image from "next/image";
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
            src="/api/placeholder/1920/1080"
            alt="Solar panels on a residential roof"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Powering homes with clean energy
            </h1>
            <p className="text-xl mb-8">
              We're making renewable energy affordable and accessible for
              everyone, starting with your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/solution"
                className="bg-green-800 text-white px-8 py-3 rounded-full font-medium hover:bg-green-900 transition text-center"
              >
                Our Solution
              </Link>
              <Link
                href="/learn"
                className="bg-white text-green-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Reimagining Energy for Tomorrow
          </h2>
          <p className="text-xl text-gray-600">
            We believe that transitioning to renewable energy shouldn't be
            complicated or expensive. Our mission is to make sustainable energy
            solutions accessible to everyone, creating a cleaner planet for
            generations to come.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            How We're Different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                Smart Energy Management
              </h3>
              <p className="text-gray-600">
                Our AI-powered system optimizes energy use in real-time,
                reducing costs and environmental impact.
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
                Seamless Integration
              </h3>
              <p className="text-gray-600">
                Our solutions integrate with your existing home infrastructure
                without major renovations.
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
                Affordable Solutions
              </h3>
              <p className="text-gray-600">
                Transparent pricing with flexible payment options makes going
                green financially accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-green-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15K+</div>
              <p className="text-lg">Homes Powered</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30M+</div>
              <p className="text-lg">kWh of Clean Energy</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">20K+</div>
              <p className="text-lg">Tons of CO₂ Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <blockquote className="text-2xl font-light italic text-center">
            "Solaris changed how we think about energy. Our bills are lower, our
            home is more efficient, and we're doing our part for the planet."
            <footer className="mt-4 text-base font-normal not-italic">
              <cite className="font-medium">
                — Sarah & David, Homeowners in Portland
              </cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to make the switch?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of homeowners who are already saving money and
            reducing their carbon footprint.
          </p>
          <Link
            href="/get-started"
            className="bg-green-800 text-white px-8 py-3 rounded-full font-medium hover:bg-green-900 transition inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-16 bg-stone-100">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Questions fréquemment posées
        </h2>

        <div className="space-y-4">
          <details className="group border-b pb-4">
            <summary className="flex items-center justify-between cursor-pointer text-lg font-medium text-gray-900 hover:text-blue-600">
              <span>Pourquoi passer à l’énergie solaire ?</span>
              <span className="text-red-500 text-2xl group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-2 text-gray-600">
              L'énergie solaire est propre, renouvelable et permet de réduire
              vos factures d'électricité à long terme.
            </p>
          </details>

          <details className="group border-b pb-4">
            <summary className="flex items-center justify-between cursor-pointer text-lg font-medium text-gray-900 hover:text-blue-600">
              <span>
                Combien puis-je économiser en installant des panneaux solaires ?
              </span>
              <span className="text-red-500 text-2xl group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-2 text-gray-600">
              Cela dépend de votre consommation, de l'ensoleillement et des
              aides disponibles.
            </p>
          </details>

          <details className="group border-b pb-4">
            <summary className="flex items-center justify-between cursor-pointer text-lg font-medium text-gray-900 hover:text-blue-600">
              <span>Comment fonctionne Samara ?</span>
              <span className="text-red-500 text-2xl group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-2 text-gray-600">
              Samara vous accompagne dans l'installation de panneaux solaires de
              A à Z.
            </p>
          </details>

          <details className="group border-b pb-4">
            <summary className="flex items-center justify-between cursor-pointer text-lg font-medium text-gray-900 hover:text-blue-600">
              <span>Qu'est-ce qu'une installation solaire ?</span>
              <span className="text-red-500 text-2xl group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-2 text-gray-600">
              Il s'agit d'un système comprenant des panneaux, un onduleur et
              parfois des batteries.
            </p>
          </details>

          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer text-lg font-medium text-gray-900 hover:text-blue-600">
              <span>
                Combien de temps dure l'installation ? Dois-je effectuer des
                travaux à la maison pour installer des panneaux solaires ?
              </span>
              <span className="text-red-500 text-2xl group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-2 text-gray-600">
              L'installation dure généralement 1 à 3 jours et nécessite peu ou
              pas de travaux intérieurs.
            </p>
          </details>
        </div>
      </div>
      </section>
      
    </div>
  );
}
