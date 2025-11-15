function BuyerVerify() {
  return (
    <div className="min-h-screen bg-[#0a0f24] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#11172f] border border-[#1a2240] rounded-lg p-8">

        <h1 className="text-2xl font-bold mb-6 text-center">Verify Your Account</h1>

        <p className="text-gray-300 text-sm mb-4 text-center">
          Enter the 6-digit code sent to your email or phone.
        </p>

        <input
          type="text"
          placeholder="123456"
          maxLength={6}
          className="w-full px-3 py-2 rounded bg-[#1a2240] border border-[#2a3358] text-center tracking-widest text-lg"
        />

        <button className="mt-6 w-full bg-[#E8C225] text-black py-2.5 rounded font-semibold hover:bg-[#d5b628]">
          Verify
        </button>
      </div>
    </div>
  );
}

export default BuyerVerify;
