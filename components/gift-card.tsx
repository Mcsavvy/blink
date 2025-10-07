import { Gift, Check, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface GiftCardProps {
  amount: number
  amountUSD: number
  from?: string
  to?: string
  message: string
  date: string
  status: "claimed" | "sent" | "pending"
}

export function GiftCard({ amount, amountUSD, from, to, message, date, status }: GiftCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <Card className="overflow-hidden border-2 hover:border-primary transition-colors pt-0">
      <div className="h-3 bg-gradient-to-r from-primary to-accent" />
      <CardContent className="pt-6 pb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Gift className="h-6 w-6 text-primary" />
          </div>
          <Badge variant={status === "claimed" ? "default" : "secondary"}>
            {status === "claimed" && <Check className="h-3 w-3 mr-1" />}
            {status === "sent" && <Send className="h-3 w-3 mr-1" />}
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        <p className="text-2xl font-bold mb-1">{amount.toFixed(4)} BTC</p>
        <p className="text-sm text-muted-foreground mb-3">${amountUSD.toFixed(2)}</p>
        <p className="text-sm font-medium mb-2">{from ? `From ${from}` : `To ${to}`}</p>
        <p className="text-sm text-muted-foreground italic mb-3">{message}</p>
        <p className="text-xs text-muted-foreground">{formattedDate}</p>
      </CardContent>
    </Card>
  )
}
