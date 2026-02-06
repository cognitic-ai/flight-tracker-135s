import * as AC from "@bacons/apple-colors";
import { Text, View } from "react-native";
import type { FlightStatus } from "@/data/flights";

const STATUS_CONFIG: Record<FlightStatus, { label: string; color: string; bgColor: string }> = {
  "on-time": { label: "On Time", color: AC.systemGreen as any, bgColor: `${AC.systemGreen}20` },
  delayed: { label: "Delayed", color: AC.systemOrange as any, bgColor: `${AC.systemOrange}20` },
  boarding: { label: "Boarding", color: AC.systemBlue as any, bgColor: `${AC.systemBlue}20` },
  "in-air": { label: "In Air", color: AC.systemTeal as any, bgColor: `${AC.systemTeal}20` },
  landed: { label: "Landed", color: AC.systemGreen as any, bgColor: `${AC.systemGreen}20` },
  cancelled: { label: "Cancelled", color: AC.systemRed as any, bgColor: `${AC.systemRed}20` },
};

export default function StatusBadge({ status }: { status: FlightStatus }) {
  const config = STATUS_CONFIG[status];
  return (
    <View
      style={{
        backgroundColor: config.bgColor,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        borderCurve: "continuous",
      }}
    >
      <Text
        style={{
          color: config.color,
          fontSize: 12,
          fontWeight: "600",
        }}
      >
        {config.label}
      </Text>
    </View>
  );
}
