import React, { useRef, useEffect } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">{label}</label>
            <input 
                {...props}
                className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition"
            />
        </div>
    );
};


interface TextareaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    description?: string;
}

export const TextareaInput: React.FC<TextareaInputProps> = ({ label, description, ...props }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; // Restablecer la altura para recalcular
            textarea.style.height = `${textarea.scrollHeight}px`; // Establecer la altura para que coincida con el contenido
        }
    }, [props.value]); // Se ejecuta en el renderizado inicial y cada vez que cambia el valor del textarea

    return (
        <div>
            <label className="block text-sm font-medium text-slate-600">{label}</label>
            {description && <p className="text-xs text-slate-500 mt-1">{description}</p>}
            <textarea 
                ref={textareaRef}
                {...props}
                rows={props.rows || 4} // Usa las filas de las props o 4 por defecto, corrige el error de anulación
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition resize-none overflow-hidden"
            />
        </div>
    );
};