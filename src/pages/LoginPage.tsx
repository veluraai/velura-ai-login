import { useState, useEffect } from "react";
import { User, Lock, Eye, EyeOff, Sparkles, Swords, Mic } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Your Personal AI Squad",
    description:
      "Four distinct AI personas — a Tutor for concepts, a Coach for discipline, a Challenger for motivation, and a Mentor for your future.",
  },
  {
    icon: Swords,
    title: "Gamified Learning & Duels",
    description:
      "Turn studying into a sport. Battle friends in real-time logic and coding duels. Earn ranks like Tech_Burner and climb the leaderboard.",
  },
  {
    icon: Mic,
    title: "Voice-Powered Ecosystem",
    description:
      "Hands-free, interactive learning with dynamic AI voice coaching that adapts to your skill level in real time.",
  },
];

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fade-up 0.7s ease-out both; }
        .fade-up-1 { animation-delay: 0.1s; }
        .fade-up-2 { animation-delay: 0.25s; }
        .fade-up-3 { animation-delay: 0.4s; }
        .fade-up-4 { animation-delay: 0.55s; }
      `}</style>

      <div className="flex min-h-screen">
        {/* LEFT — Dark Pitch Side */}
        <div
          className="hidden lg:flex lg:w-1/2 flex-col justify-center px-14 xl:px-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(160deg, hsl(230 30% 12%) 0%, hsl(265 50% 15%) 50%, hsl(258 60% 10%) 100%)",
          }}
        >
          {/* Decorative glow orbs */}
          <div className="absolute top-[15%] left-[10%] w-[350px] h-[350px] rounded-full bg-[hsl(258,80%,55%)] opacity-[0.08] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] rounded-full bg-[hsl(200,80%,50%)] opacity-[0.06] blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-lg">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-10 fade-up">
              <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/10">
                <Sparkles className="w-[18px] h-[18px] text-white" />
              </div>
              <span className="text-lg font-semibold text-white/90 tracking-tight">Velura AI</span>
            </div>

            <h1 className="text-[42px] xl:text-5xl font-bold text-white leading-[1.1] tracking-tight fade-up fade-up-1">
              The future of
              <br />
              competitive learning.
            </h1>
            <p className="mt-5 text-[16px] text-white/50 leading-relaxed max-w-md fade-up fade-up-2">
              An AI-powered ecosystem that makes learning addictive, social, and rewarding.
            </p>

            {/* Feature Cards */}
            <div className="mt-12 space-y-3">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                const isActive = i === activeFeature;
                return (
                  <button
                    key={feature.title}
                    onClick={() => setActiveFeature(i)}
                    className={`fade-up fade-up-${i + 2} w-full text-left p-5 rounded-2xl border backdrop-blur-md transition-all duration-500 ${
                      isActive
                        ? "bg-white/[0.08] border-white/[0.15] shadow-lg shadow-purple-500/5"
                        : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-0.5 flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-500 ${
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-white/[0.06] text-white/40"
                        }`}
                      >
                        <Icon className="w-[18px] h-[18px]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-[15px] font-semibold transition-colors duration-500 ${
                            isActive ? "text-white" : "text-white/50"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            isActive ? "max-h-24 opacity-100 mt-1.5" : "max-h-0 opacity-0 mt-0"
                          }`}
                        >
                          <p className="text-sm text-white/40 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Progress dots */}
            <div className="mt-8 flex gap-2">
              {features.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === activeFeature ? "w-8 bg-white/60" : "w-2 bg-white/15"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Light Login Side */}
        <div className="w-full lg:w-1/2 bg-background flex flex-col items-center justify-center px-6 sm:px-12 lg:px-14 xl:px-20">
          <div className="w-full max-w-[400px]">
            {/* Mobile logo (lg hidden) */}
            <div className="lg:hidden flex items-center gap-2.5 mb-8">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Sparkles className="w-[18px] h-[18px] text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground tracking-tight">Velura AI</span>
            </div>

            {/* Header */}
            <div className="mb-8">
              <h2 className="text-[28px] font-bold text-foreground tracking-tight">Welcome back</h2>
              <p className="text-muted-foreground text-[15px] mt-1.5">
                Sign in to continue your journey.
              </p>
            </div>

            {/* Social Logins */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center gap-3 h-[52px] rounded-2xl border border-border bg-background text-foreground text-sm font-medium shadow-sm hover:shadow-md hover:border-foreground/20 active:scale-[0.99] transition-all">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center gap-3 h-[52px] rounded-2xl border border-border bg-foreground text-background text-sm font-medium shadow-sm hover:opacity-90 active:scale-[0.99] transition-all">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Continue with Apple
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground font-medium">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full h-[52px] bg-background border border-border rounded-2xl pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none shadow-sm transition-all hover:shadow-md focus:border-primary focus:ring-2 focus:ring-primary/10 focus:shadow-md"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-foreground">Password</label>
                <a href="#" className="text-xs text-primary hover:underline font-medium">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-[52px] bg-background border border-border rounded-2xl pl-11 pr-12 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none shadow-sm transition-all hover:shadow-md focus:border-primary focus:ring-2 focus:ring-primary/10 focus:shadow-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Login button */}
            <button className="w-full h-[52px] rounded-2xl bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:brightness-110 active:scale-[0.99] transition-all">
              Log In
            </button>

            {/* Sign up */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              Don't have an account?{" "}
              <a href="#" className="text-primary font-semibold hover:underline">
                Create one
              </a>
            </p>

            {/* Mobile features */}
            <div className="lg:hidden mt-10 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-4">Why Velura AI?</p>
              <div className="space-y-3">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{f.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
