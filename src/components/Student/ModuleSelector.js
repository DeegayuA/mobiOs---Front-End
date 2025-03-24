import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ModuleSelector = ({ modules, selectedModule, onModuleChange }) => {
    return (_jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-blue-500 font-semibold mb-2", children: "Select Module:" }), _jsxs("select", { className: "w-[75%] p-2 border rounded-lg", value: selectedModule, onChange: (e) => onModuleChange(e.target.value), children: [_jsx("option", { value: "", children: "All Modules" }), modules.map((module, index) => (_jsx("option", { value: module, children: module }, index)))] })] }));
};
export default ModuleSelector;
