
import React from 'react';
import type { InterventionStagesData } from '../../types';
import SectionCard from '../SectionCard';
import { Accordion } from '../Accordion';
import { TextareaInput } from '../FormControls';
import { ChartBarIcon } from '../icons/Icons';

interface Props {
    data: InterventionStagesData;
    updateData: (data: InterventionStagesData) => void;
}

const InterventionStages: React.FC<Props> = ({ data, updateData }) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateData({ ...data, [e.target.name]: e.target.value });
    };

    const timelineAltText = "Línea de tiempo que muestra las 4 etapas del diseño de intervención en secuencia.";

    return (
        <SectionCard id="intervention-stages" title="2. Las 4 Etapas del Diseño de Intervención" icon={ChartBarIcon}>
            <p className="text-sm text-slate-600 mb-4">Planilla para referencia y anotaciones del proceso metodológico.</p>
            
            <div className="my-6 p-4 bg-slate-50 border rounded-lg flex flex-col items-center">
                <h4 className="font-semibold text-slate-700 mb-2">Flujo del Proceso Metodológico</h4>
                <svg viewBox="0 0 800 150" className="rounded-md shadow-sm w-full select-none" role="img" aria-label={timelineAltText}>
                    <title>{timelineAltText}</title>
                    <defs>
                        <marker id="arrow-is" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
                        </marker>
                    </defs>
                    <style>{`.stage-text { text-anchor: middle; font-size: 14px; font-weight: bold; fill: #1e3a8a; font-family: sans-serif; }`}</style>
                    <line x1="50" y1="75" x2="750" y2="75" stroke="#94a3b8" strokeWidth="2.5" markerEnd="url(#arrow-is)" />
                    <g transform="translate(100, 75)">
                        <circle r="12" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="2" />
                        <text y="-25" className="stage-text">1. Aproximación</text>
                    </g>
                    <g transform="translate(283, 75)">
                        <circle r="12" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="2" />
                        <text y="-25" className="stage-text">2. Acercamiento</text>
                    </g>
                    <g transform="translate(466, 75)">
                        <circle r="12" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="2" />
                        <text y="-25" className="stage-text">3. Mapeo</text>
                    </g>
                    <g transform="translate(650, 75)">
                        <circle r="12" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="2" />
                        <text y="-25" className="stage-text">4. Propuesta</text>
                    </g>
                </svg>
                <p className="text-xs text-slate-500 mt-2 text-center">Cada etapa construye sobre la anterior, llevándonos desde un entendimiento general del tema hasta una propuesta de trabajo de campo concreta.</p>
            </div>
            
            <div className="space-y-4">
                <Accordion title="1. Aproximación a la Temática">
                    <p className="text-slate-600 mb-2">"Comprender el Universo del Tema". Reconocimiento de marcos conceptuales, discursos y mapas de significados sobre la temática.</p>
                    <p className="font-semibold text-blue-600 mb-4">? ¿Qué se dice sobre nuestro tema? ¿Desde dónde se lo dice?</p>
                    <TextareaInput label="Mis anotaciones:" name="stage1Notes" value={data.stage1Notes} onChange={handleChange} />
                </Accordion>
                
                <Accordion title="2. Acercamiento Inicial al Territorio">
                     <p className="text-slate-600 mb-2">"Primer Contacto con la Organización". Reconocimiento de la organización, el territorio y la viabilidad del trabajo.</p>
                    <p className="font-semibold text-blue-600 mb-4">? ¿Cómo es la organización y cómo entiende su propia temática?</p>
                    <TextareaInput label="Mis anotaciones:" name="stage2Notes" value={data.stage2Notes} onChange={handleChange} />
                </Accordion>

                <Accordion title="3. Mapeo de Actores">
                    <p className="text-slate-600 mb-2">"Identificar Quiénes son Quiénes". Reconocimiento, identificación y descripción de los actores sociales vinculados a la temática y el territorio.</p>
                    <p className="font-semibold text-blue-600 mb-4">? ¿Quiénes más participan, influyen o son afectados por el tema en este territorio?</p>
                    <TextareaInput label="Mis anotaciones:" name="stage3Notes" value={data.stage3Notes} onChange={handleChange} />
                </Accordion>

                <Accordion title="4. Propuesta de Trabajo de Campo">
                    <p className="text-slate-600 mb-2">"Definir Nuestro Plan de Vuelo". Explicitar acuerdos, objetivos y definir las Variables Clave Comunicacionales (VCC).</p>
                    <p className="font-semibold text-blue-600 mb-4">? A partir de todo lo anterior, ¿dónde centraremos nuestra mirada? (Nuestras VCC)</p>
                    <TextareaInput label="Mis anotaciones:" name="stage4Notes" value={data.stage4Notes} onChange={handleChange} />
                </Accordion>
            </div>

            <div className="mt-8">
                 <TextareaInput
                    label="Reflexión final: ¿Cómo se relacionan las cuatro etapas entre sí? ¿Cuál representa un mayor desafío para nuestro grupo?"
                    name="finalReflection"
                    value={data.finalReflection}
                    onChange={handleChange}
                />
            </div>
        </SectionCard>
    );
};

export default InterventionStages;
