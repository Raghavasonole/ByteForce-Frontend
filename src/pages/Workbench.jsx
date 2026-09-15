import { useState } from "react";

function Workbench() {
  const [message, setMessage] = useState("");
  const [showAttachments, setShowAttachments] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Model");
  const [activeChat, setActiveChat] = useState("P-204 Inspection");

  const chats = [
    {
      name: "P-204 Inspection",
      time: "2 min ago",
      messages: [
        {
          role: "agent",
          text:
            "Hello. I am the local industrial AI assistant. How can I help with your inspection task?",
        },
      ],
    },
    {
      name: "Safety SOP Summary",
      time: "18 min ago",
      messages: [
        {
          role: "user",
          text: "Summarize the Safety Inspection SOP.",
        },
        {
          role: "agent",
          text:
            "The Safety Inspection SOP covers inspection preparation, equipment checks, safety controls and reporting requirements.",
        },
      ],
    },
    {
      name: "Maintenance Review",
      time: "1 hr ago",
      messages: [
        {
          role: "user",
          text: "Review the maintenance history for P-204.",
        },
        {
          role: "agent",
          text:
            "The available maintenance records show recurring inspection and servicing activity for P-204.",
        },
      ],
    },
    {
      name: "Pipeline Guidelines",
      time: "Yesterday",
      messages: [
        {
          role: "user",
          text: "Find the pipeline inspection guidelines.",
        },
        {
          role: "agent",
          text:
            "Relevant pipeline inspection guidelines are available in the internal knowledge base.",
        },
      ],
    },
  ];

  const selectedChat =
    chats.find((chat) => chat.name === activeChat) || chats[0];

  const [messages, setMessages] = useState(selectedChat.messages);

  const openChat = (chat) => {
    setActiveChat(chat.name);
    setMessages(chat.messages);
  };

  const sendMessage = () => {
    if (!message.trim()) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        role: "user",
        text: message,
      },
      {
        role: "agent",
        text:
          "I received your request. The local workflow would now analyze the relevant workspace sources and return an evidence-backed response.",
      },
    ]);

    setMessage("");
    setShowAttachments(false);
    setShowModels(false);
  };

  return (
    <div className="workbench-page admin-workbench-page">
      <div className="page-header admin-workbench-header">
        <div>
          <h1>Workbench</h1>

          <p>
            Chat with the local industrial AI assistant using
            confidential workspace data.
          </p>
        </div>
      </div>

      <div className="admin-workbench-content">
        <div className="admin-chat-panel">
          <div className="admin-chat-messages">
            {messages.map((item, index) => (
              <div
                className={`admin-chat-message ${item.role}`}
                key={`${activeChat}-${index}`}
              >
                <div className="admin-chat-avatar">
                  {item.role === "agent" ? "AI" : "U"}
                </div>

                <div className="admin-chat-bubble">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="admin-chat-composer">
            <div className="admin-chat-bottom">

              {/* Plus */}
              <div className="admin-chat-menu">
                <button
                  type="button"
                  className="admin-chat-tool-button"
                  onClick={() => {
                    setShowAttachments(!showAttachments);
                    setShowModels(false);
                  }}
                >
                  +
                </button>

                {showAttachments && (
                  <div className="admin-chat-menu-dropdown">
                    <button
                      type="button"
                      onClick={() =>
                        alert("Image upload - demo only")
                      }
                    >
                      Image Upload
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        alert("File upload - demo only")
                      }
                    >
                      File Upload
                    </button>
                  </div>
                )}
              </div>

              {/* Model */}
              <div className="admin-chat-menu">
                <button
                  type="button"
                  className="admin-chat-model-button"
                  onClick={() => {
                    setShowModels(!showModels);
                    setShowAttachments(false);
                  }}
                >
                  {selectedModel}
                </button>

                {showModels && (
                  <div className="admin-chat-menu-dropdown model-menu">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedModel("Qwen-Instruct");
                        setShowModels(false);
                      }}
                    >
                      Qwen-Instruct
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedModel("Qwen-Code");
                        setShowModels(false);
                      }}
                    >
                      Qwen-Code
                    </button>
                  </div>
                )}
              </div>

              {/* Message */}
              <textarea
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                placeholder="Message the local agent..."
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" &&
                    !event.shiftKey
                  ) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
              />

              {/* Send */}
              <button
                type="button"
                className="admin-chat-send"
                onClick={sendMessage}
              >
                ↑
              </button>
            </div>
          </div>
        </div>

        <aside className="admin-recent-chats">
          <div className="recent-chats-header">
            <div>
              <h2>Recent Chats</h2>
              <p>Your previous agent conversations.</p>
            </div>

            <button type="button">＋</button>
          </div>

          <div className="recent-chats-list">
            {chats.map((chat) => (
              <button
                type="button"
                key={chat.name}
                className={`recent-chat-item ${
                  activeChat === chat.name ? "active" : ""
                }`}
                onClick={() => openChat(chat)}
              >
                <div>
                  <strong>{chat.name}</strong>
                  <span>{chat.time}</span>
                </div>

                <span className="recent-chat-arrow">→</span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Workbench;