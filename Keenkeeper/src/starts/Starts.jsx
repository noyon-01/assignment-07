import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Starts = () => {
  const { storedCallData, storedTextData, storedVideoData } =
    useContext(UserContext);

  const totalData =
    storedCallData.length + storedTextData.length + storedVideoData.length;

  const data = [
    { name: "Call", value: storedCallData.length, fill: "#244D3F" },
    { name: "Text", value: storedTextData.length, fill: "#7E35E1" },
    { name: "Video", value: storedVideoData.length, fill: "#37A163" },
  ];

  return (
    <div className="w-9/12 py-20 mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white shadow rounded p-8">
        <h2 className="text-[#244D3F] text-xl font-semibold">
          By Interaction Type
        </h2>

        {totalData === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <p className="text-2xl font-semibold">No Available Data</p>
            <p className="text-sm mt-2">
              Add some interactions to see your analytics.
            </p>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col">
            <PieChart
              style={{
                width: "100%",
                maxWidth: "400px",
                maxHeight: "80vh",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius="50%"
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend />
              <Tooltip />
            </PieChart>
          </div>
        )}
      </div>
    </div>
  );
};

export default Starts;
