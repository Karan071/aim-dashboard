import { useNavigate } from "react-router-dom";
import AimshalaLogo from "@/assets/logos/aimshala-light.png";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] px-4">
      <img src={AimshalaLogo} alt="Aimshala Logo" className="h-16 mb-8" />
      <h1 className="text-4xl font-bold mb-4 text-[var(--text-head)]">
        Welcome to Aimshala Dashboard
      </h1>
      <p className="text-lg text-[var(--text-muted)] mb-12 max-w-md text-center">
        Manage your admin account, monitor activities, and access powerful tools all in one place.
      </p>
      <button
        onClick={handleLoginClick}
        className="px-8 py-3 bg-[var(--brand-color)] hover:bg-[var(--brand-color)]/80 text-white rounded-md shadow-md transition"
      >
        Login
      </button>
    </div>
  );
}
