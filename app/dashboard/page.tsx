import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockUser } from "@/lib/mock-data";
import { Send, Download, Gift } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {mockUser.name.split(" ")[0]}!
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your Bitcoin today.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Button size="lg" className="h-auto py-6 flex-col gap-2">
          <Send className="h-6 w-6" />
          <span className="text-lg">Send sBTC</span>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-auto py-6 flex-col gap-2 bg-transparent"
        >
          <Download className="h-6 w-6" />
          <span className="text-lg">Request</span>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-auto py-6 flex-col gap-2 bg-transparent"
        >
          <Gift className="h-6 w-6" />
          <span className="text-lg">Gift</span>
        </Button>
      </div>

      {/* Balance Card */}
      <Card>
        <CardHeader>
          <CardTitle>Total Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-4xl font-bold">
              {mockUser.balance.toFixed(4)} BTC
            </p>
            <p className="text-2xl text-muted-foreground">
              ${mockUser.balanceUSD.toLocaleString()}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Placeholder for more content */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your recent transactions will appear here.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your Bitcoin statistics will appear here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
