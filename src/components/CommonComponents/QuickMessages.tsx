import React from 'react';
import { QuickMessageSvg } from '../SvgContainer/SVgContainer';

interface QuickMessagesProps {
  title: string;
  buttonText: string;
  messages: { name: string; time: string; message: string; avatarUrl: string }[];
}

const QuickMessages: React.FC<QuickMessagesProps> = ({ title, buttonText, messages }) => {
  return (
    <div className="bg-white border border-alt-border rounded-xl p-3 xl:p-8">
      <div className="flex justify-between items-center mb-4 bg-[var(--color-primary-blue)] text-[var(--color-secondary-white)] p-4 rounded-lg">
        <h3 className="text-[16px] font-semibold leading-[150%]">{title}</h3>
        <QuickMessageSvg />
      </div>
      <div className="border p-6 rounded-md border-alt-border mb-5">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 p-3 rounded-md ${
              i === 0 ? "bg-blue-50" : "hover:bg-gray-50"
            }`}
          >
            <img
              src={message.avatarUrl}
              className="w-12 h-12 rounded-full"
              alt="avatar"
            />
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2 font-medium">
                {message.name}
                <span className="text-[10px] text-gray-500">
                  {message.time}
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-gray)]">
                {message.message}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="mt-2 w-full border cursor-pointer hover:bg-[var(--color-primary-blue)] hover:text-white duration-700 border-[var(--color-alt-border)] rounded-lg py-2 text-roayl-blue text-[18px] font-semibold">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default QuickMessages;
