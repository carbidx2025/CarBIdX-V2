import { Link } from "react-router-dom";

function RequestsGrid({ requests }) {
  if (!requests || requests.length === 0) {
    return (
      <div className="text-center text-gray-300 py-12">
        No active car requests yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {requests.map((item) => (
        <div
          key={item.id}
          className="bg-[#12172d] rounded-xl shadow-lg overflow-hidden border border-[#1f2747]"
        >
          <div className="h-48 w-full overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-5">
            <h3 className="text-xl font-bold text-white mb-2">
              {item.year} {item.make} {item.model}
            </h3>

            <p className="text-gray-300 text-sm mb-3">{item.location}</p>

            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Dealer Offer:</span>
              <span className="text-[#facc15] font-semibold">
                ${item.dealerOffer?.toLocaleString() || "—"}
              </span>
            </div>

            <div className="flex justify-between text-sm text-gray-300 mb-4">
              <span>Target Price:</span>
              <span className="text-gray-200 font-medium">
                ${item.targetPrice?.toLocaleString() || "—"}
              </span>
            </div>

            <Link
              to={`/request/${item.id}`}
              className="bg-[#facc15] text-black font-semibold w-full block text-center py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RequestsGrid;
