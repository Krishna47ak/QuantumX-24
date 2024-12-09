import { useState } from "react";
import Image from "next/image";
import Moment from "react-moment";

const AdminDropDown = ({ user, verify }) => {
  const [onDrop, setOnDrop] = useState(false);

  return (
    <div className="text-white mb-3 md:mb-5 text-xs md:text-base overflow-hidden">
      <div
        onClick={() => setOnDrop(!onDrop)}
        className="flex justify-center items-center bg-blue-800 border-2 border-white px-5 py-4 rounded-md select-none"
      >
        <p className="ml-auto">{user?.leader ? user?.leader : user?.name}</p>
        <Image className={`w-7 h-4 ml-auto duration-300 scale-75 md:scale-100 ${onDrop ? "-rotate-180" : "rotate-0"} `} src="/pink-arrow.png" width={35} height={1} alt="arrow" />
      </div>
      <div
        className={`p-5 ${onDrop ? "translate-y-0" : "-translate-y-full hidden"}`}>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div>
            {user?.eventName === "QUANTUM HACKS" && (
              <p className="mb-1">Team Name: {user?.teamName}</p>
            )}
            {(user?.eventName === "BYTE BRAWL-BGMI" || user?.eventName === "BYTE BRAWL-COD") && (
              <p className="mb-1">Discord Id: {user?.discord}</p>
            )}
            <p className="mb-1">
              Name: {user?.leader ? user?.leader : user?.name}
            </p>
            <p className="mb-1">Email: {user?.email}</p>
            <p className="mb-1">Phone: {user?.phone}</p>
            <p className="mb-1">College: {user?.college}</p>
            <p className="mb-1">USN: {user?.usn}</p>
            <p className="mb-1">Fee: {user?.fee}</p>
            <p className="mb-1">Date & Time: <Moment format=" Do MMMM YYYY h:mm a" >{user?.date}</Moment></p>
            {user?.eventName === "BOTS ROYALE" && (
              <p className="mb-1">Weight Class: {user?.weightClass}</p>
            )}
            <div className="mt-5 lg:mt-0">
              {user?.members &&
                user?.members?.map((member, index) => (
                  <div key={member?._id}>
                    <div className="h-1 w-full bg-slate-900 my-5" />
                    <div className="bg-gray-950 p-4 rounded-xl">
                      <p className="mb-1">
                        Member name ({index + 1}): {member?.name}
                      </p>
                      <p className="mb-1">Member email:{member?.email}</p>
                      <p className="mb-1">
                        Member phone number: {member?.phone}
                      </p>
                      <p className="mb-1">Member USN: {member?.usn}</p>
                      <p className="mb-1">Member college: {member?.college}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {user?.applicantId && (
            <div>
              {user?.transacImg && (
                <div className="flex flex-col justify-center items-center mb-2">
                  {user?.transacImg?.split(";")[0] === "data:application/pdf" ? (
                    <embed className="sm:w-[35rem] sm:h-60 md:h-[20rem] rounded-xl border border-gray-400" src={user?.transacImg} width="100%" height="100%" type="application/pdf" />
                  ) : (
                    <Image className="w-[35rem] rounded-xl h-[20rem] border border-gray-400 object-cover object-top" src={user?.transacImg} width={200} height={50} alt="tranac" />
                  )}
                </div>
              )}
              <p>Applicant Id: {user?.applicantId}</p>
              <div onClick={() => (user?.verified ? alert("Already Verified") : verify({ applicantId: user?.applicantId }))} className={`${user?.verified ? "bg-green-600 active:bg-green-400" : "bg-red-600 active:bg-red-400"} inline-block p-2 px-6 font-semibold rounded-xl my-2 cursor-pointer select-none`} >{user?.verified ? "Verified" : "Verify"}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDropDown;
