import { Button } from "@/components/ui/button"
import { GiftCard } from "@/components/gift-card"
import { mockGifts } from "@/lib/mock-data"
import { Plus } from "lucide-react"

export default function GiftsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gifts</h1>
          <p className="text-muted-foreground">Send and receive Bitcoin gifts</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Send Gift
        </Button>
      </div>

      {/* Gifts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockGifts.map((gift) => (
          <GiftCard key={gift.id} {...gift} />
        ))}
      </div>
    </div>
  )
}
