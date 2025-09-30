
export interface DiscussionSheetData {
    groupName: string;
    date: string;
    question1: string;
    question2: string;
    epistemologicalExample: string;
    strategicExample: string;
    technicalExample: string;
    relationExplanation: string;
}

export interface InterventionStagesData {
    stage1Notes: string;
    stage2Notes: string;
    stage3Notes: string;
    stage4Notes: string;
    finalReflection: string;
}

export interface VccBrainstormData {
    subjects: string[];
    senses: string[];
    strategies: string[];
    priority1: { vcc: string; justification: string };
    priority2: { vcc: string; justification: string };
    priority3: { vcc: string; justification: string };
}

export interface ProspectiveQuestionData {
    selectedVcc: string;
    desiredFuture: string;
    necessaryActions: string;
    actorsAndConditions: string;
    possibleScenarios: string;
    finalReflection: string;
}

export interface PlenarySheetData {
    constructionProcess: string;
    instrumentNature: string;
    metaphorMeaning: string;
}

export interface MethodologyRoadmapData {
    importantVccs: string;
    priorityReflection: string;
    authors: string;
    synthesis: string;
}


export interface FormData {
    discussionSheet: DiscussionSheetData;
    interventionStages: InterventionStagesData;
    vccBrainstorm: VccBrainstormData;
    prospectiveQuestion: ProspectiveQuestionData;
    plenarySheet: PlenarySheetData;
    methodologyRoadmap: MethodologyRoadmapData;
}
