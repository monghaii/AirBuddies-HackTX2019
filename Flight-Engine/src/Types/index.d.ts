declare module 'haversine-distance';

declare interface Aircraft {
  model: string;
  speed: number;
  passengerCapacity: {
    total: number;
    main: number;
    first: number;
  };
}

declare interface Airport {
  code: string; // Airport code, typically 3 characters
  city: string; // Airport city name
  location: Location;
}

declare interface Location {
  latitude: number;
  longitude: number;
}

declare interface FlightDuration {
  hours: number;
  minutes: number;
  locale: string;
}

declare interface Person{
  name: string;
  age: number;
  firstClass: boolean;
  doNotDisturb: boolean;
  //flight_number: string;
  family: boolean;
  seat_location: number; // 1 - aisle, 2 - window, 3 - no preference/other
  interests: boolean[]; // [music, food, games, art, computer science]
}

declare interface Flight {
  flightNumber: string;
  aircraft: Aircraft;
  origin: Airport;
  destination: Airport;
  distance: number;
  duration: FlightDuration;
  people_on_flight: Person[];
}

declare interface FlightQueryParams {
  date: string;
  origin?: string;
  destination?: string;
}
