
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-accent">Chi Siamo</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">La nostra passione per l'innovazione visiva.</p>
        </div>
        
        <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">La Nostra Storia</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Fondata con l'obiettivo di rivoluzionare la comunicazione digitale, DisplayLedWall è diventata un punto di riferimento nel settore delle soluzioni visive professionali. Da anni, combiniamo tecnologia all'avanguardia e design italiano per creare LEDwall che non solo informano, ma emozionano e coinvolgono. Il nostro percorso è segnato dalla continua ricerca dell'eccellenza e dalla dedizione nel trasformare le idee dei nostri clienti in realtà luminose e impattanti.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Filosofia e Missione</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Crediamo che ogni brand abbia una storia unica da raccontare. La nostra missione è fornire gli strumenti visivi più potenti e affidabili per farlo. Ci impegniamo a offrire prodotti di altissima qualità, costruiti per durare e per performare in ogni condizione. La nostra filosofia si basa su tre pilastri:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li><span className="font-semibold text-accent">Qualità:</span> Selezioniamo solo i migliori componenti e applichiamo rigorosi controlli qualitativi in ogni fase della produzione.</li>
              <li><span className="font-semibold text-accent">Innovazione:</span> Siamo costantemente alla ricerca di nuove tecnologie per migliorare l'efficienza, la resa visiva e la facilità d'uso dei nostri prodotti.</li>
              <li><span className="font-semibold text-accent">Cliente al Centro:</span> Ascoltiamo le esigenze dei nostri clienti per offrire soluzioni personalizzate e un supporto tecnico che superi le loro aspettative.</li>
            </ul>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-zinc-700">
            <img src="https://picsum.photos/seed/team/800/400" alt="Team DisplayLedWall" className="rounded-lg shadow-md" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
