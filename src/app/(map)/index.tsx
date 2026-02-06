import * as AC from "@bacons/apple-colors";
import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";
import { MOCK_FLIGHTS } from "@/data/flights";

function ActiveFlightRow({
  flight,
}: {
  flight: (typeof MOCK_FLIGHTS)[number];
}) {
  return (
    <View
      style={{
        backgroundColor: AC.secondarySystemGroupedBackground as any,
        borderRadius: 14,
        borderCurve: "continuous",
        padding: 14,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
      }}
    >
      {process.env.EXPO_OS === "ios" ? (
        <Image
          source="sf:airplane.circle.fill"
          style={{
            width: 36,
            height: 36,
            tintColor: AC.systemBlue as any,
          }}
        />
      ) : (
        <View
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: `${AC.systemBlue}20` as any,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>✈</Text>
        </View>
      )}

      <View style={{ flex: 1, gap: 2 }}>
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
            fontSize: 13,
            color: AC.secondaryLabel as any,
          }}
        >
          {flight.origin.code} → {flight.destination.code}
        </Text>
      </View>

      <View style={{ alignItems: "flex-end", gap: 2 }}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "600",
            color: AC.systemBlue as any,
            fontVariant: ["tabular-nums"],
          }}
        >
          {Math.round(flight.progress * 100)}%
        </Text>
        <Text
          style={{
            fontSize: 11,
            color: AC.tertiaryLabel as any,
          }}
        >
          complete
        </Text>
      </View>
    </View>
  );
}

export default function MapScreen() {
  const activeFlights = MOCK_FLIGHTS.filter((f) => f.status === "in-air");

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ flex: 1 }}
      contentContainerStyle={{
        padding: 16,
        gap: 16,
        paddingBottom: 32,
      }}
    >
      {/* Map placeholder */}
      <View
        style={{
          height: 260,
          backgroundColor: AC.secondarySystemGroupedBackground as any,
          borderRadius: 20,
          borderCurve: "continuous",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          overflow: "hidden",
        }}
      >
        {/* Stylized globe */}
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            borderWidth: 2,
            borderColor: AC.systemBlue as any,
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.5,
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              borderWidth: 1.5,
              borderColor: AC.systemBlue as any,
              opacity: 0.6,
            }}
          />
          <View
            style={{
              position: "absolute",
              width: 80,
              height: 1.5,
              backgroundColor: AC.systemBlue as any,
              opacity: 0.4,
            }}
          />
          <View
            style={{
              position: "absolute",
              width: 1.5,
              height: 80,
              backgroundColor: AC.systemBlue as any,
              opacity: 0.4,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            color: AC.secondaryLabel as any,
          }}
        >
          Live Flight Map
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: AC.tertiaryLabel as any,
            textAlign: "center",
            paddingHorizontal: 32,
          }}
        >
          Tracking {activeFlights.length} active flights worldwide
        </Text>
      </View>

      {/* Active flights section */}
      <View style={{ gap: 10 }}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "600",
            color: AC.secondaryLabel as any,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            paddingHorizontal: 4,
          }}
        >
          Active Flights
        </Text>
        {activeFlights.map((flight) => (
          <ActiveFlightRow key={flight.id} flight={flight} />
        ))}
      </View>
    </ScrollView>
  );
}
