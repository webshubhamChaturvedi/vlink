import React, { useState } from "react";
import { ZoomMtg } from "@zoomus/websdk";
import "../common/livewebinar.css";

ZoomMtg.setZoomJSLib("https://source.zoom.us/2.13.0/lib", "/av");
ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();

const values = {
  ZOOM_MEETING_SDK_KEY: process.env.NEXT_PUBLIC_ZOOM_MEETING_SDK_KEY,
  ZOOM_MEETING_SDK_SECRET: process.env.NEXT_PUBLIC_ZOOM_MEETING_SDK_SECRET,
  meetingNumber: 89295397410,
  role: 0,
  signature:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJ2dHF1enVjUVF1dXZ6V19XRTM5TjBBIiwibW4iOjg5Mjk1Mzk3NDEwLCJyb2xlIjowLCJpYXQiOjE2OTUyNjg4NTgsImV4cCI6MTY5NTM1NTI1OCwiYXBwS2V5IjoidnRxdXp1Y1FRdXV2eldfV0UzOU4wQSIsInRva2VuRXhwIjoxNjk1MzU1MjU4fQ.TCX0x0FUYouh8zLAWqYXMbOJnLgMRqA-CeR13SOfqsI",
};

const LiveWebinar = () => {
  var sdkKey = values.ZOOM_MEETING_SDK_KEY;
  var meetingNumber = values.meetingNumber;
  var passWord = values.password;
  var registrantToken = "";
  var zakToken = "";
  var leaveUrl = "https://www.vlinkinfo.com/webinars/LiveWebinarPage/";

  function startMeeting(signature) {
    document.getElementById("zmmtg-root").style.display = "block";
    document.getElementById("nn").style.display = "none";
    document.getElementById("zmmtg-root").style.zIndex = "99";

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          sdkKey: sdkKey,
          meetingNumber: meetingNumber,
          passWord: passWord,
          userName: userName,
          userEmail: userEmail,
          tk: registrantToken,
          zak: zakToken,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
        ZoomMtg.showPureSharingContent({
          show: true,
          disable: false,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
    ZoomMtg.showPureSharingContent({
      show: true,
      disable: false,
    });
  }
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [userEmailError, setUserEmailError] = useState("");

  const validateUserName = () => {
    if (userName.length <= 3 || !/^[a-zA-Z]+$/.test(userName)) {
      setUserNameError(
        "User name must be greater than 3 characters and contain only alphabets."
      );
      return false;
    }
    setUserNameError("");
    return true;
  };
  const validateUserEmail = () => {
    if (!userEmail.includes("@gmail.com")) {
      setUserEmailError("Please enter a valid Gmail address.");
      return false;
    }
    setUserEmailError("");
    return true;
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const getSignature = () => {
    startMeeting(values.signature);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isUserNameValid = validateUserName();
    const isUserEmailValid = validateUserEmail();

    if (isUserNameValid && isUserEmailValid) {
      getSignature();
    }
  };

  return (
    <>
      <div className="formblockZoom">
        <div className="form-container webinarform" id="nn">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>User Name</label>
              <input
                type="text"
                className={`input-field ${userNameError ? "input-error" : ""}`}
                value={userName}
                onChange={handleUserNameChange}
              />
              {userNameError && (
                <span className="error-message">{userNameError}</span>
              )}
            </div>
            <div className="input-container">
              <label>User Email</label>
              <input
                type="text"
                className={`input-field ${userEmailError ? "input-error" : ""}`}
                value={userEmail}
                onChange={handleUserEmailChange}
              />
              {userEmailError && (
                <span className="error-message">{userEmailError}</span>
              )}
            </div>
            <button
              type="submit"
              className="bg-[rgb(98_32_126_/_1)] text-[#fff] py-[10px] px-[25px] mt-[20px]"
            >
              Join Meeting
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LiveWebinar;
