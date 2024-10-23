"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

const mockItineraries = [
  {
    id: 1,
    name: "European Adventure",
    stage: "new",
    totalPrice: 5000,
    currency: "USD",
    createdAt: "2023-11-01",
  },
  {
    id: 2,
    name: "Asian Explorer",
    stage: "customer_review",
    totalPrice: 3500,
    currency: "USD",
    createdAt: "2023-11-02",
  },
];

export function ItineraryList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockItineraries.map((itinerary) => (
            <TableRow key={itinerary.id}>
              <TableCell className="font-medium">{itinerary.name}</TableCell>
              <TableCell>
                <Badge variant="outline" className="capitalize">
                  {itinerary.stage.replace("_", " ")}
                </Badge>
              </TableCell>
              <TableCell>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: itinerary.currency,
                }).format(itinerary.totalPrice)}
              </TableCell>
              <TableCell>
                {new Date(itinerary.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}