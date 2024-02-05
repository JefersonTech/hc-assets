import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { Props } from "./props";
import { useStyles } from "./styles";
export function ActionIconCard({
  subtitle,
  title,
  iconImg,
  navigationIcon,
}: Readonly<Props>) {
  const { colors, styles } = useStyles();

  return (
    <Card style={styles.container} mode="elevated" onPress={() => {}}>
      <View style={styles.cardContent}>
        <View style={styles.containerIconImg}>{iconImg}</View>
        <View style={styles.containerTitles}>
          <Text style={styles.titleCard} variant="titleLarge">
            {title}
          </Text>
          <Text style={styles.subTitle} variant="bodyMedium">
            {subtitle}
          </Text>
        </View>
        <View style={styles.containerIcon}>
          <Ionicons
            onPress={navigationIcon}
            name="arrow-forward-outline"
            size={32}
            color={colors.color12}
          />
        </View>
      </View>
    </Card>
  );
}
