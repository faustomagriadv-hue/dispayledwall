
import type { Product, FAQItem } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "LEDwall Indoor P1.9",
    shortDescription: "Alta risoluzione per interni.",
    longDescription: "Questo LEDwall offre una qualità d'immagine eccezionale con un passo pixel di 1.9mm, ideale per applicazioni indoor dove i dettagli sono cruciali come showroom, sale conferenze e negozi di lusso.",
    image: "https://picsum.photos/seed/p1/600/400",
    price: 1750.00,
    discount: 0.10,
    details: {
      modules: "320x160 mm",
      pitch: "P1.9",
      cabinetSize: "640x640 mm",
      notes: "Uso interno"
    }
  },
  {
    id: 2,
    name: "LEDwall Outdoor P4",
    shortDescription: "Luminosità e resistenza per esterni.",
    longDescription: "Progettato per resistere agli agenti atmosferici, questo pannello P4 offre un'elevata luminosità e un contrasto eccellente, perfetto per pubblicità esterna, eventi e stadi. Certificato IP65.",
    image: "https://picsum.photos/seed/p2/600/400",
    price: 2200.00,
    discount: 0.10,
    details: {
      modules: "320x160 mm",
      pitch: "P4",
      cabinetSize: "960x960 mm",
      notes: "Uso esterno, IP65"
    }
  },
  {
    id: 3,
    name: "LEDwall Flessibile P8",
    shortDescription: "Creatività senza limiti di forma.",
    longDescription: "I nostri moduli flessibili P8 si adattano a superfici curve e design creativi. Leggeri e versatili, sono la soluzione ideale per installazioni artistiche, scenografie e architetture complesse.",
    image: "https://picsum.photos/seed/p3/600/400",
    price: 3100.00,
    discount: 0.10,
    details: {
      modules: "320x160 mm",
      pitch: "P8",
      cabinetSize: "Su misura",
      notes: "Flessibile, uso interno"
    }
  }
];

export const FAQS: FAQItem[] = [
    {
        question: "Qual è la differenza tra un LEDwall per interni e uno per esterni?",
        answer: "I LEDwall per esterni hanno una luminosità molto più elevata per essere visibili sotto la luce diretta del sole e sono costruiti con un grado di protezione (IP) per resistere a pioggia, polvere e umidità. Quelli per interni hanno una risoluzione più fine (passo pixel più piccolo) per una visione ravvicinata."
    },
    {
        question: "Cosa significa 'passo pixel' (pitch)?",
        answer: "Il passo pixel è la distanza in millimetri tra i centri di due pixel adiacenti. Un passo più piccolo significa una maggiore densità di pixel e quindi una risoluzione più alta e un'immagine più definita, ideale per distanze di visione ridotte."
    },
    {
        question: "Come posso caricare i contenuti sul mio LEDwall?",
        answer: "Offriamo diverse modalità: tramite una semplice chiavetta USB, collegandolo alla tua rete locale (LAN) per gestirlo da PC o smartphone, oppure con il nostro sistema di gestione remota via app e sito web, che ti permette di aggiornare i contenuti da qualsiasi luogo."
    },
    {
        question: "Offrite installazione e supporto?",
        answer: "Sì, forniamo un servizio completo che include la consulenza progettuale, l'installazione professionale e un supporto tecnico post-vendita per garantire il perfetto funzionamento del tuo LEDwall nel tempo."
    },
    {
    question: "Come funziona l’acquisto?",
    answer: "Puoi scegliere il prodotto, aggiungerlo al carrello e completare il pagamento in sicurezza.",
  },
  {
    question: "Posso pagare a rate?",
    answer: "Sì, offriamo pagamenti rateali tramite Klarna o Scalapay.",
  },
];
