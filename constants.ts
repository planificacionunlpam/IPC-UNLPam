
import type { FormData } from './types';

export const initialFormData: FormData = {
    discussionSheet: {
        groupName: '',
        date: '',
        question1: '',
        question2: '',
        epistemologicalExample: '',
        strategicExample: '',
        technicalExample: '',
        relationExplanation: '',
    },
    interventionStages: {
        stage1Notes: '',
        stage2Notes: '',
        stage3Notes: '',
        stage4Notes: '',
        finalReflection: '',
    },
    vccBrainstorm: {
        subjects: [],
        senses: [],
        strategies: [],
        priority1: { vcc: '', justification: '' },
        priority2: { vcc: '', justification: '' },
        priority3: { vcc: '', justification: '' },
    },
    prospectiveQuestion: {
        selectedVcc: '',
        desiredFuture: '',
        necessaryActions: '',
        actorsAndConditions: '',
        possibleScenarios: '',
        finalReflection: '',
    },
    plenarySheet: {
        constructionProcess: '',
        instrumentNature: '',
        metaphorMeaning: '',
    },
    methodologyRoadmap: {
        importantVccs: '',
        priorityReflection: '',
        authors: '',
        synthesis: '',
    },
};

export const sections = [
    { id: 'discussion-sheet', title: '1. Ficha de Discusión Guiada' },
    { id: 'intervention-stages', title: '2. Etapas del Diseño de Intervención' },
    { id: 'vcc-brainstorm', title: '3. Lluvia de Ideas de VCC' },
    { id: 'prospective-question', title: '4. De la VCC a la Pregunta Prospectiva' },
    { id: 'plenary-sheet', title: '5. Ficha para Plenario' },
    { id: 'methodology-roadmap', title: '6. Hoja de Ruta Metodológica' },
];
