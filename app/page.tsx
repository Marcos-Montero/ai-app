"use client";
import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">Fast AI app</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label className="flex flex-col gap-2">
          <input
            placeholder="What are your thoughts?"
            value={input}
            onChange={handleInputChange}
            className="bg-black outline  text-white p-2 rounded-sm"
          />
        </label>
        <button type="submit" className="bg-white text-black rounded-xl">
          Ask AI
        </button>
      </form>
      <ul>
        {messages.map((m, index) => (
          <li key={index} className="p-2 bg-white/05 rounded-xl">
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </li>
        ))}
      </ul>
    </main>
  );
}
