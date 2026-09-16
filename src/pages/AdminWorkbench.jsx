import { useState } from "react";

function AdminWorkbench() {
  const [message, setMessage] = useState("");
  const [showAttachments, setShowAttachments] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Auto");
  const [showRecentChats, setShowRecentChats] = useState(true);
  const [activeChat, setActiveChat] = useState("");

  const chats = [
    {
      title: "P-204 Inspection",
      time: "2 min ago",
      messages: [
        {
          type: "user",
          text: "Inspect P-204 and check whether the equipment condition matches the maintenance procedure.",
        },
        {
          type: "agent",
          text: "P-204 inspection context is ready. I can compare the equipment findings against the relevant maintenance procedure and available site records.",
        },
      ],
    },
    {
      title: "Safety SOP Summary",
      time: "18 min ago",
      messages: [
        {
          type: "user",
          text: "Summarize the key safety requirements from the applicable SOP.",
        },
        {
          type: "agent",
          text: "The key safety requirements include isolation checks, PPE verification, permit confirmation, and procedure-specific inspection steps.",
        },
      ],
    },
    {
      title: "Maintenance Review",
      time: "1 hr ago",
      messages: [
        {
          type: "user",
          text: "Review the latest maintenance information.",
        },
        {
          type: "agent",
          text: "The latest maintenance information is available for review against historical service records and approved procedures.",
        },
      ],
    },
    {
      title: "Pipeline Guidelines",
      time: "Yesterday",
      messages: [
        {
          type: "user",
          text: "Show the relevant pipeline guidelines.",
        },
        {
          type: "agent",
          text: "Relevant pipeline guidance can be retrieved from the connected knowledge base and compared with the current inspection context.",
        },
      ],
    },
  ];

  const qwenLogo = (
  <img
    src="https://raw.githubusercontent.com/QwenLM/Qwen-MM-Plugins/main/src/capabilities/video-edit/skill/assets/images/qwen-icon.svg"
    alt="Qwen"
    className="model-qwen-logo"
  />
);

const models = [
  { name: "Auto", icon: "⚡" },
  { name: "Qwen-Instruct", icon: qwenLogo },
  { name: "Qwen-Code", icon: qwenLogo },
];

  const currentChat =
    chats.find((chat) => chat.title === activeChat) || chats[0];

  const [messages, setMessages] = useState([]);

  const openChat = (chat) => {
    setActiveChat(chat.title);
    setMessages(chat.messages);
  };

  const startNewChat = () => {
    setActiveChat("New Chat");
    setMessages([]);
    setMessage("");
    setShowAttachments(false);
    setShowModels(false);
  };

  const sendMessage = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    setMessages((current) => [
      ...current,
      {
        type: "user",
        text: trimmedMessage,
      },
      {
        type: "agent",
        text: "The local agent has received your request. This prototype is using mocked responses for the UI demonstration.",
      },
    ]);

    setMessage("");
    setShowAttachments(false);
    setShowModels(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <div
      className={`admin-workbench-page ${
        hasMessages ? "has-messages" : "empty-chat"
      }`}
    >
      <div
        className="admin-workbench-main-area"
        style={{
          gridTemplateColumns: showRecentChats
            ? "minmax(0, 1fr) 320px"
            : "minmax(0, 1fr)",
          gap: 0,
          padding: 0,
        }}
      >
        <div className="admin-workbench-conversation">
          <div className="admin-chat-messages">
            {messages.map((item, index) => (
              <div
                className={`admin-chat-message ${item.type}`}
                key={`${item.type}-${index}`}
              >
                {item.type === "agent" && (
                  <div className="admin-chat-avatar">
                    AI
                  </div>
                )}

                <div className="admin-chat-bubble">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="admin-chat-composer">
            <div className="admin-chat-composer-inner">
              <div className="admin-chat-menu-wrapper">
                <button
                  type="button"
                  className="admin-chat-plus"
                  onClick={() => {
                    setShowAttachments((value) => !value);
                    setShowModels(false);
                  }}
                  aria-label="Attachments"
                >
                  +
                </button>

                {showAttachments && (
                  <div className="admin-chat-dropdown">
                    <button type="button">
                      Upload document
                    </button>

                    <button type="button">
                      Upload image
                    </button>

                    <button type="button">
                      Upload file
                    </button>
                  </div>
                )}
              </div>

              <div className="admin-chat-menu-wrapper">
                <button
                  type="button"
                  className="admin-chat-model-button"
                  onClick={() => {
                    setShowModels((value) => !value);
                    setShowAttachments(false);
                  }}
                >
                  <span className="admin-model-icon">
                    {
                      models.find(
                        (model) => model.name === selectedModel
                      )?.icon
                    }
                  </span>

                  <span>{selectedModel}</span>

                  <span className="admin-model-arrow">
                    ˅
                  </span>
                </button>

                {showModels && (
                  <div className="admin-chat-dropdown model-dropdown">
                    {models.map((model) => (
                      <button
                        type="button"
                        key={model.name}
                        className={
                          selectedModel === model.name
                            ? "selected"
                            : ""
                        }
                        onClick={() => {
                          setSelectedModel(model.name);
                          setShowModels(false);
                        }}
                      >
                        <span className="admin-model-icon">
                          {model.icon}
                        </span>

                        <span>{model.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <textarea
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Message the local chatbot..."
              />

              <button
                type="button"
                className="admin-chat-mic"
                aria-label="Voice input"
              >
                🎙
              </button>

              <button
                type="button"
                className="admin-chat-send"
                onClick={sendMessage}
                aria-label="Send message"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 19 7-7-7-7" />
                  <path d="M5 12h14" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {showRecentChats && (
          <aside className="admin-recent-chats">
            <div className="admin-recent-header">
              <div>
                <h3>Recent Chats</h3>
                <p>Your previous agent conversations.</p>
              </div>

              <button
                type="button"
                className="admin-recent-new"
                onClick={startNewChat}
                aria-label="New chat"
              >
                +
              </button>
            </div>

            <div className="admin-recent-list">
              {chats.map((chat) => (
                <button
                  type="button"
                  key={chat.title}
                  className={`admin-recent-chat ${
                    activeChat === chat.title ? "active" : ""
                  }`}
                  onClick={() => openChat(chat)}
                >
                  <div>
                    <strong>{chat.title}</strong>
                    <span>{chat.time}</span>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        )}

        <button
          type="button"
          className="recent-chats-toggle"
          onClick={() =>
            setShowRecentChats((value) => !value)
          }
          aria-label={
            showRecentChats
              ? "Close recent chats"
              : "Open recent chats"
          }
        >
          {showRecentChats ? "›" : "‹"}
        </button>
      </div>
    </div>
  );
}

export default AdminWorkbench;