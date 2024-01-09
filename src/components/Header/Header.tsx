import React, { useState } from "react";
import { FunctionComponent } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
} from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import FeedIcon from "@mui/icons-material/Feed";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import AttractionsIcon from "@mui/icons-material/Attractions";

import { Color } from "../../styles/colors";
import { stylesheet } from "../../styles/stylesheet";

import { useLanguageContext } from "../../providers/CustomProvider";
import { useTranslation } from "react-i18next";

export interface headerProps {
  selectedButton: string;
  setSelectedButton: (newValue: string) => void;
}

export const Header: FunctionComponent<headerProps> = ({
  selectedButton,
  setSelectedButton,
}) => {
  const { setShowLanguageModal } = useLanguageContext();
  const { t } = useTranslation(["translation", "common"]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedButton(newValue);
  };

  const handleClick = () => {
    setShowLanguageModal((prev) => !prev);
  };

  return (
    <Box sx={ss.container}>
      <Box component="section" sx={ss.left}>
        <BottomNavigation
          showLabels
          value={selectedButton}
          onChange={handleChange}
        >
          <BottomNavigationAction
            sx={{ gap: "5px" }}
            label={
              <span style={{ display: "flex", gap: "5px" }}>
                {t("header.buttons.about_me")}
              </span>
            }
            icon={<FeedIcon sx={{ fill: "#B238F2" }} />}
            value={"about_me"}
          />
          <BottomNavigationAction
            sx={{ gap: "5px" }}
            label={
              <span style={{ display: "flex", gap: "5px" }}>
                {t("header.buttons.resume")}
              </span>
            }
            icon={<AutoAwesomeMotionIcon sx={{ fill: "#B238F2" }} />}
            value={"resume"}
          />
          <BottomNavigationAction
            sx={{ gap: "5px" }}
            label={
              <span style={{ display: "flex", gap: "5px" }}>
                {t("header.buttons.skills")}
              </span>
            }
            icon={<AttractionsIcon sx={{ fill: "#B238F2" }} />}
            value={"skills"}
          />
        </BottomNavigation>
      </Box>
      <Box component="section" sx={ss.right}>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            sx={{ gap: "5px" }}
            label={
              <span style={{ display: "flex", gap: "5px" }}>
                {t("header.buttons.language")}
              </span>
            }
            icon={<LanguageIcon sx={{ fill: "#B238F2" }} />}
            onClick={handleClick}
          />
        </BottomNavigation>
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
