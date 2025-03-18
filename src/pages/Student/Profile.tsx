import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useState } from "react";

const Profile = () => {

  const studentData = {
    name: "John Doe",
    studentId: "STU123456",
    courseName: "Computer Science",
    courseId: "CS101",
    mobileNo: "0740427745", 
    email: "john.doe@example.com", 
  };


  const [mobileNo, setMobileNo] = useState(studentData.mobileNo);
  const [email, setEmail] = useState(studentData.email);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100 p-4">
      
      <div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md rounded-lg">
        {/* <h2 className="text-lg font-semibold text-gray-700">E-Attendance</h2> */}
        <h2 className="text-lg font-semibold text-gray-700">Student Portal</h2>
      </div>

      
      <div className="flex flex-col items-center justify-center flex-grow w-full ">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Hi Student! 🎓</h1>

        <Card className="w-full max-w-md ">
          <CardContent className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">Profile</h2>

           
            <div className="space-y-1">
              <Label>Student Name</Label>
              <div className="px-3 py-2 bg-gray-200 rounded-2xl">{studentData.name}</div>
            </div>

           
            <div className="space-y-1">
              <Label>Student ID</Label>
              <div className="px-3 py-2 bg-gray-200 rounded-2xl">{studentData.studentId}</div>
            </div>

            
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1 ">
                <Label htmlFor="mobile-no">Mobile No</Label>
                <Input
                  id="mobile-no"
                  placeholder="Mobile Number"
                  value={mobileNo} 
                  className="rounded-2xl"
                  onChange={(e) => setMobileNo(e.target.value)}
                  
                />
              </div>
              <div className="space-y-1 rounded-2xl">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={email} 
                  className="rounded-2xl"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            
            <div className="space-y-1">
              <Label>Course Name</Label>
              <div className="px-3 py-2 bg-gray-200 rounded-2xl">{studentData.courseName}</div>
            </div>

            
            <div className="space-y-1">
              <Label>Course ID</Label>
              <div className="px-3 py-2 bg-gray-200 rounded-2xl">{studentData.courseId}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
