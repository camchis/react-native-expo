import { FC, useState } from "react";
import { InputField } from "../InputField";
import { client } from "../client";
import { Button, StyleSheet, View } from "react-native";

export const LoginView: FC = () => {
  const [customerId, setCustomerId] = useState("");
  const [jwt, setJwt] = useState("");
  const renderContent = () => {
    return (
      <>
        <InputField
          key="customer_id"
          placeholder="Customer ID"
          showSubmitButton={false}
          onChange={(text) => setCustomerId(text)}
        />
        <InputField
          key="jwt"
          placeholder="JWT"
          onChange={(text) => setJwt(text)}
          onSubmit={async () => {
            await client.auth.external
              .signInWithExternalJwt({
                externalJwt: jwt,
                externalUserId: customerId,
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        />
      </>
    );
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignContent: "stretch",
    gap: 40,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Add a semi-transparent white overlay
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
});
