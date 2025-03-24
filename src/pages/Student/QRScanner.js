import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import QRScannerComponent from "../../components/Student/QR";
const QRScanner = () => {
    const [scanResult, setScanResult] = useState(null);
    return (_jsxs("div", { className: "flex flex-col items-center justify-between min-h-screen bg-gray-100 p-4", children: [_jsxs("div", { className: "w-full flex justify-between items-center px-6 py-4 bg-white shadow-md rounded-lg", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-700", children: "E-Attendance" }), _jsx("h2", { className: "text-lg font-semibold text-gray-700", children: "Student Portal" })] }), _jsxs("div", { className: "flex flex-col items-center justify-center flex-grow", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-800 mb-6", children: "Hi Student! \uD83C\uDF93" }), _jsx("div", { className: "w-[320px] h-[340px] bg-white rounded-2xl shadow-lg flex items-center justify-center p-4", children: _jsx(QRScannerComponent, { onScan: setScanResult }) }), scanResult && (_jsxs("div", { className: "mt-6 p-4 w-[320px] bg-green-100 border border-green-500 text-green-700 text-center rounded-lg shadow-md", children: [_jsx("p", { className: "font-medium", children: "Scanned Code:" }), _jsx("strong", { className: "text-lg", children: scanResult })] }))] })] }));
};
export default QRScanner;
