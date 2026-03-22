const Chatbot = (() => {
  const WORKER_URL = "https://wgtik-pribadi.aarifrjf.workers.dev";
  let conversationHistory = [];
  const dom = {
    toggle: document.getElementById("chatbotToggle"),
    window: document.getElementById("chatbotWindow"),
    close: document.getElementById("chatbotClose"),
    messages: document.getElementById("chatbotMessages"),
    input: document.getElementById("chatbotInput"),
    send: document.getElementById("chatbotSend"),
  };
  const appendMessage = (role, text) => {
    const div = document.createElement("div");
    div.className = `chatbot-msg chatbot-msg-${role}`;
    div.textContent = text;
    dom.messages.appendChild(div);
    dom.messages.scrollTop = dom.messages.scrollHeight;
  };
  const setLoading = (loading) => {
    dom.send.disabled = loading;
    dom.input.disabled = loading;
    dom.send.innerHTML = loading
      ? '<i class="ph ph-circle-notch"></i>'
      : '<i class="ph ph-paper-plane-right"></i>';
  };
  const sendMessage = async () => {
    const text = dom.input.value.trim();
    if (!text) return;
    dom.input.value = "";
    appendMessage("user", text);
    conversationHistory.push({ role: "user", content: text });
    setLoading(true);
    try {
      const messages = [
        { role: "system", content: CHATBOT_SYSTEM_PROMPT },
        ...conversationHistory.slice(-2),
      ];
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages }),
      });
      const data = await res.json();
      if (data.error) {
        console.error("Groq error:", data.error);
        appendMessage(
          "assistant",
          "Maaf, ada masalah dengan AI-nya. Coba lagi nanti ya."
        );
        return;
      }
      if (!res.ok) {
        console.error("Worker error, status:", res.status, data);
        appendMessage(
          "assistant",
          "Maaf, terjadi kesalahan server. Coba lagi ya."
        );
        return;
      }
      const reply = data.choices?.[0]?.message?.content;
      if (!reply) {
        console.error("Unexpected response shape:", data);
        appendMessage(
          "assistant",
          "Maaf, respons tidak terbaca. Coba lagi ya."
        );
        return;
      }
      conversationHistory.push({ role: "assistant", content: reply });
      appendMessage("assistant", reply);
    } catch (err) {
      console.error("Chatbot fetch error:", err);
      appendMessage(
        "assistant",
        "Maaf, tidak bisa terhubung. Periksa koneksi internet kamu."
      );
    } finally {
      setLoading(false);
      dom.input.focus();
    }
  };
  dom.toggle.addEventListener("click", () => {
    const isHidden = dom.window.style.display === "none";
    dom.window.style.display = isHidden ? "flex" : "none";
    if (isHidden && dom.messages.children.length === 0) {
      appendMessage(
        "assistant",
        'Halo! Tanya apa saja tentang jurnal \'Aarif. Misalnya: "tanggal 23 Feb ngapain?"'
      );
    }
  });
  dom.close.addEventListener("click", () => {
    dom.window.style.display = "none";
  });
  dom.send.addEventListener("click", sendMessage);
  dom.input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
})();
