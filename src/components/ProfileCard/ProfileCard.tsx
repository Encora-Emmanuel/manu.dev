import React, { Fragment, FunctionComponent } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { stylesheet } from "../../styles/stylesheet";
import { Color } from "../../styles/colors";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import ProfilePic from "../../assets/headshot.jpg";

import { useTranslation } from "react-i18next";

export const ProfileCard: FunctionComponent = () => {
  const { t } = useTranslation(["translation", "common"]);

  return (
    <Fragment>
      <Box sx={ss.content}>
        <Avatar src={ProfilePic} alt="Profile Picture" sx={ss.avatar} />
        <Typography sx={ss.name}>{t("profile_card.name")}</Typography>
        <Divider sx={ss.divider} />
        <Typography sx={ss.title}>{t("profile_card.title")}</Typography>
        <Box sx={ss.actions}>
          <IconButton
            LinkComponent={Link}
            href={t("footer.social_media.linkedin")}
            target="_blank"
            sx={ss.iconButton}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            LinkComponent={Link}
            href={t("footer.social_media.github")}
            target="_blank"
            sx={ss.iconButton}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            LinkComponent={Link}
            href={t("footer.social_media.instagram")}
            target="_blank"
            sx={ss.iconButton}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </Fragment>
  );
};

const ss = stylesheet({
  content: {
    textAlign: "center",
    gap: "24px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    background: Color.BackgroundGradientLight,
    alignItems: "center",
    padding: "50px",
  },
  avatar: {
    height: "200px",
    width: "200px",
  },
  name: { fontSize: "27px", fontWeight: "bold" },
  title: {
    fontSize: "17px",
    textTransform: "uppercase",
    letterSpacing: "0.25em",
  },
  divider: { width: "50px", height: "2px", background: Color.CoolBlue },
  actions: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  iconButton: {
    color: Color.White,
    "&:hover": {
      background: "transparent",
    },
  },
});
