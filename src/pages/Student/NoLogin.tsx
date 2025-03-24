import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { request } from "../../lib/apiManager";

const UI_VIEWS = {
  MOBILE_NO: "mobile_no",
  OTP_INPUT: "otp_input",
};
const NoLogin = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [otp, setOtp] = useState("");
  const [visibleUI, setVisibleUI] = useState(UI_VIEWS.MOBILE_NO);

  const handleSendOtp = async () => {
    try {
      const response = await request({
        method: "post",
        path: "/students/resend/otp",
        requestBody: {
          mobileNo,
        },
      });
      console.log(response);
      setVisibleUI(UI_VIEWS.OTP_INPUT);
    } catch (error) {
      if (error instanceof Error) {
        alert("An error occured. Please check mobile number and try again");
      }
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await request({
        method: "post",
        path: "/students/validate/otp",
        requestBody: {
          mobileNo,
          otp,
        },
      });
      console.log(response);
    } catch (error) {
      if (error instanceof Error) {
        alert("An error occured. Please check OTP and try again");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100 p-4">
      <div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-700">E-Attendance</h2>
        <h2 className="text-lg font-semibold text-gray-700">Student Portal</h2>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-full ">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Hi Student! 🎓
        </h1>

        <Card className="w-full max-w-md ">
          <CardContent className="space-y-4">
            {visibleUI === UI_VIEWS.MOBILE_NO && (
              <>
                <h2 className="text-lg font-semibold text-gray-700">
                  Please enter mobile number
                </h2>

                <div className="space-y-1">
                  <Input
                    id="mobile-no"
                    placeholder="Mobile Number"
                    value={mobileNo}
                    className="rounded-2xl"
                    onChange={(e) => setMobileNo(e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  className="w-full"
                  onClick={handleSendOtp}
                >
                  Send OTP
                </Button>
              </>
            )}
            {visibleUI === UI_VIEWS.OTP_INPUT && (
              <>
                <h2 className="text-lg font-semibold text-gray-700">
                  Please enter OTP
                </h2>

                <div className="space-y-1">
                  <Input
                    id="otp-no"
                    placeholder="XXXXXX"
                    value={otp}
                    className="rounded-2xl"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <Button type="submit" variant="accent" className="w-full" onClick={handleVerifyOtp}>
                  Verify OTP
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NoLogin;
