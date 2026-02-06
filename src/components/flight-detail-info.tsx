import * as AC from "@bacons/apple-colors";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import type { Flight } from "@/data/flights";
import StatusBadge from "./status-badge";
import FlightRoute from "./flight-route";

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
      }}
    >
      <Text style={{ fontSize: 15, color: AC.secondaryLabel as any }}>
        {label}
      </Text>
      <Text
        selectable
        style={{ fontSize: 15, fontWeight: "500", color: AC.label as any }}
      >
        {value}
      </Text>
    </View>
  );
}

function Separator() {
  return (
    <View
      style={{
        height: 0.5,
        backgroundColor: AC.separator as any,
      }}
    />
  );
}

export default function FlightDetailInfo({ flight }: { flight: Flight }) {
  return (
    <View style={{ gap: 24 }}>
      {/* Status + Route */}
      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground as any,
          borderRadius: 16,
          borderCurve: "continuous",
          padding: 20,
          gap: 20,
        }}
      >
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
                fontSize: 22,
                fontWeight: "700",
                color: AC.label as any,
              }}
            >
              {flight.flightNumber}
            </Text>
            <Text
              style={{ fontSize: 14, color: AC.secondaryLabel as any }}
            >
              {flight.airline}
            </Text>
          </View>
          <StatusBadge status={flight.status} />
        </View>

        <FlightRoute flight={flight} size="large" />

        {/* Progress bar for in-air flights */}
        {flight.status === "in-air" && (
          <View style={{ gap: 6 }}>
            <View
              style={{
                height: 6,
                backgroundColor: AC.systemFill as any,
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  height: 6,
                  width: `${flight.progress * 100}%`,
                  backgroundColor: AC.systemBlue as any,
                  borderRadius: 3,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 12,
                color: AC.tertiaryLabel as any,
                textAlign: "center",
                fontVariant: ["tabular-nums"],
              }}
            >
              {Math.round(flight.progress * 100)}% complete
            </Text>
          </View>
        )}
      </View>

      {/* Departure info */}
      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground as any,
          borderRadius: 16,
          borderCurve: "continuous",
          paddingHorizontal: 16,
          paddingVertical: 4,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontWeight: "600",
            color: AC.secondaryLabel as any,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            paddingTop: 12,
            paddingBottom: 4,
          }}
        >
          Departure
        </Text>
        <InfoRow label="Time" value={flight.departureTime} />
        <Separator />
        <InfoRow label="Airport" value={`${flight.origin.name} (${flight.origin.code})`} />
        <Separator />
        <InfoRow label="Terminal" value={flight.terminal} />
        <Separator />
        <InfoRow label="Gate" value={flight.gate} />
      </View>

      {/* Arrival info */}
      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground as any,
          borderRadius: 16,
          borderCurve: "continuous",
          paddingHorizontal: 16,
          paddingVertical: 4,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontWeight: "600",
            color: AC.secondaryLabel as any,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            paddingTop: 12,
            paddingBottom: 4,
          }}
        >
          Arrival
        </Text>
        <InfoRow label="Time" value={flight.arrivalTime} />
        <Separator />
        <InfoRow
          label="Airport"
          value={`${flight.destination.name} (${flight.destination.code})`}
        />
      </View>

      {/* Flight info */}
      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground as any,
          borderRadius: 16,
          borderCurve: "continuous",
          paddingHorizontal: 16,
          paddingVertical: 4,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontWeight: "600",
            color: AC.secondaryLabel as any,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            paddingTop: 12,
            paddingBottom: 4,
          }}
        >
          Flight Details
        </Text>
        <InfoRow label="Aircraft" value={flight.aircraft} />
        <Separator />
        <InfoRow label="Duration" value={flight.duration} />
      </View>
    </View>
  );
}
