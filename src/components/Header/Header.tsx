import React from "react";
import { FunctionComponent } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

import { Color } from "../../styles/colors";
import { stylesheet } from "../../styles/stylesheet";

import { useLanguageContext } from "../../providers/CustomProvider";
import { useTranslation } from "react-i18next";

export const Header: FunctionComponent = () => {
  const { setShowLanguageModal } = useLanguageContext();
  const { t } = useTranslation(["translation", "common"]);

  const handleClick = () => {
    setShowLanguageModal((prev) => !prev);
  };

  return (
    <Box sx={ss.container}>
      <Box component="section" sx={ss.left}>
        {/* <div
          style={{
            height: "16px",
            width: "16px",
            background: Color.CoolBlue,
            display: "flex",
            alignSelf: "center",
          }}
        />
        <Stack sx={ss.stack}>
          <Typography sx={ss.title}>{t("header.title")}</Typography>
          <Divider sx={ss.divider} />
          <Typography sx={ss.subtitle}>{t("header.subtitle")}</Typography>
        </Stack> */}
      </Box>
      <Box component="section" sx={ss.right}>
        <IconButton onClick={handleClick} sx={ss.buttons} aria-label="Language">
          <LanguageIcon sx={{ fill: "#B238F2" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

const ss = stylesheet({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    justifyContent: "space-between",
    width: "100%",
    padding: "4px",
  },
  left: () => ({
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: "inherit",
    padding: "inherit",
  }),
  right: () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "inherit",
    padding: "inherit",
  }),
  stack: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    alignItems: "center",
  },
  title: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  divider: {
    height: "20px",
    width: "2px",
    background: Color.MediumGray,
  },
  subtitle: {
    fontSize: "17px",
    textTransform: "uppercase",
    color: Color.MediumGray,
    letterSpacing: "0.25em",
  },
  buttons: {
    fontSize: "14px",
    textTransform: "uppercase",
  },
});
