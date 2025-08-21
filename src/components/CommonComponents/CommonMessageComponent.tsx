import {
  Emoji,
  GalleryIcon,
  SearchIcon,
  SendIcon,
  Threedot,
} from "../SvgContainer/SVgContainer";
import Heading from "../Tags/Heading/Heading";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "../Tags/Image/Image";
import Paragraph from "../Tags/Paragraph/Paragraph";
import { useEffect, useRef, useState } from "react";
import Button from "../Tags/Button/Button";
import EmojiPicker from "emoji-picker-react";
import ScrollToBottom from "react-scroll-to-bottom";
import { addMessage } from "../../redux/Slices/msgSlice";
import moment from "moment";

interface User {
  id: number;
  name: string;
  role: string;
  message: string;
  isMe: boolean;
  profilePic: string;
  isOnline: boolean;
  msgSendTime: string;
  msgSendDate: string;
  unreadCount: number;
  lastSeen?: number;
  isUnread?: boolean;
}

interface Message {
  id: number;
  sender: "Sender" | "Receiver";
  message: string;
  time: string;
  profilePic: string;
  userId: number;
  receiverId?: number;
  isSeen: boolean;
  imgurl?: string;
  audio?: string;
  date?: string;
}

interface GroupedMessages {
  rawDate: Date;
  date: string;
  messages: Message[];
}

