
import React from 'react';
import Sidebar from './Sidebar';
import { PrintIcon, ResetIcon } from './icons/Icons';

interface LayoutProps {
    children: React.ReactNode;
    onPrint: () => void;
    onReset: () => void;
    isExporting: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, onPrint, onReset, isExporting }) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow-sm sticky top-0 z-10 p-4 flex justify-between items-center no-print">
                    <h1 className="text-xl md:text-2xl font-bold text-slate-700">Herramienta Didáctica Interactiva</h1>
                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={onPrint} 
                            disabled={isExporting}
                            className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow disabled:bg-blue-400 disabled:cursor-wait min-w-[130px]"
                        >
                            {isExporting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className="hidden md:inline">Exportando...</span>
                                    <span className="md:hidden">Espere...</span>
                                </>
                            ) : (
                                <>
                                    <PrintIcon />
                                    <span className="hidden md:inline">Exportar</span>
                                </>
                            )}
                        </button>
                        <button onClick={onReset} className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow">
                            <ResetIcon />
                            <span className="hidden md:inline">Reiniciar</span>
                        </button>
                    </div>
                </header>
                {children}
            </div>
        </div>
    );
};

export default Layout;
