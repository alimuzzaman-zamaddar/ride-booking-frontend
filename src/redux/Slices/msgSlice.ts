import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";

type userRoleSchema = "student" | "tutor";

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
  receiverId: number;
  isSeen: boolean;
  imgurl?: string;
}

interface MsgState {
  users: User[];
  messages: Message[];
  userRole: userRoleSchema;
}

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/40.jpg",
  "https://randomuser.me/api/portraits/women/72.jpg",
  "https://randomuser.me/api/portraits/men/13.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
  "https://randomuser.me/api/portraits/men/78.jpg",
  "https://randomuser.me/api/portraits/women/21.jpg",
  "https://randomuser.me/api/portraits/men/27.jpg",
  "https://randomuser.me/api/portraits/women/15.jpg",
];

// Sample message templates for variety
const messageTemplates = [
  "Hey, how's it going?",
  "Can you send me the details?",
  "Looks great! Thanks for sharing.",
  "Are we still meeting later?",
  "Check out this cool image!",
  "I'll get back to you soon.",
  "Sounds good, let me know the time.",
  "Did you see the latest update?",
  "Can you review this document?",
  "Haha, that's hilarious!",
  "Let's schedule a call.",
  "I'm almost done with the task.",
  "Can you confirm the address?",
  "Great job on the project!",
  "I'll be there in 10 minutes.",
  "Do you have any updates?",
  "This is awesome, thanks!",
  "Can we discuss this now?",
  "Just sent you the file.",
  "Looking forward to your feedback.",
];

// Sample image URLs for messages with images
const imageUrls = [
  "https://i.imgflip.com/4/4t0m5.jpg",
  "https://randomuser.me/api/portraits/men/50.jpg",
  "https://randomuser.me/api/portraits/women/30.jpg",
  "https://picsum.photos/200/300",
  "https://picsum.photos/300/200",
];

// Helper function to generate messages for a user pair
const generateMessagesForUser = (
  userId: number,
  currentUserId: number,
  profilePic: string,
  receiverProfilePic: string,
  startId: number,
  messageCount: number
): { messages: Message[]; lastMessage: Message; unreadCount: number } => {
  const messages: Message[] = [];
  let currentId = startId;
  let unreadCount = 0;

  // Start from a few days ago to create a conversation history
  let currentTime = moment().subtract(3, "days");

  for (let i = 0; i < messageCount; i++) {
    const isSender = i % 2 === 0; // Alternate between Sender and Receiver
    const senderId = isSender ? currentUserId : userId;
    const receiverId = isSender ? userId : currentUserId;
    const isImageMessage = Math.random() < 0.2; // 20% chance of image message
    const messageText = isImageMessage
      ? "Check out this image!"
      : messageTemplates[Math.floor(Math.random() * messageTemplates.length)];
    const imgurl = isImageMessage
      ? imageUrls[Math.floor(Math.random() * imageUrls.length)]
      : undefined;

    const message: Message = {
      id: currentId++,
      sender: isSender ? "Sender" : "Receiver",
      message: messageText,
      time: currentTime.format("h:mm A"),
      profilePic: isSender ? receiverProfilePic : profilePic,
      userId: senderId,
      receiverId: receiverId,
      isSeen: isSender ? true : Math.random() < 0.5, // Sender messages are seen, Receiver messages have 50% chance of being unseen
      imgurl,
    };

    if (!isSender && !message.isSeen) {
      unreadCount++;
    }

    messages.push(message);
    currentTime = currentTime.add(5 + Math.random() * 10, "minutes"); // Space messages 5–15 minutes apart
  }

  // Return the generated messages, the last message, and the unread count
  return {
    messages,
    lastMessage: messages[messages.length - 1],
    unreadCount,
  };
};

