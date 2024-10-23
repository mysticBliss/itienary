import { ItineraryList } from "@/components/dashboard/itinerary-list";
import { CreateItineraryDialog } from "@/components/dashboard/create-itinerary-dialog";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Itineraries</h2>
        <CreateItineraryDialog />
      </div>
      <ItineraryList />
    </div>
  );
}