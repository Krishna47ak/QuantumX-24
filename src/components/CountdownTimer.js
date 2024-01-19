"use client";
import { useState } from "react";
const CountdownTimer = () => {
  var days, hours, minutes, seconds;
  const [isDays, setIsDays] = useState("");
  const [isHours, setIsHours] = useState("");
  const [isMins, setIsMins] = useState("");
  const [isSecs, setIsSecs] = useState("");

  function makeTimer() {
    var endTime = new Date("23 January 2024 4:00:00 GMT+01:00");
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;

    days = Math.floor(timeLeft / 86400);
    hours = Math.floor((timeLeft - days * 86400) / 3600);
    minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    setIsDays(days);
    setIsHours(hours);
    setIsMins(minutes);
    setIsSecs(seconds);
  }

  setInterval(function () {
    makeTimer();
  }, 1000);
  return (
    <div>
      <div className="bg-gradient-to-b from-black to-[#831c84] flex justify-center items-center p-10 py-12 md:py-20 md:text-4xl font-bold text-white text-center space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-16">
        <div className="flex flex-col space-y-5" id="daysCol">
          <p className="font-medium">DAYS</p>
          <span className="text-lg sm:text-2xl md:text-5xl">{isDays}</span>
        </div>
        <p className="mt-auto">:</p>
        <div className="flex flex-col space-y-5" id="hoursCol">
          <p className="font-medium">HOURS</p>
          <span className="text-lg sm:text-2xl md:text-5xl">{isHours}</span>
        </div>
        <p className="mt-auto">:</p>
        <div className="flex flex-col space-y-5" id="minsCol">
          <p className="font-medium">MINS</p>
          <span className="text-lg sm:text-2xl md:text-5xl">{isMins}</span>
        </div>
        <p className="mt-auto">:</p>
        <div className="flex flex-col space-y-5" id="secondsCol">
          <p className="font-medium">SECS</p>
          <span className="text-lg sm:text-2xl md:text-5xl">{isSecs}</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
