import { FaPlus } from "react-icons/fa6";
import { useLoaderData } from "react-router";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      setLoading(true);

      const res = await fetch("data.json");
      const data = await res.json();

      setFriends(data);
      setLoading(false);
    };

    fetchFriends();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-bold pt-20 pb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-[16px] text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white text-[16px] font-semibold py-6 mt-9 mb-10">
          <FaPlus /> Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-9/12 md:w-11/12 lg:w-11/12 mx-auto pb-20 text-center">
        <div className="py-10 rounded bg-white shadow">
          <p className="text-3xl font-semibold text-[#244D3F]">10</p>
          <p className="text-lg text-[#64748B]">Total Friends</p>
        </div>
        <div className="py-10 rounded bg-white shadow">
          <p className="text-3xl font-semibold text-[#244D3F]">3</p>
          <p className="text-lg text-[#64748B]">Total Friends</p>
        </div>
        <div className="py-10 rounded bg-white shadow">
          <p className="text-3xl font-semibold text-[#244D3F]">6</p>
          <p className="text-lg text-[#64748B]">Total Friends</p>
        </div>
        <div className="py-10 rounded bg-white shadow">
          <p className="text-3xl font-semibold text-[#244D3F]">12</p>
          <p className="text-lg text-[#64748B]">Total Friends</p>
        </div>
      </div>

      <div className="w-9/12 mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Your Friends</h3>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="w-9/12 md:w-11/12 lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {friends.map((friend) => (
            <Card key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
