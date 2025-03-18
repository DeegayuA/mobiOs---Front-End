import { useState } from "react";
import QRScannerComponent from "../../components/Student/QR";

const QRScanner = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100 p-4">

      <div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-700">E-Attendance</h2>
        <h2 className="text-lg font-semibold text-gray-700">Student Portal</h2>
      </div>


      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Hi Student! 🎓</h1>

        
        <div className="w-[320px] h-[340px] bg-white rounded-2xl shadow-lg flex items-center justify-center p-4">
          <QRScannerComponent onScan={setScanResult} />
        </div>

        
        {scanResult && (
          <div className="mt-6 p-4 w-[320px] bg-green-100 border border-green-500 text-green-700 text-center rounded-lg shadow-md">
            <p className="font-medium">Scanned Code:</p>
            <strong className="text-lg">{scanResult}</strong>
          </div>
        )}
      </div>

      
    </div>
  );
};

export default QRScanner;
