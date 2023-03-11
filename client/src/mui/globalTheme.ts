import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { APP_BAR_Z_INDEX, MODAL_Z_INDEX, SPINNER_Z_INDEX } from "./constants";
import { ruRU } from "@mui/material/locale";

export const theme = responsiveFontSizes(
  createTheme(
    {
      zIndex: {
        //@ts-ignore TODO:
        spinnerZIndex: SPINNER_Z_INDEX,
        appBarZIndex: APP_BAR_Z_INDEX,
        modalZIndex: MODAL_Z_INDEX,
      },
      // https://material-ui.com/customization/typography/#html-font-size
      typography: {
        htmlFontSize: 10,
        fontFamily: [
          "Livvic",
          "Montserrat",
          "Helvetica",
          "Arial",
          "sans-serif",
        ].join(", "),
      },
      overrides: {
        MuiButton: {
          containedPrimary: {
            backgroundColor:
              "linear-gradient(273.16deg, #0014FF -3.68%, #8020EF 50.64%, #FF2CDF 104.96%)",
            "&:hover": {
              backgroundColor:
                "linear-gradient(273.16deg, #0014FF -3.68%, #8020EF 50.64%, #FF2CDF 104.96%)",
            },
          },
        },
      },
      props: {
        // @ts-ignore TODO:
        MuiSkeleton: {
          animation: "wave",
        },
      },
    },
    ruRU
  )
);
