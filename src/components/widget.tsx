import { useEffect } from "react";
import ChatWidget from "nexus-chat-widget";

export default function ChatWidgetWrapper() {
  useEffect(() => {
    const chatWidget = new ChatWidget({
      title: 'Squad Leader Nexus AI ',
      appToken: "nw_cPfDQfEzLwL3rmX-ZIwKl8NK", // Dev Token
      sessionId: "user-12345", 
      // apiBaseUrl : "https://demo.nexuswave.ai",
      apiBaseUrl : "http://localhost:8082",
      botAvatar: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHVwbDg4MzAwamgya3Nic3BrcGdhaXZqNnNrbWcwODB6MGp0ajNhOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r3wko2AaqERGfkqvrw/giphy.gif"
    });

    // Optional: Send a welcome message
    chatWidget.addBotMessage("Hello! How can I assist you today?");

    // Cleanup function
    return () => {
      chatWidget.destroy();
    };
  }, []);

  return null; 
}
