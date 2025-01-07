import React from 'react';
import { Send } from 'lucide-react';

const Messages = () => {
  const messages = [
    {
      sender: 'S.P. Kamal',
      time: '10:00 AM',
      message: 'Hello Doctor, I want to book follow-up consultation for my toothache'
    },
    {
      sender: 'S.P. Kamal',
      time: '10:00 AM',
      message: 'Hello Doctor, I want to book follow-up consultation for my toothache'
    }
  ];

  return (
    <>
      <style>
        {`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .messages-container {
            margin-top: 32px;
          }

          .messages-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 24px;
          }

          .messages-header h1 {
            font-size: 24px;
            color: #1f2937;
            font-weight: 600;
          }

          .message-icon {
            color: #06b6d4;
          }

          .messages-table {
            width: 100%;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }

          .messages-table th {
            background-color: #f3f4f6;
            padding: 12px 16px;
            text-align: left;
            font-weight: 500;
            color: #4b5563;
          }

          .messages-table td {
            padding: 16px;
            border-top: 1px solid #f3f4f6;
          }

          .message-row {
            background-color: #f8fafc;
          }

          .reply-container {
            display: flex;
            gap: 8px;
            align-items: center;
          }

          .reply-input {
            flex: 1;
            padding: 8px 16px;
            border: 1px solid #e5e7eb;
            border-radius: 4px;
            outline: none;
          }

          .reply-input:focus {
            border-color: #06b6d4;
          }

          .reply-button {
            background: none;
            border: none;
            color: #06b6d4;
            cursor: pointer;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .reply-button:hover {
            color: #0891b2;
          }
        `}
      </style>

      <div className="container">
        <div className="messages-container">
          <div className="messages-header">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              className="message-icon"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <h1>Messages</h1>
          </div>

          <table className="messages-table">
            <thead>
              <tr>
                <th>Sender Name</th>
                <th>Time</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message, index) => (
                <tr key={index} className="message-row">
                  <td>{message.sender}</td>
                  <td>{message.time}</td>
                  <td>{message.message}</td>
                  <td>
                    <div className="reply-container">
                      <input
                        type="text"
                        placeholder="Reply..."
                        className="reply-input"
                      />
                      <button className="reply-button">
                        <Send size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Messages;