import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { IoMdArrowDropdown } from "react-icons/io";
import callImg from "../assets/call.png";
import textImg from "../assets/text.png";
import videoImg from "../assets/video.png";

// const Timeline = () => {
//   const { storedCallData, storedTextData, storedVideoData } =
//     useContext(UserContext);
//     const totalData = storedCallData.length + storedTextData.length + storedVideoData.length;
//     console.log(totalData)

//   return (
//     <div className="w-9/12 py-20 mx-auto">
//       <h1 className="text-5xl font-bold mb-6">Timeline</h1>

//       <div className="dropdown dropdown-start mb-6">
//         <div tabIndex={0} role="button" className="btn m-1">
//           Filter timeline <IoMdArrowDropdown />
//         </div>
//         <ul
//           tabIndex="-1"
//           className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
//         >
//           <li>
//             <a>Call</a>
//           </li>
//           <li>
//             <a>Text</a>
//           </li>
//           <li>
//             <a>Video</a>
//           </li>
//         </ul>
//       </div>

//       <div className="space-y-4">
//             <div className="space-y-4">
//               {storedCallData.map((call) => (
//                 <div
//                   className="bg-white shadow p-6 rounded flex items-center gap-2.5"
//                   key={call.id}
//                 >
//                   <img src={callImg} alt={call.name} />
//                   <div>
//                     <h1 className="text-lg text-[#64748B]">
//                       <strong className="text-xl font-semibold text-black">
//                         Call
//                       </strong>{" "}
//                       with {call.name}
//                     </h1>
//                     <h1>{call.next_due_date}</h1>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="space-y-4">
//               {storedTextData.map((text) => (
//                 <div
//                   className="bg-white shadow p-4 rounded flex items-center gap-2.5"
//                   key={text.id}
//                 >
//                   <img src={textImg} alt={text.name} />
//                   <div>
//                     <h1 className="text-lg text-[#64748B]">
//                       <strong className="text-xl font-semibold text-black">
//                         Text
//                       </strong>{" "}
//                       with {text.name}
//                     </h1>
//                     <h1>{text.next_due_date}</h1>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="space-y-4">
//               {storedVideoData.map((video) => (
//                 <div
//                   className="bg-white shadow p-6 rounded flex items-center gap-2.5"
//                   key={video.id}
//                 >
//                   <img src={videoImg} alt={video.name} />
//                   <div>
//                     <h1 className="text-lg text-[#64748B]">
//                       <strong className="text-xl font-semibold text-black">
//                         Video
//                       </strong>{" "}
//                       with {video.name}
//                     </h1>
//                     <h1>{video.next_due_date}</h1>
//                   </div>
//                 </div>
//               ))}
//             </div>
//       </div>
//     </div>
//   );
// };

const Timeline = () => {
  const { storedCallData, storedTextData, storedVideoData } =
    useContext(UserContext);
  const totalData =
    storedCallData.length + storedTextData.length + storedVideoData.length;

  return (
    <div className="w-9/12 py-20 mx-auto">
      <h1 className="text-5xl font-bold mb-6">Timeline</h1>

      <div className="dropdown dropdown-start mb-6">
        {/* ...dropdown code */}
      </div>

      {/* ✅ Show "No Data Found" when totalData is 0 */}
      {totalData === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <p className="text-2xl font-semibold text-center">No Found Data in TimeLine Page</p>
          <p className="text-sm mt-2">Your timeline is empty.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-4">
            {storedCallData.map((call) => (
              <div
                className="bg-white shadow p-6 rounded flex items-center gap-2.5"
                key={call.id}
              >
                <img src={callImg} alt={call.name} />
                <div>
                  <h1 className="text-lg text-[#64748B]">
                    <strong className="text-xl font-semibold text-black">
                      Call
                    </strong>{" "}
                    with {call.name}
                  </h1>
                  <h1>{call.next_due_date}</h1>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {storedTextData.map((text) => (
              <div
                className="bg-white shadow p-4 rounded flex items-center gap-2.5"
                key={text.id}
              >
                <img src={textImg} alt={text.name} />
                <div>
                  <h1 className="text-lg text-[#64748B]">
                    <strong className="text-xl font-semibold text-black">
                      Text
                    </strong>{" "}
                    with {text.name}
                  </h1>
                  <h1>{text.next_due_date}</h1>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {storedVideoData.map((video) => (
              <div
                className="bg-white shadow p-6 rounded flex items-center gap-2.5"
                key={video.id}
              >
                <img src={videoImg} alt={video.name} />
                <div>
                  <h1 className="text-lg text-[#64748B]">
                    <strong className="text-xl font-semibold text-black">
                      Video
                    </strong>{" "}
                    with {video.name}
                  </h1>
                  <h1>{video.next_due_date}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
