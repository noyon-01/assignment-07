import { Link } from "react-router";

const Card = ({ friend }) => {
  const { id, name, picture, days_since_contact, tags, status } = friend;

  return (
    <Link to={`/friendDetails/${id}`} className="card bg-white shadow">
      <div className="card-body items-center text-center">
        <img className="w-20 h-20 rounded-full" src={picture} alt={name} />
        <h2 className="card-title">{name}</h2>
        <p className="text-[#64748B]">{days_since_contact}d ago</p>
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
        <p
          className={`capitalize text-[12px] font-semibold text-white px-3 py-1.5 rounded-2xl ${status == "almost due" ? "bg-[#EFAD44]" : status == "on_track" ? "bg-[#244D3F]" : "bg-[#EF4444]"}`}
        >
          {status}
        </p>
      </div>
    </Link>
  );
};

export default Card;
