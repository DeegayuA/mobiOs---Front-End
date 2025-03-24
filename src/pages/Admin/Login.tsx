import { useState, useEffect } from "react"
import { LoginForm } from "../../components/login-form"
import { motion } from "framer-motion"
import {request} from "../../lib/apiManagerAdmin";
import {saveAdminProfileToLocalStorage} from "../../lib/utils";
import { useNavigate } from "react-router-dom";
import * as React from "react";

const imageData = [
  "/src/assets/login-bg1.jpg",
  "/src/assets/login-bg2.jpg",
  "/src/assets/login-bg3.jpg"
]

export default function AdminLogin() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const login = async (event: React.FormEvent) => {
    try {
      event.preventDefault(); // Prevents page reload
      const response = await request({
        method: "post",
        path: "/auth/login",
        requestBody: {
          username: username,
          password: password,
        },
      });
      console.log(response);
      const data = response.data;
      const profileData = {
        access_token: data.access_token,
        ...response.data.user,
      }
      console.log("profileData")
      console.log(profileData)
      console.log(data)
      if(profileData.access_token){
        await saveAdminProfileToLocalStorage(profileData);
        navigate("/admin/dashboard");
        console.log('ss')
      }else {

        console.log('err')
      }

    } catch (error) {
      if (error instanceof Error) {
        alert("An error occurred. Please username or password and try again");
      }
    }
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Smooth fade transition duration
          className="absolute inset-0"
        >
          <img
            src={imageData[currentImageIndex]}
            alt="Image"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </motion.div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="text-sidebar-primary-foreground flex aspect-square size-6 items-center justify-center rounded-lg">
              <img src="./src/assets/letter-e.png" alt="Sidebar Icon" />
            </div>
            E-Attendance
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm login={login} setUsername={setUsername} setPassword={setPassword} />
          </div>
        </div>
      </div>
    </div>
  )
}