// Generate users and messages
const generateUsersAndMessages = () => {
  const currentUserId = 2; // Assuming Jakob Saris (id: 2) is the current user
  const users: User[] = [
    {
      id: 1,
      name: "Eten Hunt",
      role: "Agents",
      message: "", // Will be updated
      isMe: false,
      profilePic: avatars[0],
      isOnline: Math.random() > 0.5,
      msgSendTime: "",
      msgSendDate: "",
      unreadCount: 0,
    },
    {
      id: 2,
      name: "Jakob Saris",
      role: "Property manager",
      message: "",
      isMe: true,
      profilePic: avatars[1],
      isOnline: true,
      msgSendTime: "",
      msgSendDate: "",
      unreadCount: 0,
    },
    {
      id: 3,
      name: "Jeremy Zucker",
      role: "Property manager",
      message: "",
      isMe: false,
      lastSeen: Math.floor(Math.random() * 24),
      profilePic: avatars[2],
      isOnline: Math.random() > 0.5,
      msgSendTime: "",
      msgSendDate: "",
      unreadCount: 0,
    },
    {
      id: 4,
      name: "Nadia Lauren",
      role: "Agents",
      message: "",
      isMe: false,
      lastSeen: Math.floor(Math.random() * 24),
      profilePic: avatars[3],
      isOnline: Math.random() > 0.5,
      msgSendTime: "",
      msgSendDate: "",
      unreadCount: 0,
      isUnread: true,
    },
    {
      id: 5,
      name: "Sophia Miles",
      role: "Tenant",
      message: "",
      isMe: false,
      profilePic: avatars[4],
      isOnline: Math.random() > 0.5,
      msgSendTime: "",
      msgSendDate: "",
      unreadCount: 0,
    },
    {
      id: 6,
      name: "Liam Walker",
      role: "Agent",
      message: "",
      isMe: false,
      profilePic: avatars[5],
      isOnline: Math.random() > 0.5,
      msgSendTime: "",
      msgSendDate: "",
      unreadCount: 0,
    },
    {
      id: 7,
      name: "Ava Taylor",
      role: "Tenant",
      message: "",
      isMe: false,
      profilePic: avatars[6],
      isOnline: Math.random() > 0.5,
      msgSendTime: "",
      msgSendDate: "",
      unreadCount: 0,
    },
    {
      id: 8,
      name: "Noah Brown",
      role: "Property Manager",
      message: "",
      isMe: false,
      profilePic: avatars[7],
      isOnline: Math.random() > 0.5,
      msgSendTime: "",
      msgSendDate: "",
      unreadCount: 0,
    },
  ];

  const messages: Message[] = [];
  let messageIdCounter = 1;



  
  // Generate 30 messages for each user (except the current user)
  users.forEach(user => {
    if (user.id !== currentUserId) {
      const {
        messages: userMessages,
        lastMessage,
        unreadCount,
      } = generateMessagesForUser(
        user.id,
        currentUserId,
        user.profilePic,
        users.find(u => u.id === currentUserId)!.profilePic,
        messageIdCounter,
        30 // Generate 30 messages per user
      );
      messages.push(...userMessages);
      messageIdCounter += userMessages.length;

      // Update user with the last message details
      user.message = lastMessage.imgurl ? "Sent an image" : lastMessage.message;
      user.msgSendTime = lastMessage.time;
      user.msgSendDate = moment(lastMessage.time, "h:mm A").format(
        "MMM D, YYYY"
      );
      user.unreadCount = unreadCount;
      user.isUnread = unreadCount > 0;
    }
  });

  return { users, messages };
};

// Initialize users and messages
const { users, messages } = generateUsersAndMessages();

// Validate role from localStorage or default to 'student'
const storedRole = localStorage.getItem("role");
const userRoles: userRoleSchema =
  storedRole === "student" || storedRole === "tutor" ? storedRole : "student";

const initialState: MsgState = {
  users,
  messages,
  userRole: userRoles,
};

const msgSlice = createSlice({
  name: "msgSlice",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);

      // Update the corresponding user's message, time, date, and unread count
      const { userId, receiverId, message, time, imgurl, isSeen } =
        action.payload;
      const user = state.users.find(
        u => u.id === (u.isMe ? receiverId : userId)
      );
      if (user) {
        user.message = imgurl ? "Sent an image" : message;
        user.msgSendTime = time;
        user.msgSendDate = moment(time, "h:mm A").format("MMM D, YYYY");
        if (!isSeen && !user.isMe) {
          user.unreadCount += 1;
          user.isUnread = true;
        }
      }
    },

    addRole: (state, action: PayloadAction<userRoleSchema>) => {
      state.userRole = action.payload;
      localStorage.setItem("role", action.payload);
    },
  },
});

export const { addMessage, addRole } = msgSlice.actions;
export default msgSlice.reducer;
