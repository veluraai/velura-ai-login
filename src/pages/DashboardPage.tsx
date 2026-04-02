import { Home, MessageSquare, Swords, User } from "lucide-react";
import { useState } from "react";
import HomeScreen from "@/components/dashboard/HomeScreen";
import ChatScreen from "@/components/dashboard/ChatScreen";
import DuelsScreen from "@/components/dashboard/DuelsScreen";
import ProfileScreen from "@/components/dashboard/ProfileScreen";

type Tab = "home" | "chat" | "duels" | "profile";

const tabs: { id: Tab; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "duels", label: "Duels", icon: Swords },
  { id: "profile", label: "Profile", icon: User },
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <div className="relative min-h-screen bg-background flex flex-col max-w-[430px] mx-auto">
      {/* Content area */}
      <div className="flex-1 overflow-y-auto pt-6 pb-20">
        {activeTab === "home" && <HomeScreen />}
        {activeTab === "chat" && <ChatScreen />}
        {activeTab === "duels" && <DuelsScreen />}
        {activeTab === "profile" && <ProfileScreen />}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40">
        <div className="max-w-[430px] mx-auto border-t border-border bg-card/95 backdrop-blur-md">
          <div className="flex items-center justify-around py-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-0.5 px-4 py-1.5 transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span className="text-[10px] font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardPage;
