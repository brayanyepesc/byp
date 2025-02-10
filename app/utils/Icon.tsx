import FontAwesome from "@expo/vector-icons/FontAwesome";

interface IconProps {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}

export const Icon = (props: IconProps) => {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
};
