
import React from 'react';
import type { DiscussionSheetData } from '../../types';
import SectionCard from '../SectionCard';
import { TextInput, TextareaInput } from '../FormControls';
import { DiscussionIcon } from '../icons/Icons';

interface Props {
    data: DiscussionSheetData;
    updateData: (data: DiscussionSheetData) => void;
}

const DiscussionSheet: React.FC<Props> = ({ data, updateData }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        updateData({ ...data, [e.target.name]: e.target.value });
    };

    const diagramAltText = "Diagrama ilustrando cómo la dimensión epistemológica guía la estratégica, y esta a su vez define la técnica.";

    return (
        <SectionCard id="discussion-sheet" title="1. Ficha de Discusión Guiada" icon={DiscussionIcon}>
            <div className="grid md:grid-cols-2 gap-4">
                <TextInput label="Nombre del Grupo:" name="groupName" value={data.groupName} onChange={handleChange} />
                <TextInput label="Fecha:" name="date" type="date" value={data.date} onChange={handleChange} />
            </div>

            <h3 className="text-lg font-semibold mt-4">1. Nuestro Punto de Partida: ¿Desde dónde miramos?</h3>
            <blockquote className="my-4 p-4 bg-slate-100 border-l-4 border-slate-300 text-slate-600">
                "Quien interviene pone en juego su concepción acerca del sujeto y del mundo, pero también abre al diálogo entre sus propias concepciones y aquellas presentes en el territorio".
                <cite className="block text-right mt-2 not-italic text-sm">- Washington Uranga</cite>
            </blockquote>

            <div className="space-y-4">
                <TextareaInput
                    label="1. Al iniciar el trabajo en la Biblioteca Teresa Pérez, ¿qué ideas o prejuicios sobre las bibliotecas y sus usuarios traemos con nosotros?"
                    name="question1"
                    value={data.question1}
                    onChange={handleChange}
                />
                <TextareaInput
                    label="2. Siguiendo a Villasante, ¿para quién y para qué estamos produciendo información en este trabajo de campo?"
                    name="question2"
                    value={data.question2}
                    onChange={handleChange}
                />
            </div>

            <h3 className="text-lg font-semibold mt-6">2. Una brújula para investigar: El Proceso Tridimensional</h3>
            <div className="grid md:grid-cols-3 gap-4 my-4 text-center">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-800">Dimensión Epistemológica</h4>
                    <p className="text-sm text-blue-700 mt-1">Con qué conceptos y finalidades construimos el objeto de investigación. <strong>¿QUÉ se investiga?</strong></p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-800">Dimensión de Estrategia General</h4>
                    <p className="text-sm text-green-700 mt-1">Cómo diseñamos el andamiaje para abordar el territorio. <strong>¿CÓMO se investiga?</strong></p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-bold text-purple-800">Dimensión Técnica</h4>
                    <p className="text-sm text-purple-700 mt-1">Qué herramientas específicas elegimos para recolectar y analizar información. <strong>¿CON QUÉ se investiga?</strong></p>
                </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 border rounded-lg flex flex-col items-center">
                <h4 className="font-semibold text-slate-700 mb-2">Ejemplo Visual: Interconexión de las Dimensiones</h4>
                <svg viewBox="0 0 800 200" className="rounded-md shadow-sm w-full max-w-lg select-none" role="img" aria-label={diagramAltText}>
                    <title>{diagramAltText}</title>
                    <defs>
                        <marker id="arrow-ds" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
                        </marker>
                    </defs>
                    <g fontFamily="sans-serif">
                        <rect x="50" y="70" width="200" height="60" rx="10" fill="#e0f2fe" stroke="#bae6fd" />
                        <text x="150" y="105" textAnchor="middle" dominantBaseline="middle" fill="#0369a1" fontSize="18" fontWeight="bold">Epistemológico</text>
                        
                        <rect x="300" y="70" width="200" height="60" rx="10" fill="#dcfce7" stroke="#bbf7d0" />
                        <text x="400" y="105" textAnchor="middle" dominantBaseline="middle" fill="#16a34a" fontSize="18" fontWeight="bold">Estratégico</text>

                        <rect x="550" y="70" width="200" height="60" rx="10" fill="#f3e8ff" stroke="#ddd6fe" />
                        <text x="650" y="105" textAnchor="middle" dominantBaseline="middle" fill="#7c3aed" fontSize="18" fontWeight="bold">Técnico</text>
                        
                        <line x1="255" y1="100" x2="295" y2="100" stroke="#64748b" strokeWidth="2.5" markerEnd="url(#arrow-ds)" />
                        <line x1="505" y1="100" x2="545" y2="100" stroke="#64748b" strokeWidth="2.5" markerEnd="url(#arrow-ds)" />
                    </g>
                </svg>
                <p className="text-xs text-slate-500 mt-2 text-center">Este diagrama muestra cómo las tres dimensiones están conectadas: El 'QUÉ' (Epistemológico) define el 'CÓMO' (Estratégico), que a su vez determina el 'CON QUÉ' (Técnico).</p>
            </div>

            <h3 className="text-lg font-semibold mt-6">3. Aplicación Práctica</h3>
            <p className="text-sm text-slate-600 mb-4">En grupos pequeños, piensen un ejemplo concreto para cada dimensión en su futuro trabajo en la biblioteca:</p>

            <div className="space-y-4">
                <TextareaInput label="Ejemplo de decisión epistemológica:" name="epistemologicalExample" value={data.epistemologicalExample} onChange={handleChange} />
                <TextareaInput label="Ejemplo de decisión estratégica:" name="strategicExample" value={data.strategicExample} onChange={handleChange} />
                <TextareaInput label="Ejemplo de decisión técnica:" name="technicalExample" value={data.technicalExample} onChange={handleChange} />
                <TextareaInput label="¿Cómo se relacionan estas tres decisiones entre sí? Expliquen brevemente:" name="relationExplanation" value={data.relationExplanation} onChange={handleChange} />
            </div>
        </SectionCard>
    );
};

export default DiscussionSheet;
