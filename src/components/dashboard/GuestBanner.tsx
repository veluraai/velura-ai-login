import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const GuestBanner = () => {
  const { isGuest } = useAuth();
  const navigate = useNavigate();

  if (!isGuest) return null;

  return (
    <div className="px-5 pt-2 pb-1">
      <div className="flex items-center justify-between rounded-xl bg-primary/10 border border-primary/20 px-4 py-2.5">
        <p className="text-xs text-muted-foreground">
          You're in Guest mode. Progress won't be saved.
        </p>
        <button
          onClick={() => { 
            const { logout } = useAuth();
            logout();
            navigate("/signup");
          }}
          className="text-xs font-bold text-primary ml-3 whitespace-nowrap"
        >
          Create Free Account →
        </button>
      </div>
    </div>
  );
};

export default GuestBanner;
