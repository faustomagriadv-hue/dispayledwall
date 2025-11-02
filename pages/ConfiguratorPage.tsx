
import React, { useState, useMemo } from 'react';
import type { ConfiguratorState } from '../types';

const initialConfigState: ConfiguratorState = {
    moduleType: null,
    pitch: null,
    desiredWidth: 100,
    desiredHeight: 100,
    modulesW: 0,
    modulesH: 0,
    finalWidth: 0,
    finalHeight: 0,
    casingMaterial: null,
    casingColor: '#000000',
    exposure: null,
    energySaving: false,
    autoOff: false,
    contentLoading: {
        usb: false,
        lan: false,
        remote: false,
    }
};

// Helper components for steps to keep main component clean
const StepIndicator: React.FC<{ current: number; total: number }> = ({ current, total }) => (
    <div className="mb-8">
        <p className="text-center text-sm font-semibold text-accent mb-2">STEP {current} DI {total}</p>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div className="bg-accent h-2.5 rounded-full" style={{ width: `${(current / total) * 100}%` }}></div>
        </div>
    </div>
);

const ConfiguratorPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const [config, setConfig] = useState<ConfiguratorState>(initialConfigState);
    
    const MODULE_WIDTH_MM = 320;
    const MODULE_HEIGHT_MM = 160;

    const updateConfig = <K extends keyof ConfiguratorState>(key: K, value: ConfiguratorState[K]) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };
    
    const handleDimensionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const numValue = parseInt(value, 10) || 0;
        
        const newConfig = { ...config, [name]: numValue };

        const desiredWidthCm = name === 'desiredWidth' ? numValue : config.desiredWidth;
        const desiredHeightCm = name === 'desiredHeight' ? numValue : config.desiredHeight;

        const modulesW = Math.max(1, Math.round(desiredWidthCm * 10 / MODULE_WIDTH_MM));
        const modulesH = Math.max(1, Math.round(desiredHeightCm * 10 / MODULE_HEIGHT_MM));
        const finalWidth = modulesW * MODULE_WIDTH_MM;
        const finalHeight = modulesH * MODULE_HEIGHT_MM;

        setConfig({ ...newConfig, modulesW, modulesH, finalWidth, finalHeight });
    };

    const isContentLoadingValid = useMemo(() => {
        const { usb, lan, remote } = config.contentLoading;
        return usb || lan || remote;
    }, [config.contentLoading]);

    const nextStep = () => setStep(s => Math.min(s + 1, 7));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));
    
    const renderStep = () => {
        switch(step) {
            case 1: // Tipologia modulo
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Tipologia modulo</h2>
                        <div className="space-y-4">
                            {['Classici', 'Manutenzione frontale', 'Soft/Pieghevoli'].map(type => (
                                <label key={type} className={`block p-4 border rounded-lg cursor-pointer ${config.moduleType === type ? 'border-accent bg-accent/10' : 'border-gray-300 dark:border-zinc-600'}`}>
                                    <input type="radio" name="moduleType" value={type} checked={config.moduleType === type} onChange={() => updateConfig('moduleType', type as any)} className="sr-only" />
                                    <span className="font-semibold text-lg">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                );
            case 2: // Dimensioni
                 return (
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Dimensioni desiderate (cm)</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Le dimensioni reali saranno adattate ai moduli 320×160 mm.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="desiredWidth" className="block text-sm font-medium mb-1">Larghezza (cm)</label>
                                <input type="number" id="desiredWidth" name="desiredWidth" value={config.desiredWidth} onChange={handleDimensionChange} className="w-full p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 border-gray-300 dark:border-zinc-600"/>
                            </div>
                            <div>
                                <label htmlFor="desiredHeight" className="block text-sm font-medium mb-1">Altezza (cm)</label>
                                <input type="number" id="desiredHeight" name="desiredHeight" value={config.desiredHeight} onChange={handleDimensionChange} className="w-full p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 border-gray-300 dark:border-zinc-600"/>
                            </div>
                        </div>
                        <div className="p-4 bg-accent/10 dark:bg-accent/20 text-accent-700 dark:text-accent-100 rounded-md">
                            <p className="font-semibold">Dimensioni reali calcolate:</p>
                            <p>{config.finalWidth / 10} cm (Larghezza) x {config.finalHeight / 10} cm (Altezza)</p>
                            <p className="text-xs mt-1">Basato su {config.modulesW}x{config.modulesH} moduli. Abbiamo adattato la tua richiesta al formato più vicino.</p>
                        </div>
                    </div>
                );
            case 3: // Cassonetto
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Cassonetto</h2>
                        <div className="space-y-4">
                            <p className="font-semibold">Materiale</p>
                            <div className="flex gap-4">
                                {['ferro', 'dibond'].map(material => (
                                    <label key={material} className={`flex-1 p-4 border rounded-lg cursor-pointer text-center ${config.casingMaterial === material ? 'border-accent bg-accent/10' : 'border-gray-300 dark:border-zinc-600'}`}>
                                        <input type="radio" name="casingMaterial" value={material} checked={config.casingMaterial === material} onChange={() => updateConfig('casingMaterial', material as any)} className="sr-only" />
                                        <span className="font-semibold capitalize">{material}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="pt-4">
                                <label htmlFor="casingColor" className="block text-sm font-medium mb-2">Colore (HEX o personalizzato)</label>
                                <div className="flex items-center gap-2">
                                  <input type="color" value={config.casingColor} onChange={(e) => updateConfig('casingColor', e.target.value)} className="p-1 h-10 w-10 block bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none" />
                                  <input type="text" id="casingColor" name="casingColor" value={config.casingColor} onChange={(e) => updateConfig('casingColor', e.target.value)} className="w-full p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 border-gray-300 dark:border-zinc-600" placeholder="#000000"/>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 4: // Esposizione
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Esposizione</h2>
                         <div className="flex gap-4">
                            {['Interno', 'Esterno'].map(expo => (
                                <label key={expo} className={`flex-1 p-4 border rounded-lg cursor-pointer text-center ${config.exposure === expo ? 'border-accent bg-accent/10' : 'border-gray-300 dark:border-zinc-600'}`}>
                                    <input type="radio" name="exposure" value={expo} checked={config.exposure === expo} onChange={() => updateConfig('exposure', expo as any)} className="sr-only" />
                                    <span className="font-semibold">{expo}</span>
                                    {expo === 'Esterno' && <p className="text-xs text-accent mt-1">(Suggerito IP65)</p>}
                                </label>
                            ))}
                        </div>
                    </div>
                );
            case 5: // Efficienza e funzioni
                 return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Efficienza e funzioni</h2>
                        <div className="space-y-4">
                           <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer border-gray-300 dark:border-zinc-600">
                               <span className="font-semibold">Risparmio energetico</span>
                               <input type="checkbox" checked={config.energySaving} onChange={e => updateConfig('energySaving', e.target.checked)} className="toggle-checkbox" />
                           </label>
                            <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer border-gray-300 dark:border-zinc-600">
                               <span className="font-semibold">Spegnimento automatico (scheduler)</span>
                               <input type="checkbox" checked={config.autoOff} onChange={e => updateConfig('autoOff', e.target.checked)} className="toggle-checkbox" />
                           </label>
                        </div>
                         {/* FIX: Replaced non-standard `styled-jsx` tag with a standard <style> tag to resolve TypeScript error. */}
                         <style>{`
                            .toggle-checkbox {
                                appearance: none;
                                width: 40px;
                                height: 20px;
                                background-color: #d1d5db;
                                border-radius: 9999px;
                                position: relative;
                                cursor: pointer;
                                transition: background-color 0.2s ease-in-out;
                            }
                            .dark .toggle-checkbox { background-color: #4b5563; }
                            .toggle-checkbox:checked { background-color: #006666; }
                            .toggle-checkbox::before {
                                content: '';
                                width: 16px;
                                height: 16px;
                                background-color: white;
                                border-radius: 9999px;
                                position: absolute;
                                top: 2px;
                                left: 2px;
                                transition: transform 0.2s ease-in-out;
                            }
                            .toggle-checkbox:checked::before { transform: translateX(20px); }
                        `}</style>
                    </div>
                );
            case 6: // Modalità caricamento
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Modalità caricamento contenuti</h2>
                         <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Seleziona almeno una modalità.</p>
                        <div className="space-y-4">
                            {Object.keys(config.contentLoading).map(key => (
                                 <label key={key} className="flex items-center p-4 border rounded-lg cursor-pointer border-gray-300 dark:border-zinc-600">
                                   <input type="checkbox" checked={config.contentLoading[key as keyof typeof config.contentLoading]} onChange={e => setConfig(prev => ({...prev, contentLoading: {...prev.contentLoading, [key]: e.target.checked}}))} className="h-5 w-5 rounded border-gray-300 text-accent focus:ring-accent"/>
                                   <span className="ml-3 font-semibold capitalize">{key === 'lan' ? 'Rete locale (tel/computer)' : key === 'remote' ? 'Gestione da remoto (app + sito)' : 'USB (pendrive)'}</span>
                               </label>
                            ))}
                        </div>
                        {!isContentLoadingValid && <p className="text-red-500 text-sm mt-2">È richiesta la selezione di almeno una modalità.</p>}
                    </div>
                );
            case 7: // Riepilogo
                 return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Riepilogo e Dati utente</h2>
                        <div className="bg-gray-100 dark:bg-zinc-900 p-6 rounded-lg mb-6">
                            <h3 className="font-bold text-lg mb-4">La tua configurazione</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                {Object.entries(config).map(([key, value]) => {
                                    if(value === null || value === '' || (typeof value === 'object' && value !== null && !Object.values(value).some(v=>v))) return null;
                                    
                                    let label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                                    let displayValue = '';

                                    if(typeof value === 'boolean') displayValue = value ? 'Sì' : 'No';
                                    else if (key === 'contentLoading') displayValue = Object.entries(value).filter(([,v]) => v).map(([k]) => k).join(', ');
                                    else if (key.includes('Width') || key.includes('Height')) displayValue = `${value} ${key.startsWith('desired') ? 'cm (desiderati)' : 'mm (reali)'}`;
                                    else displayValue = value.toString();

                                    return (
                                        <div key={key}>
                                            <span className="font-semibold">{label}: </span>
                                            <span>{displayValue}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                         <form onSubmit={(e) => { e.preventDefault(); alert('Preventivo richiesto!'); }}>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                 <input type="text" placeholder="Nome *" required className="p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 border-gray-300 dark:border-zinc-600"/>
                                 <input type="text" placeholder="Azienda (opzionale)" className="p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 border-gray-300 dark:border-zinc-600"/>
                                 <input type="email" placeholder="Email *" required className="p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 border-gray-300 dark:border-zinc-600"/>
                                 <input type="tel" placeholder="Telefono *" required pattern="[0-9]{7,}" className="p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 border-gray-300 dark:border-zinc-600"/>
                                 <input type="text" placeholder="Città/Provincia" className="p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 md:col-span-2"/>
                                 <textarea placeholder="Note" rows={4} className="p-2 border rounded-md bg-gray-50 dark:bg-zinc-700 border-gray-300 dark:border-zinc-600 md:col-span-2"></textarea>
                             </div>
                             <div className="mt-4">
                                <label className="flex items-start">
                                    <input type="checkbox" required className="h-5 w-5 mt-1 rounded border-gray-300 text-accent focus:ring-accent"/>
                                    <span className="ml-2 text-sm">Acconsento al trattamento dei dati personali.</span>
                                </label>
                             </div>
                             <button type="submit" className="w-full mt-6 bg-accent hover:bg-accent-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                                 Richiedi il preventivo
                             </button>
                         </form>
                    </div>
                );
            default: return null;
        }
    }

    return (
        <div className="bg-slate-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-accent">Componi il tuo LEDwall</h1>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Segui i passaggi per creare la configurazione perfetta per le tue esigenze.</p>
                </div>

                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2 bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg">
                        <StepIndicator current={step} total={7} />
                        {renderStep()}
                        <div className="mt-8 flex justify-between">
                            <button onClick={prevStep} disabled={step === 1} className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                Indietro
                            </button>
                            <button onClick={nextStep} disabled={step === 7 || (step === 6 && !isContentLoadingValid)} className="bg-accent hover:bg-accent-600 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                Avanti
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-0">
                         <div className="sticky top-24 bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg">
                             <h3 className="font-bold text-lg mb-4 border-b pb-2 border-gray-200 dark:border-zinc-700">Riepilogo Scelte</h3>
                             <div className="space-y-2 text-sm">
                                 <p><strong className="text-accent-500">Modulo:</strong> {config.moduleType || '...'}</p>
                                 <p><strong className="text-accent-500">Dimensioni:</strong> {config.finalWidth > 0 ? `${config.finalWidth / 10}x${config.finalHeight / 10} cm` : '...'}</p>
                                 <p><strong className="text-accent-500">Cassonetto:</strong> {config.casingMaterial || '...'}, {config.casingColor}</p>
                                 <p><strong className="text-accent-500">Esposizione:</strong> {config.exposure || '...'}</p>
                                 <p><strong className="text-accent-500">Funzioni:</strong> {config.energySaving && 'Risparmio Energetico'} {config.autoOff && ', Scheduler'}</p>
                                 <p><strong className="text-accent-500">Caricamento:</strong> {Object.entries(config.contentLoading).filter(([,v]) => v).map(([k]) => k).join(', ') || '...'}</p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfiguratorPage;