const CommonMessageComponent = () => {
  const users = useSelector((state: RootState) => state.msgReducer.users);
  const messages = useSelector((state: RootState) => state.msgReducer.messages);

  const [searchedUser, setSearchedUser] = useState<string | null>(null);
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const emojiRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const currentUserId = 2;

  const useOutsideClick = <T extends HTMLElement>(
    ref: React.RefObject<T | null>,
    callback: () => void
  ) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, callback]);
  };

  useOutsideClick(emojiRef, () => setShowPicker(false));
  useOutsideClick(modalRef, () => setShowModal(false));

  const sanitizedSearchUser = searchedUser?.trim().toLowerCase();

  const filteredSearchData = users.filter(user => {
    if (!sanitizedSearchUser) {
      return true;
    }
    return user?.name?.toLowerCase().includes(sanitizedSearchUser);
  });

  const filteredMessages = activeUser
    ? messages.filter(
        msg =>
          (msg.userId === currentUserId && msg.receiverId === activeUser.id) ||
          (msg.userId === activeUser.id && msg.receiverId === currentUserId)
      )
    : [];

  const groupMessagesByDate = (messages: Message[]): GroupedMessages[] => {
    const groups: Record<string, GroupedMessages> = {};
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const formatDisplayDate = (msgDate: Date): string => {
      const dateStr = msgDate.toLocaleDateString();
      const todayStr = today.toLocaleDateString();
      const yesterdayStr = yesterday.toLocaleDateString();

      if (dateStr === todayStr) return "Today";
      if (dateStr === yesterdayStr) return "Yesterday";

      return msgDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      });
    };

    messages.forEach(msg => {
      const msgDate = msg.date ? new Date(msg.date) : new Date();
      const dateStr = msgDate.toDateString();

      const displayDate = formatDisplayDate(msgDate);

      if (!groups[dateStr]) {
        groups[dateStr] = {
          rawDate: msgDate,
          date: displayDate,
          messages: [],
        };
      }

      groups[dateStr].messages.push(msg);
    });

    return Object.values(groups).sort(
      (a, b) => a.rawDate.getTime() - b.rawDate.getTime()
    );
  };

  const handleEmojiClick = (emojiData: { emoji: string }) => {
    setInputValue(prev => prev + emojiData.emoji);
  };

  const dispatch = useDispatch();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setSelectedImage(base64String);
        dispatch(
          addMessage({
            id: Date.now(),
            sender: "Sender",
            message: "",
            time: moment().format("h:mm A"),
            profilePic: activeUser?.profilePic ?? "/",
            userId: currentUserId,
            receiverId: activeUser?.id || 1,
            isSeen: false,
            imgurl: base64String,
          })
        );
        setSelectedImage(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMessageSend = () => {
    if (!inputValue && !selectedImage) return;
    dispatch(
      addMessage({
        id: Date.now(),
        sender: "Sender",
        message: inputValue,
        time: moment().format("h:mm A"),
        profilePic: activeUser?.profilePic ?? "/",
        userId: currentUserId,
        receiverId: activeUser?.id || 1,
        isSeen: false,
        imgurl: selectedImage || undefined,
      })
    );
    setInputValue("");
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleGalleryClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleBlockUser = () => {
    console.log("Block User clicked");
    setShowModal(false);
    // Implement block user logic here
  };

  const handleReportUser = () => {
    console.log("Report User clicked");
    setShowModal(false);
    // Implement report user logic here
  };

  const handleViewProfile = () => {
    console.log("View Profile clicked");
    setShowModal(false);
    // Implement view profile logic here
  };

  return (
    <section className="h-auto overflow-y-hidden max-h-[78vh] w-auto container">
      <div className="h-[77vh] w-auto overflow-y-hidden bg-white rounded-[12px] border-[1px] leading-[140%] border-solid border-secondry-gray flex flex-row">
        <div className="flex flex-col py-4 w-[522px] border-r border-solid border-secondary-white ">
          <div className="flex flex-col gap-y-2 pl-4 pr-2.5">
            <Heading
              Txt={`Messages`}
              className="text-xl font-bold text-roayl-blue"
            />
            <div className="relative h-auto mb-4.5 bg-off-white py-3 rounded-[6px] w-full">
              <input
                onChange={e => {
                  setSearchedUser(e.target.value);
                }}
                type="text"
                placeholder="Search contacts"
                className="w-full px-10 outline-none"
              />
              <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                <SearchIcon />
              </div>
            </div>
          </div>
          <hr className="border-t border-solid border-alt-border" />
          <div className="flex flex-col overflow-y-scroll  max-h-[65vh] ">
            {filteredSearchData.map((item, idx) => (
              <div
                onClick={() => setActiveUser(item)}
                key={idx}
                className={`flex flex-col w-full cursor-pointer ${
                  item.id === activeUser?.id ? "bg-off-white" : ""
                }`}
              >
                <div className="px-4 py-5 flex flex-row gap-x-3 items-center">
                  <div className="relative min-h-12  min-w-12 ">
                    <Image
                      Src={item.profilePic}
                      Alt="not found"
                      className="!h-12 !w-12 z-0 rounded-full"
                    />
                    <div
                      className={`w-3 h-3 rounded-full z-50 absolute bottom-0 mb-1 mr-[-4px] right-0 ${
                        item?.isOnline ? "bg-green-500" : "bg-red-500"
                      } `}
                    />
                  </div>

                  <div className="flex flex-col relative w-full gap-y-2">
                    <div className="flex flex-row w-full justify-between">
                      <Heading
                        Txt={item.name}
                        className="text-base font-bold text-roayl-blue"
                      />
                      <Paragraph
                        Txt={`${
                          item.lastSeen
                            ? item.lastSeen
                            : (Math.random() * 24).toFixed(0)
                        } hours ago`}
                        className="text-sm font-normal text-primary-gray"
                      />
                    </div>
                    <div className="flex flex-row w-full justify-between">
                      <Paragraph
                        Txt={item.message}
                        className="text-sm font-normal text-primary-gray"
                      />
                      {(item.isUnread || item.unreadCount > 0) && (
                        <div className="bg-primary-blue px-3 py-1 rounded-[12px] text-white text-sm font-normal">
                          {item.unreadCount}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <hr className="border-t border-solid border-alt-border w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full relative">
          <div className="py-4 px-3.5 relative w-full items-center flex flex-row justify-between">
            <div className="flex flex-row items-center gap-x-4">
              <div className="relative">
                <Image
                  Src={activeUser?.profilePic ?? "/"}
                  Alt="not found"
                  className="w-10 h-10 rounded-full"
                />
                <div
                  className={`w-3 h-3 rounded-full z-50 absolute bottom-0 mb-1 mr-[-4px] right-0 ${
                    activeUser?.isOnline ? "bg-green-500" : "bg-red-500"
                  } `}
                />
              </div>
              <div className="flex gap-y-1 flex-col">
                <Heading
                  Txt={activeUser?.name ?? "Select a user"}
                  className="text-base font-bold text-roayl-blue"
                />
                <Paragraph
                  Txt={activeUser?.isOnline ? "Online" : "Offline"}
                  className="text-xs font-normal text-primary-gray"
                />
              </div>
            </div>
            <div className="relative">
              <div
                className="cursor-pointer"
                onClick={() => setShowModal(!showModal)}
              >
                <Threedot />
              </div>
              {showModal && (
                <div
                  ref={modalRef}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl z-50 border border-gray-200 overflow-hidden"
                >
                  <div className="flex flex-col divide-y divide-gray-100">
                    <button
                      onClick={handleBlockUser}
                      className="px-4 cursor-pointer  py-3 text-sm text-red-600 hover:bg-red-50 text-left transition-colors"
                    >
                      🚫 Block User
                    </button>
                    <button
                      onClick={handleReportUser}
                      className="px-4 py-3 text-sm cursor-pointer  text-yellow-600 hover:bg-yellow-50 text-left transition-colors"
                    >
                      ⚠️ Report User
                    </button>
                    <button
                      onClick={handleViewProfile}
                      className="px-4 py-3 text-sm cursor-pointer  text-blue-600 hover:bg-blue-50 text-left transition-colors"
                    >
                      👤 View Profile
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <hr className="border-t border-solid border-alt-border w-full" />
          <div className="w-full relative h-[60vh] bg-gray-white">
            <ScrollToBottom className="w-full h-full overflow-y-auto">
              <div className="gap-2 xl:gap-5 flex flex-col sm:p-6 p-3 w-full">
                {groupMessagesByDate(filteredMessages).map(group => (
                  <div key={group.date} className="flex flex-col gap-4">
                    <div className="flex justify-center">
                      <div className="bg-primary-blue text-white px-3 py-1 rounded-full text-sm">
                        {group.date}
                      </div>
                    </div>
                    {group.messages.map(msg => (
                      <div
                        key={msg.id}
                        className={`flex flex-col gap-2 ${
                          msg.userId === currentUserId
                            ? "items-end"
                            : "items-start"
                        }`}
                      >
                        <div
                          className={`flex gap-2 items-start ${
                            msg.userId === currentUserId
                              ? "flex-row-reverse"
                              : "flex-row"
                          }`}
                        >
                          <img
                            src={msg.profilePic}
                            alt={
                              msg.userId === currentUserId
                                ? "Sender"
                                : "Receiver"
                            }
                            className={`h-8 w-8 rounded-full ${
                              msg.userId === currentUserId ? "ml-2" : "mr-2"
                            }`}
                          />
                          <div
                            className={`flex flex-col gap-y-1 ${
                              msg.userId === currentUserId
                                ? "items-end"
                                : "items-start"
                            }`}
                          >
                            <div
                              className={`${
                                msg.imgurl || msg.audio
                                  ? ""
                                  : msg.userId === currentUserId
                                  ? "bg-secondary-blue text-white"
                                  : "bg-primary-blue text-white"
                              } rounded-[16px] p-3 max-w-[303px]`}
                            >
                              {msg.imgurl ? (
                                <img
                                  src={msg.imgurl}
                                  alt="Sent image"
                                  className="rounded-lg max-w-[200px]"
                                />
                              ) : msg.audio ? (
                                <audio
                                  className="text-white"
                                  src={msg.audio}
                                  controls
                                />
                              ) : (
                                <span className="text-sm xl:text-base">
                                  {msg.message}
                                </span>
                              )}
                            </div>
                            <div className="flex flex-row gap-x-2 p-2 items-center">
                              <span className="text-sm text-black font-normal">
                                {msg.time}
                              </span>
                              {msg.userId === currentUserId && (
                                <span className="text-sm text-black capitalize font-bold">
                                  {msg.isSeen ? "Seen" : "Sent"}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </ScrollToBottom>
            {showPicker && (
              <div
                ref={emojiRef}
                className="absolute top-0 left-0 ml-5 mt-5 z-50"
              >
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>
          <div className="w-full h-auto">
            <hr className="border-t border-solid border-secondary-white" />
            <div className="h-auto w-full p-4 items-center flex flex-row gap-x-3">
              <div className="flex flex-row gap-x-4 items-center">
                <div className="cursor-pointer relative">
                  <div onClick={handleGalleryClick}>
                    <GalleryIcon />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setShowPicker(!showPicker);
                  }}
                >
                  <Emoji />
                </div>
              </div>
              <input
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleMessageSend();
                  }
                }}
                value={inputValue}
                onChange={e => {
                  setInputValue(e.target.value);
                }}
                type="text"
                placeholder="Type a message"
                className="w-full text-base px-5 outline-none h-auto py-3 bg-off-white rounded-[6px]"
              />
              <Button
                onClick={handleMessageSend}
                className="h-auto cursor-pointer w-auto p-3 bg-primary-blue !rounded-full"
                Txt={<SendIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonMessageComponent;
