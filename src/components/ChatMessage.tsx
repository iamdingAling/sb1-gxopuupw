import React from 'react';
import { Message } from '../types/chat';
import { Building2 } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAssistant = message.role === 'assistant';
  
  return (
    <div className={`flex ${isAssistant ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`flex max-w-[80%] ${isAssistant ? 'flex-row' : 'flex-row-reverse'}`}>
        {isAssistant && (
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2">
            <Building2 className="w-5 h-5 text-white" />
          </div>
        )}
        <div
          className={`px-4 py-2 rounded-lg ${
            isAssistant
              ? 'bg-white text-gray-800 shadow-md'
              : 'bg-blue-600 text-white'
          }`}
        >
          <p className="text-sm">{message.content}</p>
          <span className="text-xs opacity-75 block mt-1">
            {new Date(message.timestamp).toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
}