import { Button, StyleSheet, TextInput, View } from "react-native";

import { FC, useState } from "react";

export type LoginViewProps = {
  onSubmit?: () => void;
  placeholder?: string;
  showSubmitButton?: boolean;
  onChange?: (text: string) => void;
};

export const InputField: FC<LoginViewProps> = ({
  onSubmit,
  placeholder,
  showSubmitButton = true,
  onChange,
}) => {
  return (
    <View style={styles.section}>
      <TextInput
        style={styles.section__input}
        placeholder={placeholder}
        onChangeText={onChange}
      />
      {showSubmitButton && <Button title="Submit" onPress={onSubmit} />}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },

  section__input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingHorizontal: 3,
    paddingVertical: 5,
  },
});
