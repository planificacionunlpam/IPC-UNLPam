
import React, { useState } from 'react';
import { TrashIcon } from './icons/Icons';

interface DynamicListProps {
    title: string;
    example: string;
    items: string[];
    onAdd: (item: string) => void;
    onRemove: (index: number) => void;
}

const DynamicList: React.FC<DynamicListProps> = ({ title, example, items, onAdd, onRemove }) => {
    const [newItem, setNewItem] = useState('');

    const handleAdd = () => {
        if (newItem.trim()) {
            onAdd(newItem.trim());
            setNewItem('');
        }
    };
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAdd();
        }
    }

    return (
        <div className="bg-slate-50 p-4 rounded-lg border">
            <h4 className="font-bold text-slate-700">{title}</h4>
            <p className="text-sm text-slate-500 mb-2">Ej: {example}</p>
            <div className="flex space-x-2 mb-3">
                <input 
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-grow w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Añadir idea..."
                />
                <button 
                    onClick={handleAdd}
                    className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex-shrink-0"
                >
                    Añadir
                </button>
            </div>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center justify-between bg-white p-2 rounded-md border text-sm">
                        <span>{item}</span>
                        <button onClick={() => onRemove(index)} className="text-slate-400 hover:text-red-500">
                            <TrashIcon />
                        </button>
                    </li>
                ))}
                {items.length === 0 && <p className="text-slate-400 text-sm text-center py-2">No hay ideas añadidas.</p>}
            </ul>
        </div>
    );
};

export default DynamicList;
