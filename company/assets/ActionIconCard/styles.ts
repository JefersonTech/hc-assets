import { useAppTheme } from "@/shared/infrastructure/theme";
import { StyleSheet } from "react-native";

export function useStyles() {
  const { colors } = useAppTheme();

  return {
    colors,
    styles: StyleSheet.create({
      container: {
        backgroundColor: colors.color07,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 25,
        paddingVertical: 25,
      },
      cardContent: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
      },
      img: {
        width: 80,
        height: 100,
        backgroundColor: colors.color07,
      },

      titleCard: {
        fontSize: 22,
        fontWeight: "bold",
      },
      containerTitles: {
        flexBasis: 230,
        alignSelf: "center",
        flexGrow: 1,
      },
      containerIcon: {
        position: "absolute",
        right: 0,
        bottom: -20,
      },
      subTitle: {
        color: colors.color14,
        fontWeight: "bold",
      },
      containerIconImg: {
        alignSelf: "center",
      },
    }),
    rxStyles: {},
  };
}
