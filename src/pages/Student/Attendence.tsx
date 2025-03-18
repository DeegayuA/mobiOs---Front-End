import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";


const Attendance = () => {

  const [attendanceRecords] = useState([
    { date: "2024-03-18", time: "10:00 AM", course: "Computer Science", module: "AI & ML" },
    { date: "2024-03-17", time: "02:00 PM", course: "Data Science", module: "Big Data" },
    { date: "2024-03-16", time: "09:30 AM", course: "Cybersecurity", module: "Network Security" },
  ]);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100 p-4">
    
      <div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-700">E-Attendance</h2>
        <h2 className="text-lg font-semibold text-gray-700">Student Portal</h2>
      </div>

     
      <div className="flex flex-col items-center justify-center flex-grow w-full px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Hi Student! 🎓</h1>

       
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Attendance</h2>

          <div className="w-full border rounded-lg overflow-hidden shadow-md bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Date</TableHead>
                  <TableHead className="w-1/4">Time</TableHead>
                  <TableHead className="w-1/4">Course</TableHead>
                  <TableHead className="w-1/4">Module</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceRecords.length > 0 ? (
                  attendanceRecords.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.time}</TableCell>
                      <TableCell>{record.course}</TableCell>
                      <TableCell>{record.module}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-gray-500">
                      No attendance records found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
