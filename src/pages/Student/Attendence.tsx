import { useState } from "react";
import ModuleSelector from "../../components/Student/ModuleSelector";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";

const Attendance = () => {
  const [selectedModule, setSelectedModule] = useState("");

  const attendanceRecords = [
    { date: "2024-03-18", time: "10:00", module: "AI & ML", attended: true },
{ date: "2024-03-17", time: "14:00", module: "Big Data", attended: false },
{ date: "2024-03-16", time: "09:30", module: "Network Security", attended: true },
{ date: "2024-03-18", time: "10:00", module: "AI & ML", attended: true },
{ date: "2024-03-16", time: "14:30", module: "AI & ML", attended: false },
{ date: "2024-03-14", time: "09:45", module: "AI & ML", attended: true },

{ date: "2024-03-17", time: "14:00", module: "Big Data", attended: false },
{ date: "2024-03-15", time: "16:30", module: "Big Data", attended: true },
{ date: "2024-03-13", time: "11:00", module: "Big Data", attended: false },

{ date: "2024-03-16", time: "09:30", module: "Network Security", attended: true },
{ date: "2024-03-14", time: "15:15", module: "Network Security", attended: false },
{ date: "2024-03-12", time: "08:45", module: "Network Security", attended: true },

{ date: "2024-03-15", time: "11:00", module: "Cloud Computing", attended: true },
{ date: "2024-03-13", time: "14:45", module: "Cloud Computing", attended: false },
{ date: "2024-03-11", time: "10:15", module: "Cloud Computing", attended: true },

{ date: "2024-03-14", time: "15:30", module: "Data Science", attended: false },
{ date: "2024-03-12", time: "09:00", module: "Data Science", attended: true },
{ date: "2024-03-10", time: "13:30", module: "Data Science", attended: false },

{ date: "2024-03-13", time: "13:00", module: "Software Engineering", attended: true },
{ date: "2024-03-11", time: "16:45", module: "Software Engineering", attended: false },
{ date: "2024-03-09", time: "10:30", module: "Software Engineering", attended: true },

{ date: "2024-03-12", time: "10:15", module: "Cybersecurity", attended: false },
{ date: "2024-03-10", time: "14:15", module: "Cybersecurity", attended: true },
{ date: "2024-03-08", time: "11:45", module: "Cybersecurity", attended: false },

{ date: "2024-03-11", time: "16:45", module: "Blockchain Technology", attended: true },
{ date: "2024-03-09", time: "12:00", module: "Blockchain Technology", attended: false },
{ date: "2024-03-07", time: "15:30", module: "Blockchain Technology", attended: true },

{ date: "2024-03-10", time: "09:00", module: "Machine Learning", attended: true },
{ date: "2024-03-08", time: "13:45", module: "Machine Learning", attended: false },
{ date: "2024-03-06", time: "10:30", module: "Machine Learning", attended: true }

  ];

  const moduleOptions = [...new Set(attendanceRecords.map(record => record.module))];

  const filteredRecords = selectedModule
    ? attendanceRecords.filter(record => record.module === selectedModule)
    : attendanceRecords;

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100 p-4">
      <div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-700">E-Attendance</h2>
        <h2 className="text-lg font-semibold text-gray-700">Student Portal</h2>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Hi Student! 🎓</h1>

        <div className="w-full max-w-4xl p-1 bg-white rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Attendance Records</h2>

          
          <ModuleSelector 
            modules={moduleOptions} 
            selectedModule={selectedModule} 
            onModuleChange={setSelectedModule} 
          />

    
          <div className="w-full border rounded-xl overflow-hidden shadow-md bg-white">
            <div className="overflow-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="bg-gray-300">
                    <TableHead className="text-left p-2 text-blue-600 w-1/4">Date</TableHead>
                    <TableHead className="text-left p-2 text-blue-600 w-1/4">Time</TableHead>
                    <TableHead className="text-left p-2 text-blue-600 w-1/4">Module</TableHead>
                    <TableHead className="text-left p-2 text-blue-600 w-1/4">Attendance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRecords.length > 0 ? (
                    filteredRecords.map((record, index) => (
                      <TableRow key={index} className="border-b">
                        <TableCell className="p-1 w-1/4">{record.date}</TableCell>
                        <TableCell className="p-1 w-1/4">{record.time}</TableCell>
                        <TableCell className="p-1 w-1/4">{record.module}</TableCell>
                        <TableCell className="p-2 w-1/4">
                          {record.attended ? (
                            <span className="text-green-600 font-semibold">Present</span>
                          ) : (
                            <span className="text-red-600 font-semibold">Absent</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-gray-500 p-4">
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
    </div>
  );
};

export default Attendance;
