
import React from 'react';
import type { VccBrainstormData } from '../../types';
import SectionCard from '../SectionCard';
import DynamicList from '../DynamicList';
import { TextareaInput, TextInput } from '../FormControls';
import { LightBulbIcon } from '../icons/Icons';

interface Props {
    data: VccBrainstormData;
    updateData: (data: VccBrainstormData) => void;
}

const VccBrainstorm: React.FC<Props> = ({ data, updateData }) => {
    const handleListUpdate = (listName: 'subjects' | 'senses' | 'strategies', newItems: string[]) => {
        updateData({ ...data, [listName]: newItems });
    };
    
    const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: 1 | 2 | 3) => {
        const { name, value } = e.target;
        const priorityKey = `priority${index}`;
        updateData({
            ...data,
            [priorityKey]: {
                ...data[priorityKey],
                [name]: value,
            },
        });
    }

    const infographicAltText = "Infografía que explica los componentes de una Variable Clave Comunicacional (VCC).";

    return (
        <SectionCard id="vcc-brainstorm" title="3. Taller de Lluvia de Ideas de VCC" icon={LightBulbIcon}>
            <p className="text-sm text-slate-600"><strong>Recordemos:</strong> Las VCC son los ejes que guiarán nuestra investigación. Nos ayudan a recortar la realidad para analizarla desde la comunicación. No hay VCC correctas o incorrectas, sino relevantes y pertinentes para nuestro trabajo.</p>
            
            <div className="my-6 p-4 bg-slate-50 border rounded-lg flex flex-col sm:flex-row items-center gap-4">
                <svg viewBox="0 0 200 200" className="rounded-md shadow-sm w-32 h-32 sm:w-48 sm:h-48 object-cover flex-shrink-0 select-none" role="img" aria-label={infographicAltText}>
                    <title>{infographicAltText}</title>
                    <style>
                        {`.vcc-main-text { font-size: 24px; font-weight: bold; fill: white; text-anchor: middle; dominant-baseline: middle; }
                          .vcc-sub-text { font-size: 14px; font-weight: 600; fill: #1e3a8a; text-anchor: middle; dominant-baseline: middle; }`}
                    </style>
                    <g fontFamily="sans-serif">
                        <path d="M100 60 L100 30 M72 123 L45 155 M128 123 L155 155" stroke="#9ca3af" strokeWidth="1.5" />
                        <circle cx="100" cy="100" r="40" fill="#3b82f6" />
                        <text x="100" y="100" className="vcc-main-text">VCC</text>
                        <circle cx="100" cy="30" r="28" fill="#e0f2fe" stroke="#60a5fa" strokeWidth="2" />
                        <text x="100" y="30" className="vcc-sub-text">Sujetos</text>
                        <circle cx="45" cy="155" r="28" fill="#e0f2fe" stroke="#60a5fa" strokeWidth="2" />
                        <text x="45" y="155" className="vcc-sub-text">Sentidos</text>
                        <circle cx="155" cy="155" r="28" fill="#e0f2fe" stroke="#60a5fa" strokeWidth="2" />
                        <text x="155" y="155" className="vcc-sub-text">Estrategias</text>
                    </g>
                </svg>
                <div>
                    <h4 className="font-semibold text-slate-700">¿Qué es una VCC?</h4>
                    <p className="text-sm text-slate-600 mt-1">Una VCC es una lente que nos permite enfocar nuestra investigación. Piensa en ella como la intersección de tres áreas clave:</p>
                    <ul className="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
                        <li><strong>Sujetos y Vínculos:</strong> ¿Quiénes se comunican?</li>
                        <li><strong>Sentidos que Circulan:</strong> ¿Qué significados se construyen?</li>
                        <li><strong>Políticas y Estrategias:</strong> ¿Cómo se gestiona la comunicación?</li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6 mt-4">
                <DynamicList 
                    title="A) SUJETOS Y VÍNCULOS"
                    example="Vínculo de la biblioteca con las escuelas del barrio"
                    items={data.subjects}
                    onAdd={(item) => handleListUpdate('subjects', [...data.subjects, item])}
                    onRemove={(index) => handleListUpdate('subjects', data.subjects.filter((_, i) => i !== index))}
                />
                <DynamicList 
                    title="B) SENTIDOS QUE CIRCULAN"
                    example="Percepciones de los jóvenes sobre la lectura en la era digital"
                    items={data.senses}
                    onAdd={(item) => handleListUpdate('senses', [...data.senses, item])}
                    onRemove={(index) => handleListUpdate('senses', data.senses.filter((_, i) => i !== index))}
                />
                <DynamicList 
                    title="C) POLÍTICAS Y ESTRATEGIAS"
                    example="Estrategias de difusión de actividades de la biblioteca en redes sociales"
                    items={data.strategies}
                    onAdd={(item) => handleListUpdate('strategies', [...data.strategies, item])}
                    onRemove={(index) => handleListUpdate('strategies', data.strategies.filter((_, i) => i !== index))}
                />
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Jerarquización de Variables Clave Comunicacionales</h3>
                <p className="text-sm text-slate-600 mb-6">Debatan en grupo y seleccionen las <strong>3 VCC más importantes</strong> de su lista. Justifiquen brevemente su elección: ¿Por qué son las más relevantes o urgentes para comprender la situación comunicacional de la Biblioteca Teresa Pérez?</p>

                <div className="space-y-6">
                    <div className="p-4 border rounded-lg bg-slate-50/50">
                        <TextInput label="VCC Prioritaria 1:" name="vcc" value={data.priority1.vcc} onChange={(e) => handlePriorityChange(e, 1)} />
                        <TextareaInput label="Justificación:" name="justification" value={data.priority1.justification} onChange={(e) => handlePriorityChange(e, 1)} />
                    </div>
                    <div className="p-4 border rounded-lg bg-slate-50/50">
                         <TextInput label="VCC Prioritaria 2:" name="vcc" value={data.priority2.vcc} onChange={(e) => handlePriorityChange(e, 2)} />
                        <TextareaInput label="Justificación:" name="justification" value={data.priority2.justification} onChange={(e) => handlePriorityChange(e, 2)} />
                    </div>
                    <div className="p-4 border rounded-lg bg-slate-50/50">
                         <TextInput label="VCC Prioritaria 3:" name="vcc" value={data.priority3.vcc} onChange={(e) => handlePriorityChange(e, 3)} />
                        <TextareaInput label="Justificación:" name="justification" value={data.priority3.justification} onChange={(e) => handlePriorityChange(e, 3)} />
                    </div>
                </div>
            </div>
        </SectionCard>
    );
};

export default VccBrainstorm;
