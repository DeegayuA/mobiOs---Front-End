import React from "react";
interface ModuleSelectorProps {
    modules: string[];
    selectedModule: string;
    onModuleChange: (module: string) => void;
}
declare const ModuleSelector: React.FC<ModuleSelectorProps>;
export default ModuleSelector;
