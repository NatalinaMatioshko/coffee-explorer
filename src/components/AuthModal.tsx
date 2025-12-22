import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useAuthStore } from "../store/useAuthStore";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { mode, setMode, login, register } = useAuthStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "login") {
        await login(email);
      } else {
        await register(name, email);
      }
      onClose();
    } finally {
      setLoading(false);
    }
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#fefbf3] p-8 shadow-2xl"
        onClick={handleContentClick}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#4f2d20] hover:opacity-70 transition-opacity"
        >
          <IoClose size={24} />
        </button>

        <h2 className="mb-6 text-center text-3xl font-bold text-[#4f2d20]">
          {mode === "login" ? "Welcome Back" : "Join Us"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === "register" && (
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#4f2d20]">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="rounded-xl border border-amber-200 bg-white px-4 py-3 text-[#4f2d20] placeholder-neutral-400 focus:border-[#4f2d20] focus:outline-none"
              />
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#4f2d20]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@coffee.com"
              className="rounded-xl border border-amber-200 bg-white px-4 py-3 text-[#4f2d20] placeholder-neutral-400 focus:border-[#4f2d20] focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#4f2d20]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="rounded-xl border border-amber-200 bg-white px-4 py-3 text-[#4f2d20] placeholder-neutral-400 focus:border-[#4f2d20] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 rounded-xl bg-[#4f2d20] py-3 font-semibold text-[#fefbf3] transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-60"
          >
            {loading
              ? "Processing..."
              : mode === "login"
              ? "Sign In"
              : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-neutral-600">
          {mode === "login" ? (
            <>
              Don&apos;t have an account?
              <button
                type="button"
                onClick={() => setMode("register")}
                className="font-bold text-[#4f2d20] hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="font-bold text-[#4f2d20] hover:underline"
              >
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
