import { useLoaderData, useParams } from "react-router";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { LuArchive } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiVideoCamera } from "react-icons/pi";
import { MdOutlineTextsms } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const FriendDetails = () => {
  const { userId } = useParams();
  const friendData = useLoaderData();

  const expectedData = friendData.find(
    (friend) => friend.id === Number(userId),
  );
  const { name, picture, tags, status, bio, email } = expectedData;
  const { handleCallData, handleTextData, handleVideoData } =
    useContext(UserContext);

  return (
    <div className="w-10/12 lg:w-11/12 xl:w-8/12 mx-auto py-10 flex flex-col lg:flex-row justify-between gap-5">
      <div className="w-12/12 lg:w-4/12">
        <div className="card bg-white shadow">
          <div className="card-body items-center text-center">
            <img className="w-20 h-20 rounded-full" src={picture} alt={name} />
            <h2 className="card-title">{name}</h2>
            <p
              className={`capitalize text-[12px] font-semibold text-white px-3 py-1.5 rounded-2xl ${status == "almost due" ? "bg-[#EFAD44]" : status == "on_track" ? "bg-[#244D3F]" : "bg-[#EF4444]"}`}
            >
              {status}
            </p>
            <div className="flex justify-center items-center gap-1.5">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  className="uppercase text-[12px] font-semibold text-[#244D3F] bg-[#CBFADB] px-3 py-1.5 rounded-2xl"
                >
                  {tag}
                </p>
              ))}
            </div>
            <p className="text-[16px] font-semibold text-[#64748B] italic">
              "{bio}"
            </p>
            <p className="text-[#64748B]">{email}</p>
          </div>
        </div>

        <div className="space-y-2 mt-3">
          <button className="btn bg-white w-full items-center text-[16px] font-semibold py-7">
            <RiNotificationSnoozeLine /> Snooze 2 weeks
          </button>
          <button className="btn bg-white w-full items-center text-[16px] font-semibold py-7">
            <LuArchive /> Archive
          </button>
          <button className="btn text-[#EF4444] bg-white w-full items-center text-[16px] font-semibold py-7">
            <RiDeleteBin6Line /> Delete
          </button>
        </div>
      </div>

      <div className="w-12/12 lg:w-8/12 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="py-12 rounded bg-white shadow">
            <p className="text-3xl font-semibold text-[#244D3F]">
              {expectedData.days_since_contact}
            </p>
            <p className="text-lg text-[#64748B]">Days Since Contact</p>
          </div>
          <div className="py-12 rounded bg-white shadow">
            <p className="text-3xl font-semibold text-[#244D3F]">
              {expectedData.goal}
            </p>
            <p className="text-lg text-[#64748B]">Goal (Days)</p>
          </div>
          <div className="py-12 rounded bg-white shadow">
            <p className="text-3xl font-semibold text-[#244D3F]">
              {expectedData.next_due_date}
            </p>
            <p className="text-lg text-[#64748B]">Next Due</p>
          </div>
        </div>

        <div className="bg-white shadow rounded p-6">
          <div className="flex justify-between items-center">
            <p className="text-[20px] font-medium text-[#244D3F]">
              Relationship Goal
            </p>
            <button className="btn">Edit</button>
          </div>
          <div>
            <p className="text-[#64748B] text-lg font-medium">
              Connect every
              <strong className="text-black font-bold">
                {" "}
                {expectedData.goal} days
              </strong>
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded p-6">
          <p className="text-[20px] font-medium text-[#244D3F] pb-4">
            Quick Check-In
          </p>

          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => handleCallData(expectedData)}
              className="bg-[#F8FAFC] cursor-pointer shadow rounded flex flex-col justify-center items-center p-4"
            >
              <BiSolidPhoneCall className="w-8 h-8" />
              <p className="text-lg font-medium">Call</p>
            </button>
            <button
              onClick={() => handleTextData(expectedData)}
              className="bg-[#F8FAFC] cursor-pointer shadow rounded flex flex-col justify-center items-center p-4"
            >
              <MdOutlineTextsms className="w-8 h-8" />
              <p className="text-lg font-medium">Text</p>
            </button>
            <button
              onClick={() => handleVideoData(expectedData)}
              className="bg-[#F8FAFC] cursor-pointer shadow rounded flex flex-col justify-center items-center p-4"
            >
              <PiVideoCamera className="w-8 h-8" />
              <p className="text-lg font-medium">Video</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
