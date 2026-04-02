import { Flame, Trophy, Swords, Lock, ChevronRight, Edit, Bell, LogOut, X } from "lucide-react";
import { useState } from "react";

const badges = [
  { name: "Tech_Teen", label: "Completed 5 lessons", earned: true, date: "12 Jan 2025" },
  { name: "Tech_Burner", label: "Completed 10 lessons", earned: true, date: "28 Feb 2025" },
  { name: "God_of_Logics", label: "Score 90%+ in 5 duels", earned: false },
  { name: "Comp_Master", label: "Win 25 duels", earned: false },
];

const ProfileScreen = () => {
  const [selectedBadge, setSelectedBadge] = useState<typeof badges[0] | null>(null);

  return (
    <div className="px-5 pb-8 space-y-6">
      {/* Avatar & Info */}
      <div className="flex flex-col items-center pt-2">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 border-2 border-primary text-2xl font-bold text-primary">
          AV
        </div>
        <p className="text-lg font-bold text-foreground mt-3">@Ankur_V</p>
        <p className="text-sm text-muted-foreground">God of Logics in the making 🧠</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-border bg-card p-3 text-center">
          <p className="text-lg font-bold text-foreground">2,450</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Total XP</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-3 text-center">
          <p className="text-lg font-bold text-foreground">5 🔥</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Streak</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-3 text-center">
          <p className="text-lg font-bold text-foreground">12</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Duels Won</p>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h2 className="text-base font-bold text-foreground mb-3">Your Badges</h2>
        <div className="grid grid-cols-2 gap-3">
          {badges.map((b) => (
            <button
              key={b.name}
              onClick={() => b.earned && setSelectedBadge(b)}
              className={`rounded-2xl border p-4 text-left transition-all ${
                b.earned
                  ? "border-primary/30 bg-card shadow-[0_0_12px_rgba(168,85,247,0.1)]"
                  : "border-border bg-card opacity-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">{b.earned ? "🏆" : ""}</span>
                {!b.earned && <Lock className="h-4 w-4 text-muted-foreground" />}
              </div>
              <p className={`text-sm font-bold mt-2 ${b.earned ? "text-primary" : "text-muted-foreground"}`}>
                {b.name}
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{b.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Progress to next badge */}
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>Tech_Burner</span>
          <span>God_of_Logics</span>
        </div>
        <div className="h-2 w-full rounded-full bg-border overflow-hidden">
          <div className="h-full rounded-full bg-primary" style={{ width: "55%" }} />
        </div>
        <p className="text-xs text-muted-foreground mt-2">450 XP remaining to unlock</p>
      </div>

      {/* Settings */}
      <div className="rounded-2xl border border-border bg-card divide-y divide-border">
        {[
          { icon: Edit, label: "Edit Profile" },
          { icon: Bell, label: "Notifications" },
          { icon: LogOut, label: "Logout" },
        ].map((item) => (
          <button key={item.label} className="flex items-center gap-3 w-full px-4 py-3.5 text-left">
            <item.icon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-foreground flex-1">{item.label}</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        ))}
      </div>

      {/* Badge Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-8">
          <div className="w-full max-w-[320px] rounded-2xl border border-border bg-card p-6 relative">
            <button
              onClick={() => setSelectedBadge(null)}
              className="absolute top-3 right-3 text-muted-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              <span className="text-4xl">🏆</span>
              <p className="text-lg font-bold text-primary mt-3">{selectedBadge.name}</p>
              <p className="text-sm text-muted-foreground mt-1">{selectedBadge.label}</p>
              {selectedBadge.date && (
                <p className="text-xs text-muted-foreground mt-3">Earned on {selectedBadge.date}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileScreen;
