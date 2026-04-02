import { Flame, Trophy, Award, ChevronRight, Zap } from "lucide-react";
import { useState, useRef } from "react";

const subjects = [
  { name: "Maths", topic: "Quadratic Equations", progress: 65 },
  { name: "Physics", topic: "Newton's Laws", progress: 42 },
  { name: "Chemistry", topic: "Periodic Table", progress: 80 },
  { name: "History", topic: "Mughal Empire", progress: 30 },
];

const leaderboard = [
  { rank: 1, name: "Priya_S", xp: "3,200 XP", initials: "PS" },
  { rank: 2, name: "Rohan_K", xp: "2,980 XP", initials: "RK" },
  { rank: 3, name: "Ankur_V", xp: "2,450 XP", initials: "AV", isUser: true },
];

const HomeScreen = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="px-5 pb-8 space-y-6">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Hey, Ankur 👋</h1>
        <p className="text-sm text-muted-foreground mt-1">You're on a 5-day streak 🔥</p>
      </div>

      {/* Streak Card */}
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <Flame className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-2xl font-bold text-primary">5 days</p>
          <p className="text-xs text-muted-foreground">Current streak</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-border bg-card p-3 text-center">
          <p className="text-lg font-bold text-foreground">2,450</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">XP</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-3 text-center">
          <p className="text-sm font-bold text-primary">Tech_Burner</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Badge</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-3 text-center">
          <p className="text-lg font-bold text-foreground">#14</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Rank</p>
        </div>
      </div>

      {/* Continue Learning */}
      <div>
        <h2 className="text-base font-bold text-foreground mb-3">Continue Learning</h2>
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {subjects.map((s) => (
            <div
              key={s.name}
              className="min-w-[140px] rounded-2xl border border-border bg-card p-4 flex-shrink-0"
            >
              <p className="text-sm font-bold text-foreground">{s.name}</p>
              <p className="text-[11px] text-muted-foreground mt-1">{s.topic}</p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-border overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${s.progress}%` }}
                />
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">{s.progress}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Challenge */}
      <div className="rounded-2xl border border-primary/30 bg-card p-5">
        <p className="text-sm font-bold text-foreground">⚡ Daily Challenge</p>
        <p className="text-xs text-muted-foreground mt-1">5 questions · 10 mins · 50 XP reward</p>
        <button className="mt-4 w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground active:scale-[0.98] transition-transform">
          Start Now
        </button>
      </div>

      {/* Leaderboard Snapshot */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-foreground">Leaderboard</h2>
          <button className="text-xs text-primary font-medium flex items-center gap-0.5">
            View All <ChevronRight className="h-3 w-3" />
          </button>
        </div>
        <div className="rounded-2xl border border-border bg-card divide-y divide-border">
          {leaderboard.map((u) => (
            <div
              key={u.rank}
              className={`flex items-center gap-3 px-4 py-3 ${u.isUser ? "bg-primary/5" : ""}`}
            >
              <span className="text-sm font-bold text-muted-foreground w-5">#{u.rank}</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-border text-xs font-bold text-foreground">
                {u.initials}
              </div>
              <p className={`text-sm font-medium flex-1 ${u.isUser ? "text-primary" : "text-foreground"}`}>
                {u.name}
              </p>
              <p className="text-xs text-muted-foreground">{u.xp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
