
import React from 'react';

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, children }) => {
  return (
    <div className="bg-slate-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-zinc-800 p-8 sm:p-12 rounded-xl shadow-lg">
          <h1 className="text-3xl font-extrabold text-center mb-8">{title}</h1>
          <div className="prose dark:prose-invert max-w-none prose-h2:text-accent prose-h2:font-bold prose-a:text-accent prose-strong:text-gray-800 dark:prose-strong:text-gray-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicyPage: React.FC = () => (
    <LegalPage title="Privacy Policy">
        <p>Ultimo aggiornamento: 25 Maggio 2024</p>
        <h2>1. Titolare del Trattamento</h2>
        <p>DisplayLedWall S.r.l., con sede in Via Roma 1, 00100 Roma (RM), Italia, è il titolare del trattamento dei dati personali raccolti attraverso questo sito.</p>
        
        <h2>2. Dati Personali Raccolti</h2>
        <p>Raccogliamo i seguenti tipi di dati:</p>
        <ul>
            <li><strong>Dati forniti dall'utente:</strong> Nome, cognome, indirizzo email, numero di telefono, indirizzo di spedizione, dati di fatturazione e qualsiasi altra informazione fornita volontariamente tramite form di contatto o di richiesta preventivo.</li>
            <li><strong>Dati di navigazione:</strong> Indirizzi IP, tipo di browser, orari di accesso e altri dati relativi alla navigazione sul nostro sito.</li>
        </ul>
        
        <h2>3. Finalità del Trattamento</h2>
        <p>I dati raccolti sono utilizzati per:</p>
        <ul>
            <li>Elaborare e gestire le richieste di preventivo e gli ordini.</li>
            <li>Fornire assistenza clienti.</li>
            <li>Inviare comunicazioni di marketing, previo consenso.</li>
            <li>Migliorare il nostro sito e i nostri servizi.</li>
        </ul>
    </LegalPage>
);

export const TermsAndConditionsPage: React.FC = () => (
    <LegalPage title="Termini e Condizioni">
        <p>Benvenuti su DisplayLedWall. L'accesso e l'uso di questo sito sono soggetti ai seguenti termini e condizioni.</p>

        <h2>1. Accettazione dei Termini</h2>
        <p>Utilizzando questo sito, l'utente accetta di essere vincolato da questi Termini e Condizioni. Se non si è d'accordo con una qualsiasi parte dei termini, non è possibile utilizzare il nostro servizio.</p>
        
        <h2>2. Prodotti e Servizi</h2>
        <p>Ci sforziamo di descrivere e visualizzare i nostri prodotti nel modo più accurato possibile. Tuttavia, non garantiamo che le descrizioni, i colori o altri contenuti del sito siano accurati, completi, affidabili, attuali o privi di errori. I prezzi sono soggetti a modifiche senza preavviso.</p>
        
        <h2>3. Proprietà Intellettuale</h2>
        <p>Il sito e i suoi contenuti originali, le caratteristiche e le funzionalità sono e rimarranno di proprietà esclusiva di DisplayLedWall S.r.l. e dei suoi licenziatari. Il nostro marchio non può essere utilizzato in relazione a nessun prodotto o servizio senza il previo consenso scritto di DisplayLedWall S.r.l.</p>
    </LegalPage>
);
