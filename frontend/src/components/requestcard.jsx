function RequestCard() {
  return (
    <div className="bg-[#11172e] rounded-xl p-4 shadow-lg border border-white/10 hover:scale-[1.02] transition transform cursor-pointer">
      <img
        src="https://placehold.co/600x400/1a2238/FFF?text=Car+Image"
        alt="car"
        className="rounded-lg mb-4"
      />

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs bg-green-600 px-2 py-1 rounded-lg">
          EXCELLENT
        </span>
        <span className="text-xs text-gray-300">00:45:23</span>
      </div>

      <h3 className="text-lg font-bold mb-2">2023 Mercedes GLS 450</h3>
      <p className="text-sm text-gray-400 mb-3">San Francisco, CA</p>

      <div className="text-sm mb-1">
        <span className="text-gray-400">Mileage:</span> 12,500 mi
      </div>

      <div className="text-sm mb-1">
        <span className="text-gray-400">Fuel:</span> Premium
      </div>

      <div className="text-sm mb-4">
        <span className="text-gray-400">Dealer Offer:</span>{" "}
        <span className="text-yellow-400 font-semibold">$48,200</span>
      </div>

      <button className="bg-yellow-500 w-full text-black font-semibold py-2 rounded-lg hover:bg-yellow-400">
        View Details
      </button>
    </div>
  );
}

export default RequestCard;
