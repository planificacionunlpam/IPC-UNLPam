
import React, { useState, useEffect } from 'react';
import type { FormData } from './types';
import { initialFormData } from './constants';
import Layout from './components/Layout';
import DiscussionSheet from './components/sections/DiscussionSheet';
import InterventionStages from './components/sections/InterventionStages';
import VccBrainstorm from './components/sections/VccBrainstorm';
import ProspectiveQuestion from './components/sections/ProspectiveQuestion';
import PlenarySheet from './components/sections/PlenarySheet';
import MethodologyRoadmap from './components/sections/MethodologyRoadmap';

// Declare libraries loaded from CDN for TypeScript
declare const html2canvas: any;

const App: React.FC = () => {
    const [formData, setFormData] = useState<FormData>(() => {
        try {
            const savedData = localStorage.getItem('class6-formData');
            return savedData ? JSON.parse(savedData) : initialFormData;
        } catch (error) {
            console.error('Error reading from localStorage', error);
            return initialFormData;
        }
    });
    const [isExporting, setIsExporting] = useState(false);

    useEffect(() => {
        try {
            localStorage.setItem('class6-formData', JSON.stringify(formData));
        } catch (error) {
            console.error('Error writing to localStorage', error);
        }
    }, [formData]);

    const updateFormData = <T extends keyof FormData>(section: T, data: FormData[T]) => {
        setFormData(prev => ({
            ...prev,
            [section]: data,
        }));
    };
    
    const handlePrint = async () => {
        const printArea = document.getElementById('print-area');
        if (!printArea) {
            console.error("Could not find element with id 'print-area'");
            alert("Error: No se encontró el área de contenido para exportar.");
            return;
        }

        setIsExporting(true);
        try {
            const canvas = await html2canvas(printArea, { 
                scale: 2, // Improves quality
                logging: false,
                useCORS: true,
                windowWidth: printArea.scrollWidth,
                windowHeight: printArea.scrollHeight
            });

            const imgData = canvas.toDataURL('image/png');
            // Access jsPDF from the window object where the CDN script loaded it
            const { jsPDF: jsPDFConstructor } = (window as any).jspdf;
            const pdf = new jsPDFConstructor({
                orientation: 'p',
                unit: 'mm',
                format: 'a4',
                putOnlyUsedFonts: true,
                compress: true,
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgProps = pdf.getImageProperties(imgData);
            const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
            
            let heightLeft = imgHeight;
            let position = 0;
            
            // Add the first page
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
            heightLeft -= pdfHeight;

            // Add subsequent pages if content overflows
            while (heightLeft > 0) {
                position -= pdfHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
                heightLeft -= pdfHeight;
            }
            
            pdf.save('Herramienta_Didactica_Clase_6.pdf');

        } catch (error) {
            console.error("Error generating PDF:", error);
            alert("Ocurrió un error al generar el PDF. Por favor, inténtelo de nuevo.");
        } finally {
            setIsExporting(false);
        }
    };

    const handleReset = () => {
        const confirmationMessage = '¿Estás seguro de que quieres reiniciar la herramienta? Se borrará toda la información introducida y esta acción no se puede deshacer.';
        if (window.confirm(confirmationMessage)) {
            // Deep copy initialFormData to ensure a completely new, fresh state object is set,
            // preventing any potential issues with object references.
            setFormData(JSON.parse(JSON.stringify(initialFormData)));
            window.scrollTo(0, 0);
        }
    }

    return (
        <Layout onPrint={handlePrint} onReset={handleReset} isExporting={isExporting}>
            <main id="print-area" className="flex-grow p-4 md:p-8 space-y-8 bg-slate-50">
                <DiscussionSheet data={formData.discussionSheet} updateData={(data) => updateFormData('discussionSheet', data)} />
                <InterventionStages data={formData.interventionStages} updateData={(data) => updateFormData('interventionStages', data)} />
                <VccBrainstorm data={formData.vccBrainstorm} updateData={(data) => updateFormData('vccBrainstorm', data)} />
                <ProspectiveQuestion data={formData.prospectiveQuestion} updateData={(data) => updateFormData('prospectiveQuestion', data)} />
                <PlenarySheet data={formData.plenarySheet} updateData={(data) => updateFormData('plenarySheet', data)} />
                <MethodologyRoadmap data={formData.methodologyRoadmap} updateData={(data) => updateFormData('methodologyRoadmap', data)} />
            </main>
        </Layout>
    );
};

export default App;