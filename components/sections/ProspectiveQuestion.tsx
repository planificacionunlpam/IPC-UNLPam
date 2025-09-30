
import React from 'react';
import type { ProspectiveQuestionData } from '../../types';
import SectionCard from '../SectionCard';
import { TextareaInput } from '../FormControls';
import { BeakerIcon } from '../icons/Icons';

interface Props {
    data: ProspectiveQuestionData;
    updateData: (data: ProspectiveQuestionData) => void;
}

const ProspectiveQuestion: React.FC<Props> = ({ data, updateData }) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateData({ ...data, [e.target.name]: e.target.value });
    };

    const diagramAltText = "Esquema del proceso de transformación de una VCC a una pregunta prospectiva, mostrando cómo una idea central se expande en preguntas sobre el futuro, acciones, actores y escenarios.";

    return (
        <SectionCard id="prospective-question" title="4. De la VCC a la Pregunta Prospectiva" icon={BeakerIcon}>
            <div className="bg-slate-50 border rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Ejemplo Práctico</h3>
                <p><strong>1. Definimos nuestra VCC de ejemplo:</strong> "Vínculo de la biblioteca con la comunidad de adultos mayores del barrio"</p>
                <p className="my-2"><strong>2. ¿Por qué pensar en "clave prospectiva"?</strong> Porque no solo queremos describir el presente, sino <strong>identificar brechas y posibilidades para la acción futura.</strong></p>
                <p className="mb-2"><strong>3. Transformamos la VCC en preguntas:</strong></p>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                    <li><strong>Pregunta 1 (Describe el futuro deseado):</strong> ¿Cómo imaginan los referentes de la biblioteca y los adultos mayores que sería un vínculo ideal entre ellos dentro de cinco años?</li>
                    <li><strong>Pregunta 2 (Indaga sobre la acción):</strong> ¿Qué actividades, espacios o canales de comunicación tendrían que crearse para construir ese vínculo ideal?</li>
                    <li><strong>Pregunta 3 (Identifica actores y condiciones):</strong> ¿Qué rol podría jugar la biblioteca para lograrlo? ¿Qué podrían aportar otros actores del barrio?</li>
                    <li><strong>Pregunta 4 (Explora escenarios):</strong> ¿Qué situaciones (internas o externas) podrían facilitar o dificultar la construcción de ese futuro deseado?</li>
                </ul>
                
                <div className="my-4 flex justify-center p-4 bg-white rounded-md">
                    <svg viewBox="0 0 600 250" className="rounded-md shadow-sm w-full max-w-xl select-none" role="img" aria-label={diagramAltText}>
                        <title>{diagramAltText}</title>
                        <defs>
                            <marker id="arrow-pq" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
                            </marker>
                        </defs>
                        <style>
                            {`
                                .pq-box { rx: 8; ry: 8; }
                                .pq-main-box { fill: #e0f2fe; stroke: #7dd3fc; }
                                .pq-main-text { font-size: 20px; font-weight: bold; fill: #0c4a6e; text-anchor: middle; dominant-baseline: middle; }
                                .pq-sub-box { fill: #f1f5f9; stroke: #cbd5e1; }
                                .pq-sub-text { font-size: 16px; font-weight: 600; fill: #334155; text-anchor: middle; dominant-baseline: middle; }
                                .pq-line { stroke: #9ca3af; stroke-width: 2; }
                            `}
                        </style>
                        <g fontFamily="sans-serif">
                            <rect x="20" y="95" width="100" height="60" className="pq-box pq-main-box" />
                            <text x="70" y="125" className="pq-main-text">VCC</text>
                            <line x1="125" y1="125" x2="165" y2="125" className="pq-line" markerEnd="url(#arrow-pq)" />
                            <path d="M 170 25 L 180 25 L 180 225 L 170 225 M 180 50 L 215 50 M 180 100 L 215 100 M 180 150 L 215 150 M 180 200 L 215 200" stroke="#9ca3af" strokeWidth="2" fill="none" />
                            <rect x="220" y="30" width="150" height="40" className="pq-box pq-sub-box" />
                            <text x="295" y="50" className="pq-sub-text">Futuro Deseado</text>
                            <rect x="220" y="80" width="150" height="40" className="pq-box pq-sub-box" />
                            <text x="295" y="100" className="pq-sub-text">Acciones</text>
                            <rect x="220" y="130" width="150" height="40" className="pq-box pq-sub-box" />
                            <text x="295" y="150" className="pq-sub-text">Actores</text>
                            <rect x="220" y="180" width="150" height="40" className="pq-box pq-sub-box" />
                            <text x="295" y="200" className="pq-sub-text">Escenarios</text>
                            <text x="460" y="125" textAnchor="middle" dominantBaseline="middle" fontSize="20px" fontWeight="bold" fill="#0c4a6e">Preguntas Prospectivas</text>
                        </g>
                    </svg>
                </div>

                <div className="mt-4 p-3 bg-blue-100 text-blue-800 rounded-md text-center font-medium">
                    Una buena pregunta prospectiva no busca una respuesta de "sí" o "no", sino que abre el diálogo sobre futuros posibles y las acciones necesarias para construirlos.
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Práctica Grupal</h3>
                <p className="text-sm text-slate-600 mb-4">Ahora es su turno. Sigan los pasos para transformar una de sus VCC en preguntas prospectivas:</p>
                <div className="space-y-4">
                    <TextareaInput label="1. Escriban una de sus VCC seleccionadas:" name="selectedVcc" value={data.selectedVcc} onChange={handleChange} rows={2} />
                    <fieldset className="border rounded-lg p-4">
                        <legend className="font-semibold px-2">2. Transformen esta VCC en preguntas prospectivas:</legend>
                        <div className="space-y-4 mt-2">
                             <TextareaInput label="a) Pregunta sobre el futuro deseado:" name="desiredFuture" value={data.desiredFuture} onChange={handleChange} rows={2} />
                             <TextareaInput label="b) Pregunta sobre acciones necesarias:" name="necessaryActions" value={data.necessaryActions} onChange={handleChange} rows={2} />
                             <TextareaInput label="c) Pregunta sobre actores y condiciones:" name="actorsAndConditions" value={data.actorsAndConditions} onChange={handleChange} rows={2} />
                             <TextareaInput label="d) Pregunta sobre escenarios posibles:" name="possibleScenarios" value={data.possibleScenarios} onChange={handleChange} rows={2} />
                        </div>
                    </fieldset>
                    <TextareaInput label="Reflexión final: ¿Qué diferencia hay entre preguntar sobre 'cómo es' y preguntar sobre 'cómo podría ser'? ¿Cómo cambia esto nuestra forma de investigar?" name="finalReflection" value={data.finalReflection} onChange={handleChange} />
                </div>
            </div>
        </SectionCard>
    );
};

export default ProspectiveQuestion;
