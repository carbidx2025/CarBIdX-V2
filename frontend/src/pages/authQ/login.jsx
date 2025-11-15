import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Input from "../../components/forms/Input";
import Button from "../../components/ui/Button";

const Login = () => {
  const { login, loading, error } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form.email, form.password);
  };

  return (
    <main className="min-h-screen w-full bg-[#0a0f24] flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-md bg-[#11172f] border border-[#1a2240] rounded-xl shadow-xl p-8 text-white">

        <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back</h1>
        <p className="text-gray-300 text-center mb-8">
          Sign in to your CarBidX account.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {error && (
            <p className="text-red-400 text-sm text-center -mt-3">{error}</p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E8C225] hover:bg-[#C9A71E] text-black font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-[#E8C225] hover:text-[#C9A71E] font-medium"
          >
            Sign Up
          </a>
        </p>

      </section>
    </main>
  );
};

export default Login;

