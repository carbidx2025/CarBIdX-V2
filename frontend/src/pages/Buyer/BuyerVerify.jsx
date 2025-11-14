import React, { useState } from "react";
import Input from "../../components/forms/Input";
import Button from "../../components/ui/Button";

export default function BuyerVerify() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("idle"); // idle | verifying | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("verifying");

    try {
      // TODO: connect actual backend endpoint
      await new Promise((res) => setTimeout(res, 1200));

      setStatus("success");
      setTimeout(() => {
        window.location.href = "/buyer/request";
      }, 800);
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#0a0f24] flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-md bg-[#11172f] border border-[#1a2240] rounded-xl shadow-xl p-8 text-white">

        <h1 className="text-3xl font-bold mb-3 text-center">Verify Identity</h1>
        <p className="text-gray-300 text-center mb-8">
          Enter the 6-digit verification code sent to your email or phone.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input
            label="Verification Code"
            name="code"
            type="text"
            maxLength="6"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />

          {status === "error" && (
            <p className="text-red-400 text-sm text-center -mt-3">
              Invalid code. Try again.
            </p>
          )}

          <Button
            type="submit"
            disabled={status === "verifying"}
            className="w-full bg-[#E8C225] hover:bg-[#C9A71E] text-black font-semibold py-3 rounded-lg transition"
          >
            {status === "verifying" ? "Verifying..." : "Verify Code"}
          </Button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Didn’t receive a code?{" "}
          <a
            href="/buyer/verify/resend"
            className="text-[#E8C225] hover:text-[#C9A71E] font-medium"
          >
            Resend
          </a>
        </p>
      </section>
    </main>
  );
}
