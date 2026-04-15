import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { MdArrowDropDown } from "react-icons/md";
import callImg from "../assets/call.png";
import textImg from "../assets/text.png";
import videoImg from "../assets/video.png";

const Timeline = () => {
  const { storedCallData, storedTextData, storedVideoData } =
    useContext(UserContext);
  const totalData =
    storedCallData.length + storedTextData.length + storedVideoData.length;

  const [filter, setFilter] = useState("all");

  return (
    <div className="w-9/12 py-20 mx-auto">
      <h1 className="text-5xl font-bold mb-6">Timeline</h1>

      <div className="dropdown dropdown-start mb-6">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 text-[#64748B]">
            Filter timeline <MdArrowDropDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => setFilter("all")}>All</a>
            </li>
            <li>
              <a onClick={() => setFilter("call")}>Call</a>
            </li>
            <li>
              <a onClick={() => setFilter("text")}>Text</a>
            </li>
            <li>
              <a onClick={() => setFilter("video")}>Video</a>
            </li>
          </ul>
        </div>
      </div>

      {totalData === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <p className="text-2xl font-semibold text-center">
            No Found Data in TimeLine Page
          </p>
          <p className="text-sm mt-2">Your timeline is empty.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {(filter === "all" || filter === "call") &&
            storedCallData.map((call) => (
              <div
                key={call.id}
                className="bg-white shadow p-6 rounded flex items-center gap-2.5"
              >
                <img src={callImg} alt={call.name} />
                <div>
                  <h1>
                    <strong>Call</strong> with {call.name}
                  </h1>
                  <p>{call.next_due_date}</p>
                </div>
              </div>
            ))}

          {(filter === "all" || filter === "text") &&
            storedTextData.map((text) => (
              <div
                key={text.id}
                className="bg-white shadow p-4 rounded flex items-center gap-2.5"
              >
                <img src={textImg} alt={text.name} />
                <div>
                  <h1>
                    <strong>Text</strong> with {text.name}
                  </h1>
                  <p>{text.next_due_date}</p>
                </div>
              </div>
            ))}

          {(filter === "all" || filter === "video") &&
            storedVideoData.map((video) => (
              <div
                key={video.id}
                className="bg-white shadow p-6 rounded flex items-center gap-2.5"
              >
                <img src={videoImg} alt={video.name} />
                <div>
                  <h1>
                    <strong>Video</strong> with {video.name}
                  </h1>
                  <p>{video.next_due_date}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;
