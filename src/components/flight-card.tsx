import * as AC from "@bacons/apple-colors";
import { Text, View } from "react-native";
import type { Flight } from "@/data/flights";
import StatusBadge from "./status-badge";
import FlightRoute from "./flight-route";

export default function FlightCard({ flight }: { flight: Flight }) {
  return (
    <View
      style={{
        backgroundColor: AC.secondarySystemGroupedBackground as any,
        borderRadius: 16,
        borderCurve: "continuous",
        padding: 16,
        gap: 14,
      }}
    >
      {/* Top row: airline + status */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ gap: 2 }}>
          <Text
            selectable
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: AC.label as any,
            }}
          >
            {flight.flightNumber}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: AC.secondaryLabel as any,
            }}
          >
            {flight.airline}
          </Text>
        </View>
        <StatusBadge status={flight.status} />
      </View>

      {/* Route visualization */}
      <FlightRoute flight={flight} />

      {/* Bottom row: times */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 11,
              color: AC.tertiaryLabel as any,
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            Departs
          </Text>
          <Text
            selectable
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: AC.label as any,
              fontVariant: ["tabular-nums"],
            }}
          >
            {flight.departureTime}
          </Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text
            style={{
              fontSize: 11,
              color: AC.tertiaryLabel as any,
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            Arrives
          </Text>
          <Text
            selectable
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: AC.label as any,
              fontVariant: ["tabular-nums"],
            }}
          >
            {flight.arrivalTime}
          </Text>
        </View>
      </View>
    </View>
  );
}
