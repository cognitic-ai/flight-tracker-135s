export type FlightStatus = "on-time" | "delayed" | "boarding" | "in-air" | "landed" | "cancelled";

export interface Airport {
  code: string;
  city: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  airlineLogo: string;
  origin: Airport;
  destination: Airport;
  departureTime: string;
  arrivalTime: string;
  status: FlightStatus;
  progress: number; // 0-1 for in-air flights
  gate: string;
  terminal: string;
  aircraft: string;
  duration: string;
}

export const AIRPORTS: Record<string, Airport> = {
  SFO: { code: "SFO", city: "San Francisco", name: "San Francisco Intl", latitude: 37.6213, longitude: -122.379 },
  JFK: { code: "JFK", city: "New York", name: "John F. Kennedy Intl", latitude: 40.6413, longitude: -73.7781 },
  LAX: { code: "LAX", city: "Los Angeles", name: "Los Angeles Intl", latitude: 33.9425, longitude: -118.408 },
  ORD: { code: "ORD", city: "Chicago", name: "O'Hare Intl", latitude: 41.9742, longitude: -87.9073 },
  LHR: { code: "LHR", city: "London", name: "Heathrow", latitude: 51.47, longitude: -0.4543 },
  NRT: { code: "NRT", city: "Tokyo", name: "Narita Intl", latitude: 35.7647, longitude: 140.3864 },
  CDG: { code: "CDG", city: "Paris", name: "Charles de Gaulle", latitude: 49.0097, longitude: 2.5479 },
  DXB: { code: "DXB", city: "Dubai", name: "Dubai Intl", latitude: 25.2532, longitude: 55.3657 },
};

export const MOCK_FLIGHTS: Flight[] = [
  {
    id: "1",
    flightNumber: "UA 238",
    airline: "United Airlines",
    airlineLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/United_Airlines_Logo.svg/120px-United_Airlines_Logo.svg.png",
    origin: AIRPORTS.SFO,
    destination: AIRPORTS.JFK,
    departureTime: "08:30 AM",
    arrivalTime: "05:15 PM",
    status: "in-air",
    progress: 0.65,
    gate: "B22",
    terminal: "3",
    aircraft: "Boeing 787-9",
    duration: "5h 45m",
  },
  {
    id: "2",
    flightNumber: "AA 100",
    airline: "American Airlines",
    airlineLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/American_Airlines_logo_2013.svg/120px-American_Airlines_logo_2013.svg.png",
    origin: AIRPORTS.JFK,
    destination: AIRPORTS.LHR,
    departureTime: "09:00 PM",
    arrivalTime: "09:15 AM",
    status: "boarding",
    progress: 0,
    gate: "A14",
    terminal: "8",
    aircraft: "Boeing 777-300ER",
    duration: "7h 15m",
  },
  {
    id: "3",
    flightNumber: "DL 456",
    airline: "Delta Air Lines",
    airlineLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/120px-Delta_logo.svg.png",
    origin: AIRPORTS.LAX,
    destination: AIRPORTS.NRT,
    departureTime: "01:45 PM",
    arrivalTime: "05:30 PM",
    status: "on-time",
    progress: 0,
    gate: "T6-68",
    terminal: "6",
    aircraft: "Airbus A350-900",
    duration: "11h 45m",
  },
  {
    id: "4",
    flightNumber: "BA 295",
    airline: "British Airways",
    airlineLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/British_Airways_Logo.svg/120px-British_Airways_Logo.svg.png",
    origin: AIRPORTS.LHR,
    destination: AIRPORTS.ORD,
    departureTime: "11:00 AM",
    arrivalTime: "02:30 PM",
    status: "delayed",
    progress: 0,
    gate: "C41",
    terminal: "5",
    aircraft: "Boeing 787-10",
    duration: "9h 30m",
  },
  {
    id: "5",
    flightNumber: "EK 215",
    airline: "Emirates",
    airlineLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/120px-Emirates_logo.svg.png",
    origin: AIRPORTS.DXB,
    destination: AIRPORTS.SFO,
    departureTime: "02:30 AM",
    arrivalTime: "08:00 AM",
    status: "in-air",
    progress: 0.42,
    gate: "D8",
    terminal: "3",
    aircraft: "Airbus A380-800",
    duration: "16h 30m",
  },
  {
    id: "6",
    flightNumber: "AF 65",
    airline: "Air France",
    airlineLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/120px-Air_France_Logo.svg.png",
    origin: AIRPORTS.CDG,
    destination: AIRPORTS.LAX,
    departureTime: "10:15 AM",
    arrivalTime: "01:00 PM",
    status: "landed",
    progress: 1,
    gate: "E12",
    terminal: "2E",
    aircraft: "Boeing 777-200ER",
    duration: "11h 45m",
  },
  {
    id: "7",
    flightNumber: "UA 837",
    airline: "United Airlines",
    airlineLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/United_Airlines_Logo.svg/120px-United_Airlines_Logo.svg.png",
    origin: AIRPORTS.SFO,
    destination: AIRPORTS.NRT,
    departureTime: "03:00 PM",
    arrivalTime: "06:30 PM",
    status: "cancelled",
    progress: 0,
    gate: "G10",
    terminal: "I",
    aircraft: "Boeing 777-300ER",
    duration: "11h 30m",
  },
];
