import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionItem } from "@/components/transaction-item";
import { mockUser, mockTransactions } from "@/lib/mock-data";
import { Send, Download, Bitcoin } from "lucide-react";

export default function WalletPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Wallet</h1>
        <p className="text-muted-foreground">
          Manage your Bitcoin balance and transactions
        </p>
      </div>

      {/* Balance Card */}
      <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <CardContent className="pt-6 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <Bitcoin className="h-6 w-6" />
            <span className="text-sm font-medium opacity-90">
              Total Balance
            </span>
          </div>
          <p className="text-5xl font-bold mb-2">
            {mockUser.balance.toFixed(4)} BTC
          </p>
          <p className="text-2xl opacity-90">
            ${mockUser.balanceUSD.toLocaleString()}
          </p>
          <div className="flex gap-3 mt-6">
            <Button variant="secondary" size="sm" className="flex-1">
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
            <Button variant="secondary" size="sm" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Receive
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {mockTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} {...transaction} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
