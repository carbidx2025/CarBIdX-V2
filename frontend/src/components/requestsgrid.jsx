import RequestCard from "./RequestCard";

function RequestsGrid() {
  return (
    <section className="w-full px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Live Car Requests
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </div>

      <div className="flex justify-center mt-12">
        <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-8 py-3 rounded-lg text-lg">
          More Requests
        </button>
      </div>
    </section>
  );
}

export default RequestsGrid;
