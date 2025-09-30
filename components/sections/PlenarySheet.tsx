
import React from 'react';
import type { PlenarySheetData } from '../../types';
import SectionCard from '../SectionCard';
import { TextareaInput } from '../FormControls';
import { DocumentTextIcon } from '../icons/Icons';

interface Props {
    data: PlenarySheetData;
    updateData: (data: PlenarySheetData) => void;
}

const PlenarySheet: React.FC<Props> = ({ data, updateData }) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <SectionCard id="plenary-sheet" title="5. Ficha de Preguntas Guía para Plenario" icon={DocumentTextIcon}>
            <p className="text-sm text-slate-600 mb-4">Reflexión sobre "El mapa no es el territorio" - Clase 6: Variables Clave Comunicacionales</p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <h4 className="font-bold text-blue-800">Instrucciones para el plenario</h4>
                <p className="text-sm text-blue-700">Reflexionen en grupo sobre las siguientes preguntas y prepárense para compartir sus conclusiones en el plenario.</p>
            </div>
            <div className="space-y-6">
                <TextareaInput
                    label="1. Sobre el Proceso de Construcción:"
                    description="Al definir sus VCC, tuvieron que 'recortar' la realidad. ¿Qué fue lo más difícil de decidir qué dejar adentro y qué dejar afuera? ¿Qué dice esa dificultad sobre la complejidad del territorio que están analizando?"
                    name="constructionProcess"
                    value={data.constructionProcess}
                    onChange={handleChange}
                    rows={6}
                />
                <TextareaInput
                    label="2. Sobre la Naturaleza del Instrumento:"
                    description="El texto advierte que las VCC pueden modificarse a medida que avanza el trabajo de campo. ¿Por qué creen que es importante mantener esta flexibilidad? Den un ejemplo de un descubrimiento que podría obligarlos a cambiar una de sus VCC."
                    name="instrumentNature"
                    value={data.instrumentNature}
                    onChange={handleChange}
                    rows={6}
                />
                <TextareaInput
                    label="3. Sobre el Significado de la Metáfora:"
                    description="La frase 'el mapa no es el territorio' sugiere que nuestro análisis nunca es igual a la realidad misma. Aplicado a su trabajo, ¿qué peligros o errores podríamos cometer si olvidamos esta idea y confundimos nuestras VCC (el mapa) con la vida real de la biblioteca (el territorio)?"
                    name="metaphorMeaning"
                    value={data.metaphorMeaning}
                    onChange={handleChange}
                    rows={6}
                />
            </div>
        </SectionCard>
    );
};

export default PlenarySheet;
