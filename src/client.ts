import "fast-text-encoding";
import { createClient } from "@dynamic-labs/client";
import { ReactNativeExtension } from "@dynamic-labs/react-native-extension";
import { ViemExtension } from "@dynamic-labs/viem-extension";

const environmentId = process.env.EXPO_PUBLIC_ENVIRONMENT_ID as string || '2762a57b-faa4-41ce-9f16-abff9300e2c9';

if (!environmentId) {
  throw new Error("EXPO_PUBLIC_ENVIRONMENT_ID is required");
}

export const client = createClient({
  environmentId,
  appLogoUrl: "https://demo.dynamic.xyz/favicon-32x32.png",
  appName: "Dynamic Demo",
})
  .extend(ReactNativeExtension())
  .extend(ViemExtension());
