import { useState } from "react";
import QRScannerComponent from "../../components/Student/QR";
import { request } from "../../lib/apiManager";

const QRScanner = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const profile = JSON.parse(localStorage.getItem("profile") || "{}");

  const markAttendance = async () => {
    try {
      const response = await request({
        method: "post",
        path: "/attendance",
        requestBody: {
          studentId: profile.id,
          qrCode: "M8MXUC3W-81MIJR",
          remarks: "Attended on time",
        },
      });
      console.log(response);
    } catch (error) {
      console.error("Error fetching modules:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100 p-4">
      <div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-700">E-Attendance</h2>
        <h2 className="text-lg font-semibold text-gray-700">Student Portal</h2>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Hi Student! 🎓
        </h1>

        <div className="w-[320px] h-[340px] bg-white rounded-2xl shadow-lg flex items-center justify-center p-4">
          <QRScannerComponent onScan={setScanResult} />
        </div>

        <button onClick={markAttendance}>markAttendance</button>

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
