import * as AC from "@bacons/apple-colors";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import type { Flight } from "@/data/flights";

export default function FlightRoute({
  flight,
  size = "small",
}: {
  flight: Flight;
  size?: "small" | "large";
}) {
  const isLarge = size === "large";
  const codeSize = isLarge ? 28 : 18;
  const citySize = isLarge ? 13 : 11;
  const iconSize = isLarge ? 20 : 14;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: isLarge ? 16 : 10,
      }}
    >
      {/* Origin */}
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text
          selectable
          style={{
            fontSize: codeSize,
            fontWeight: "700",
            color: AC.label as any,
            letterSpacing: 1,
          }}
        >
          {flight.origin.code}
        </Text>
        <Text
          style={{
            fontSize: citySize,
            color: AC.secondaryLabel as any,
            marginTop: 2,
          }}
          numberOfLines={1}
        >
          {flight.origin.city}
        </Text>
      </View>

      {/* Route line */}
      <View style={{ flex: 1.5, alignItems: "center", gap: 4 }}>
        <Text
          style={{
            fontSize: isLarge ? 12 : 10,
            color: AC.tertiaryLabel as any,
          }}
        >
          {flight.duration}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            gap: 4,
          }}
        >
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: AC.systemBlue as any,
            }}
          />
          <View style={{ flex: 1, position: "relative" }}>
            <View
              style={{
                height: 2,
                backgroundColor: AC.separator as any,
                borderRadius: 1,
              }}
            />
            {flight.status === "in-air" && (
              <View
                style={{
                  position: "absolute",
                  left: `${flight.progress * 100}%`,
                  top: -iconSize / 2 + 1,
                  marginLeft: -iconSize / 2,
                }}
              >
                {process.env.EXPO_OS === "ios" ? (
                  <Image
                    source="sf:airplane"
                    style={{
                      width: iconSize,
                      height: iconSize,
                      tintColor: AC.systemBlue as any,
                    }}
                  />
                ) : (
                  <Text style={{ fontSize: iconSize, color: AC.systemBlue as any }}>✈</Text>
                )}
              </View>
            )}
          </View>
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 3,
              borderWidth: 2,
              borderColor: AC.systemBlue as any,
            }}
          />
        </View>
      </View>

      {/* Destination */}
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text
          selectable
          style={{
            fontSize: codeSize,
            fontWeight: "700",
            color: AC.label as any,
            letterSpacing: 1,
          }}
        >
          {flight.destination.code}
        </Text>
        <Text
          style={{
            fontSize: citySize,
            color: AC.secondaryLabel as any,
            marginTop: 2,
          }}
          numberOfLines={1}
        >
          {flight.destination.city}
        </Text>
      </View>
    </View>
  );
}
