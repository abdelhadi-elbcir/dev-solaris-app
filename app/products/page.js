// app/products/page.js

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
      <Head>
        <title>Solaris Energy | Clean Energy Solutions</title>
        <meta name="description" content="Sustainable energy solutions for a better future" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/products.png"
            alt="Solar panels on a residential roof"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Nuestros productos

            </h1>

          </div>
        </div>
      </section>
    </div>
  );
}
