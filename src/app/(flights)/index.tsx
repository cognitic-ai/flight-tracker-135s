import * as AC from "@bacons/apple-colors";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import FlightCard from "@/components/flight-card";
import { MOCK_FLIGHTS, type FlightStatus } from "@/data/flights";

const FILTERS: { label: string; value: FlightStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "In Air", value: "in-air" },
  { label: "Boarding", value: "boarding" },
  { label: "On Time", value: "on-time" },
  { label: "Delayed", value: "delayed" },
  { label: "Landed", value: "landed" },
];

export default function FlightsScreen() {
  const [filter, setFilter] = useState<FlightStatus | "all">("all");

  const filtered =
    filter === "all"
      ? MOCK_FLIGHTS
      : MOCK_FLIGHTS.filter((f) => f.status === filter);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1 }}
      contentContainerStyle={{
        padding: 16,
        gap: 12,
        paddingBottom: 32,
      }}
    >
      {/* Filter chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingBottom: 4 }}
      >
        {FILTERS.map((f) => (
          <Pressable
            key={f.value}
            onPress={() => setFilter(f.value)}
            style={{
              paddingHorizontal: 14,
              paddingVertical: 8,
              borderRadius: 20,
              borderCurve: "continuous",
              backgroundColor:
                filter === f.value
                  ? (AC.systemBlue as any)
                  : (AC.tertiarySystemFill as any),
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color:
                  filter === f.value ? "white" : (AC.label as any),
              }}
            >
              {f.label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Flight list */}
      {filtered.length === 0 ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 60,
            gap: 8,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "600",
              color: AC.secondaryLabel as any,
            }}
          >
            No flights found
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: AC.tertiaryLabel as any,
            }}
          >
            Try a different filter
          </Text>
        </View>
      ) : (
        filtered.map((flight) => (
          <Link key={flight.id} href={`/(flights)/${flight.id}`} asChild>
            <Pressable>
              <FlightCard flight={flight} />
            </Pressable>
          </Link>
        ))
      )}
    </ScrollView>
  );
}
