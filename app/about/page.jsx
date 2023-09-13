import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-screen-md mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h4 className="text-2xl mb-4 text-center">
          Mis Sueños y Contribución en Auco
        </h4>
        <h3 className="text-4xl mb-6 text-center">
          Hola, Soy Davison Cañaveral
        </h3>
        <div className="flex flex-col-reverse md:flex-row items-center">
          <img
            className="w-40 h-40 md:w-48 md:h-48 m-2 rounded-full"
            src={"/Me2.png"}
            alt="davison"
          />
          <p className="text-gray-700 text-center md:text-left">
            En esta página, quiero compartir mis sueños y metas personales en el
            contexto de Auco, así como cómo creo que mi contribución puede ser
            beneficiosa para la empresa. Creo firmemente que al alinear mis
            aspiraciones con los objetivos de Auco, podemos lograr grandes cosas
            juntos.
          </p>
        </div>
        <h5 className="text-lg mt-6 mb-4">Aspiraciones Profesionales</h5>
        <p className="text-gray-700">
          Desde que comencé mi carrera, siempre he tenido la pasión por la
          innovación tecnológica. Mi sueño profesional es convertirme en un
          líder en el campo de la tecnología y la gestión de proyectos. Aspiro a
          desempeñar un papel importante en el desarrollo de soluciones
          innovadoras que aborden desafíos del mundo real, proximamente me
          graduare de Ingeniero de Software.
        </p>
        <h3 className="text-lg mt-6 mb-4">Metas a Corto y Largo Plazo</h3>
        <p className="text-gray-700">
          A corto plazo, mi objetivo es en un gran Ingeniero de Software,
          contribuyendo con mis habilidades técnicas y mi capacidad para
          resolver problemas de manera efectiva. Quiero aprender y crecer
          continuamente mientras asumo responsabilidades cada vez mayores. A
          largo plazo, sueño viajando a otros paises mientras trabajo en lo que
          me gusta, enseñar a los demas y aprender constantemente.
        </p>
        <h3 className="text-lg mt-6 mb-4">Contribución a Auco</h3>
        <p className="text-gray-700">
          Creo que mi enfoque en la innovación y mi pasión por la tecnología
          pueden ser un activo importante para Auco. Mi habilidad para colaborar
          en equipo y mi capacidad para resolver problemas complejos pueden
          ayudar a la empresa a mantenerse a la vanguardia en un mercado en
          constante evolución.
        </p>
      </div>
    </div>
  );
}

export default Page;
