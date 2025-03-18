import React from "react";

interface ModuleSelectorProps {
  modules: string[];
  selectedModule: string;
  onModuleChange: (module: string) => void;
}

const ModuleSelector: React.FC<ModuleSelectorProps> = ({ modules, selectedModule, onModuleChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-blue-500 font-semibold mb-2">Select Module:</label>
      <select
        className="w-[75%] p-2 border rounded-lg"
        value={selectedModule}
        onChange={(e) => onModuleChange(e.target.value)}
      >
        <option value="">All Modules</option>
        {modules.map((module, index) => (
          <option key={index} value={module}>
            {module}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModuleSelector;
