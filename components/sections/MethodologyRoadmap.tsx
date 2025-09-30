
import React from 'react';
import type { MethodologyRoadmapData } from '../../types';
import SectionCard from '../SectionCard';
import { TextareaInput } from '../FormControls';
import { MapIcon } from '../icons/Icons';

interface Props {
    data: MethodologyRoadmapData;
    updateData: (data: MethodologyRoadmapData) => void;
}

const MethodologyRoadmap: React.FC<Props> = ({ data, updateData }) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateData({ ...data, [e.target.name]: e.target.value });
    };

    const diagramAltText = "Diagrama que muestra una relación de doble flecha entre las VCC (derivadas del trabajo de campo) y el Marco Conceptual (basado en la teoría).";

    return (
        <SectionCard id="methodology-roadmap" title="6. Hoja de Ruta Metodológica" icon={MapIcon}>
            <p className="text-sm text-slate-600 mb-6">Un mapa visual para conectar las VCC trabajadas en clase con el marco conceptual. Use este material como guía de referencia y para sus anotaciones.</p>

            <div className="my-6 p-4 bg-slate-50 border rounded-lg flex flex-col items-center">
                <h4 className="font-semibold text-slate-700 mb-2">Conectando Práctica y Teoría</h4>
                <svg viewBox="0 0 700 200" className="rounded-md shadow-sm w-full max-w-2xl select-none" role="img" aria-label={diagramAltText}>
                    <title>{diagramAltText}</title>
                    <defs>
                        <marker id="arrow-mr-end" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
                        </marker>
                        <marker id="arrow-mr-start" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 10 0 L 0 5 L 10 10 z" fill="#64748b" />
                        </marker>
                    </defs>
                    <style>
                        {`
                            .mr-box { rx: 10; ry: 10; stroke-width: 2; }
                            .mr-box-1 { fill: #e0f2fe; stroke: #7dd3fc; }
                            .mr-box-2 { fill: #fef3c7; stroke: #fde047; }
                            .mr-title-text { font-size: 18px; font-weight: bold; text-anchor: middle; }
                            .mr-sub-text { font-size: 14px; fill: #475569; text-anchor: middle; }
                        `}
                    </style>
                    <g fontFamily="sans-serif">
                        <g>
                            <rect x="50" y="70" width="250" height="60" className="mr-box mr-box-1" />
                            <text x="175" y="95" className="mr-title-text" fill="#0c4a6e">VCCs</text>
                            <text x="175" y="115" className="mr-sub-text">(Práctica / Campo)</text>
                        </g>
                        <g>
                            <rect x="400" y="70" width="250" height="60" className="mr-box mr-box-2" />
                            <text x="525" y="95" className="mr-title-text" fill="#ca8a04">Marco Conceptual</text>
                            <text x="525" y="115" className="mr-sub-text">(Teoría)</text>
                        </g>
                        <line x1="310" y1="100" x2="390" y2="100" stroke="#64748b" strokeWidth="3" markerStart="url(#arrow-mr-start)" markerEnd="url(#arrow-mr-end)" />
                    </g>
                </svg>
                <p className="text-xs text-slate-500 mt-2 text-center">Este esquema representa cómo las VCC (lo que observamos en el campo) y el Marco Conceptual (las teorías que usamos) se alimentan mutuamente.</p>
            </div>

            <div className="space-y-8">
                <div className="space-y-4">
                    <h3 className="font-bold text-lg text-slate-700">Variables Clave Comunicacionales</h3>
                    <TextareaInput label="Anote aquí las VCC más importantes definidas por su grupo:" name="importantVccs" value={data.importantVccs} onChange={handleChange} />
                    <TextareaInput label="Reflexión: ¿Por qué elegimos estas variables como prioritarias?" name="priorityReflection" value={data.priorityReflection} onChange={handleChange} />
                </div>
                 <div className="space-y-4">
                    <h3 className="font-bold text-lg text-slate-700">Marco Conceptual</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-3 rounded-lg border text-center">
                            <h4 className="font-semibold text-slate-600">Conceptos de Comunicación</h4>
                            <p className="text-xs text-slate-500">Ej: comunicación, planificación, actores...</p>
                        </div>
                         <div className="bg-slate-50 p-3 rounded-lg border text-center">
                            <h4 className="font-semibold text-slate-600">Conceptos de la Temática</h4>
                            <p className="text-xs text-slate-500">Ej: bibliotecas, comunidad, territorio...</p>
                        </div>
                    </div>
                    <TextareaInput label="¿Qué autores o perspectivas teóricas podrían ser útiles?" name="authors" value={data.authors} onChange={handleChange} />
                </div>
            </div>

            <div className="mt-8">
                 <TextareaInput
                    label="Síntesis grupal: ¿Cómo nuestras VCC influirán en el Marco Conceptual que construyamos?"
                    description="Las VCC enriquecen el Marco Conceptual, y el Marco Conceptual afina y da profundidad a nuestras VCC."
                    name="synthesis"
                    value={data.synthesis}
                    onChange={handleChange}
                    rows={6}
                />
            </div>
        </SectionCard>
    );
};

export default MethodologyRoadmap;
