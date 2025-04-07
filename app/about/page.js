// pages/nosotros.js
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-800">
        

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">Nuestra Historia</h1>
          <p className="text-xl text-gray-600 mb-12">
            Solaris nació de una simple pregunta: ¿Cómo podemos hacer que la energía limpia sea accesible para todos?
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-600 mb-4">
                En Solaris, estamos reimaginando la forma en que las personas acceden, consumen y comprenden la energía limpia. Nuestra misión es crear un futuro energético que sea sostenible, equitativo y accesible para todos.
              </p>
              <p className="text-lg text-gray-600">
                Creemos que la transición a la energía renovable no debería ser compleja ni costosa. Con tecnología innovadora y un enfoque centrado en el cliente, estamos construyendo soluciones que permiten a cada hogar ser parte del cambio hacia un planeta más limpio.
              </p>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
              <Image 
                src="/api/placeholder/600/480"
                alt="Equipo de Solaris trabajando en paneles solares"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovación Accesible</h3>
              <p className="text-gray-600">
                Creamos tecnología avanzada que es simple de usar y accesible para todos los hogares, independientemente de su situación económica.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Impacto Global</h3>
              <p className="text-gray-600">
                Nuestras decisiones siempre consideran el impacto ambiental y social a largo plazo, priorizando soluciones que beneficien a las comunidades y al planeta.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Equidad Energética</h3>
              <p className="text-gray-600">
                Trabajamos para eliminar las barreras que impiden el acceso a la energía limpia, asegurando que los beneficios de la transición energética alcancen a todos por igual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'María Rodríguez', role: 'Fundadora y CEO', image: '/api/placeholder/300/300' },
              { name: 'Carlos Sánchez', role: 'Director de Tecnología', image: '/api/placeholder/300/300' },
              { name: 'Ana Torres', role: 'Directora de Operaciones', image: '/api/placeholder/300/300' },
              { name: 'Javier López', role: 'Director de Sustentabilidad', image: '/api/placeholder/300/300' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Nuestro equipo está compuesto por expertos en energía renovable, tecnología, diseño y políticas públicas, todos unidos por la pasión de crear un futuro energético más limpio.
            </p>
            <Link href="/carreras" className="inline-block bg-green-800 text-white px-6 py-3 rounded-full font-medium hover:bg-green-900 transition">
              Únete a Nuestro Equipo
            </Link>
          </div>
        </div>
      </section>

      {/* Story and Philosophy */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Nuestra Filosofía</h2>
            <p>
              La crisis climática es el desafío más urgente de nuestra generación. En Solaris, creemos que la respuesta a este desafío no está solo en la tecnología, sino en cómo la hacemos accesible y adoptable por todos.
            </p>
            <p>
              Desde nuestra fundación en 2021, hemos trabajado para eliminar las barreras financieras, técnicas y sociales que impiden que millones de hogares adopten la energía limpia. Nuestro enfoque holístico considera todo el ecosistema energético, desde la generación hasta el consumo.
            </p>
            <p>
              Entendemos que cada comunidad tiene necesidades únicas. Por eso, trabajamos estrechamente con gobiernos locales, organizaciones comunitarias y residentes para crear soluciones que realmente funcionen para cada contexto específico.
            </p>
            <h3 className="text-2xl font-bold text-green-800 mt-8 mb-4">Compromiso con la Comunidad</h3>
            <p>
              Creemos que la transición energética debe beneficiar primero a las comunidades históricamente desatendidas. Nuestros programas de acceso prioritario garantizan que estas comunidades sean las primeras en recibir nuestras soluciones, a menudo con subsidios especiales y apoyo adicional.
            </p>
            <p>
              Además, invertimos el 5% de nuestros beneficios en programas educativos sobre energía renovable, formación profesional en el sector de energías limpias y proyectos de desarrollo comunitario relacionados con la sostenibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Sé parte del cambio</h2>
          <p className="text-xl mb-8">
            Únete a nuestra misión de hacer que la energía limpia sea accesible para todos. Juntos podemos construir un futuro más sostenible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solucion" className="bg-white text-green-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
              Nuestras Soluciones
            </Link>
            <Link href="/contacto" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}