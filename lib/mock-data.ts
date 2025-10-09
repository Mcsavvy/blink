export const mockUser = {
  name: "Alex Rivera",
  email: "alex@example.com",
  avatar: "/demo-user.png",
  balance: 0.0234,
  balanceUSD: 1456.78,
};

export const mockTransactions = [
  {
    id: "1",
    type: "received",
    amount: 0.0015,
    amountUSD: 93.45,
    from: "Sarah Chen",
    to: "You",
    date: "2025-01-06T14:30:00Z",
    status: "completed",
    message: "Coffee money ☕",
  },
  {
    id: "2",
    type: "sent",
    amount: 0.0008,
    amountUSD: 49.76,
    from: "You",
    to: "Mike Johnson",
    date: "2025-01-05T09:15:00Z",
    status: "completed",
    message: "Lunch split",
  },
  {
    id: "3",
    type: "received",
    amount: 0.0025,
    amountUSD: 155.5,
    from: "Emma Davis",
    to: "You",
    date: "2025-01-04T16:45:00Z",
    status: "completed",
    message: "Birthday gift 🎉",
  },
  {
    id: "4",
    type: "sent",
    amount: 0.0012,
    amountUSD: 74.64,
    from: "You",
    to: "James Wilson",
    date: "2025-01-03T11:20:00Z",
    status: "completed",
    message: "Movie tickets",
  },
  {
    id: "5",
    type: "received",
    amount: 0.005,
    amountUSD: 311.0,
    from: "Lisa Anderson",
    to: "You",
    date: "2025-01-02T13:00:00Z",
    status: "completed",
    message: "Freelance work payment",
  },
];

export const mockGifts = [
  {
    id: "1",
    amount: 0.001,
    amountUSD: 62.2,
    from: "Mom",
    message: "Happy New Year! 🎊",
    date: "2025-01-01T00:00:00Z",
    status: "claimed",
  },
  {
    id: "2",
    amount: 0.0005,
    amountUSD: 31.1,
    to: "Best Friend",
    message: "Thanks for everything! 💙",
    date: "2024-12-25T10:30:00Z",
    status: "sent",
  },
  {
    id: "3",
    amount: 0.002,
    amountUSD: 124.4,
    from: "Uncle Bob",
    message: "Congrats on the new job! 🎓",
    date: "2024-12-20T14:15:00Z",
    status: "claimed",
  },
  {
    id: "4",
    amount: 0.0015,
    amountUSD: 93.3,
    to: "Sister",
    message: "Happy Birthday! 🎂",
    date: "2024-12-15T09:00:00Z",
    status: "sent",
  },
] as {
  id: string;
  amount: number;
  amountUSD: number;
  from?: string;
  to?: string;
  message: string;
  date: string;
  status: "claimed" | "sent" | "pending";
}[];
