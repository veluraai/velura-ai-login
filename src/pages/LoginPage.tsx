import { useState, useEffect } from "react";
import { User, Lock, Eye, EyeOff, Sparkles, Swords, Mic } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Your Personal AI Squad",
    description:
      "Learn with four distinct AI personas: a Tutor for concepts, a Coach for discipline, a Challenger for motivation, and a Mentor for your future.",
  },
  {
    icon: Swords,
    title: "Gamified Learning & Duels",
    description:
      "Turn studying into a sport. Battle friends in real-time logic and coding duels, climb the leaderboard.",
  },
  {
    icon: Mic,
    title: "Voice-Powered Ecosystem",
    description:
      "Experience hands-free, interactive learning with dynamic, personalized AI voice coaching that adapts to your skill level.",
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
    <div className="min-h-screen bg-background flex">
      {/* Left — Feature Pitch (hidden on mobile, shown on lg+) */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-16 xl:px-24 relative overflow-hidden">
        {/* Subtle gradient orb */}
        <div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[100px] pointer-events-none"
          style={{ background: "hsl(var(--primary))" }}
        />

        <div className="relative z-10 max-w-lg">
          <h1 className="text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
            The future of
            <br />
            <span className="text-primary">competitive learning.</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            An AI-powered ecosystem that combines tutoring, gamification, and social learning into one seamless experience.
          </p>

          {/* Feature cards */}
          <div className="mt-12 space-y-4">
            {features.map((feature, i) => {
              const isActive = i === activeFeature;
              const Icon = feature.icon;
              return (
                <button
                  key={feature.title}
                  onClick={() => setActiveFeature(i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? "bg-primary/[0.04] border-primary/20 shadow-sm"
                      : "bg-transparent border-transparent hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`mt-0.5 flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-500 ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-[18px] h-[18px]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-[15px] font-semibold transition-colors duration-500 ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`mt-1 text-sm leading-relaxed transition-all duration-500 ${
                          isActive
                            ? "text-muted-foreground opacity-100 max-h-20"
                            : "text-muted-foreground/60 opacity-0 max-h-0"
                        } overflow-hidden`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Progress dots */}
          <div className="mt-6 flex gap-2">
            {features.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === activeFeature ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right — Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 sm:px-12 lg:px-16 xl:px-24 relative">
        {/* Subtle top-right orb */}
        <div
          className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full opacity-[0.05] blur-[80px] pointer-events-none"
          style={{ background: "hsl(var(--primary))" }}
        />

        <div className="w-full max-w-[400px] relative z-10">
          {/* Logo */}
          <div className="mb-10">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Sparkles className="w-[18px] h-[18px] text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground tracking-tight">Velura AI</span>
            </div>
            <h2 className="text-[28px] font-semibold text-foreground tracking-tight">Welcome back</h2>
            <p className="text-muted-foreground text-[15px] mt-1">
              The future of competitive learning.
            </p>
          </div>

          {/* Social Logins */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 h-12 rounded-xl border border-border bg-background text-foreground text-sm font-medium hover:bg-muted/50 active:scale-[0.99] transition-all">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 h-12 rounded-xl border border-border bg-background text-foreground text-sm font-medium hover:bg-muted/50 active:scale-[0.99] transition-all">
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
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full h-12 bg-muted/50 border border-border rounded-xl pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-foreground">Password</label>
              <a href="#" className="text-xs text-primary hover:underline font-medium">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full h-12 bg-muted/50 border border-border rounded-xl pl-10 pr-11 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Login button */}
          <button className="w-full h-12 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 active:scale-[0.99] transition-all">
            Log In
          </button>

          {/* Sign up */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Create one
            </a>
          </p>
        </div>

        {/* Mobile feature pills (visible on mobile only) */}
        <div className="lg:hidden w-full max-w-[400px] mt-10 relative z-10">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted/50 border border-border"
                >
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">
                    {feature.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
