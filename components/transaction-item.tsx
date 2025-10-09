import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface TransactionItemProps {
  type: "sent" | "received";
  amount: number;
  amountUSD: number;
  from: string;
  to: string;
  date: string;
  message?: string;
}

export function TransactionItem({
  type,
  amount,
  amountUSD,
  from,
  to,
  date,
  message,
}: TransactionItemProps) {
  const isSent = type === "sent";
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
      <div
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center",
          isSent ? "bg-destructive/10" : "bg-primary/10",
        )}
      >
        {isSent ? (
          <ArrowUpRight className="h-5 w-5 text-destructive" />
        ) : (
          <ArrowDownLeft className="h-5 w-5 text-primary" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold truncate">
          {isSent ? `To ${to}` : `From ${from}`}
        </p>
        <p className="text-sm text-muted-foreground">{formattedDate}</p>
        {message && (
          <p className="text-sm text-muted-foreground italic mt-1">{message}</p>
        )}
      </div>
      <div className="text-right">
        <p
          className={cn(
            "font-bold",
            isSent ? "text-destructive" : "text-primary",
          )}
        >
          {isSent ? "-" : "+"}
          {amount.toFixed(4)} BTC
        </p>
        <p className="text-sm text-muted-foreground">${amountUSD.toFixed(2)}</p>
      </div>
    </div>
  );
}
