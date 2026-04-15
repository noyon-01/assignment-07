import { FaPlus } from "react-icons/fa6";

const Home = () => {
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

      <div className="grid grid-cols-4 gap-6 w-9/12 mx-auto pb-20 text-center">
        <div className="py-10 rounded bg-white shadow">
          <p className="text-3xl font-semibold text-[#244D3F]">10</p>
          <p className="text-lg text-[#64748B]">Total Friends</p>
        </div>
        <div className="py-10 rounded bg-white shadow">
          <p className="text-3xl font-semibold text-[#244D3F]">10</p>
          <p className="text-lg text-[#64748B]">Total Friends</p>
        </div>
        <div className="py-10 rounded bg-white shadow">
          <p className="text-3xl font-semibold text-[#244D3F]">10</p>
          <p className="text-lg text-[#64748B]">Total Friends</p>
        </div>
        <div className="py-10 rounded bg-white shadow">
          <p className="text-3xl font-semibold text-[#244D3F]">10</p>
          <p className="text-lg text-[#64748B]">Total Friends</p>
        </div>
      </div>

      <div className="">
        <h3>Your Friends</h3>
      </div>
    </div>
  );
};

export default Home;
