import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import * as AC from "@bacons/apple-colors";
import Stack from "expo-router/stack";
import FlightDetailInfo from "@/components/flight-detail-info";
import { MOCK_FLIGHTS } from "@/data/flights";

export default function FlightDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const flight = MOCK_FLIGHTS.find((f) => f.id === id);

  if (!flight) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: AC.secondaryLabel as any,
          }}
        >
          Flight not found
        </Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: flight.flightNumber }} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ flex: 1 }}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 32,
        }}
      >
        <FlightDetailInfo flight={flight} />
      </ScrollView>
    </>
  );
}
