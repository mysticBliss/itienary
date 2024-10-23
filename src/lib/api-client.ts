const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export async function createItinerary(data: {
  name: string;
  totalPrice: number;
  currency: string;
}) {
  const response = await fetch(`${API_BASE_URL}/itineraries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // TODO: Add authentication header
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create itinerary');
  }

  return response.json();
}

export async function getItineraries() {
  const response = await fetch(`${API_BASE_URL}/itineraries`, {
    headers: {
      // TODO: Add authentication header
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch itineraries');
  }

  return response.json();
}

export async function updateItinerary(id: number, data: Partial<{
  name: string;
  totalPrice: number;
  currency: string;
  stage: string;
}>) {
  const response = await fetch(`${API_BASE_URL}/itineraries/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      // TODO: Add authentication header
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to update itinerary');
  }

  return response.json();
}

export async function deleteItinerary(id: number) {
  const response = await fetch(`${API_BASE_URL}/itineraries/${id}`, {
    method: 'DELETE',
    headers: {
      // TODO: Add authentication header
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete itinerary');
  }
}