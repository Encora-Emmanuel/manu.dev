import React, { FunctionComponent } from "react";
import { Toolbar, Typography, Box, IconButton } from "@mui/material";
import { stylesheet } from "../../styles/stylesheet";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

export const Footer: FunctionComponent = () => {
  const { t } = useTranslation(["translation", "common"]);

  return (
    <Toolbar>
      <Box sx={ss.container}>
        <Box sx={ss.footerBox}>
          <Typography sx={ss.disclaimerRight}>
            {t("footer.social_media.follow")}
          </Typography>
          <Box sx={ss.footerBoxRightIcons}>
            <IconButton
              LinkComponent={Link}
              href={t("footer.social_media.linkedin")}
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              LinkComponent={Link}
              href={t("footer.social_media.github")}
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              LinkComponent={Link}
              href={t("footer.social_media.instagram")}
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
        {/*<Box component="section" sx={ss.left}>
           <Box sx={ss.footerBox}>
            <Typography sx={ss.disclaimer}>{t("footer.disclaimer")}</Typography>
            <Typography sx={ss.disclaimer}>
              {t("footer.disclaimer2")}
            </Typography>
          </Box> 
        </Box>
        <Box component="section" sx={ss.right}>
          <Box sx={ss.footerBoxRight}>
            {/* <Box sx={ss.footerBox}>
              <Typography sx={ss.disclaimerRight}>
                {t("footer.social_media.call")}
              </Typography>
              <Typography>{t("footer.social_media.phone")}</Typography>
            </Box>

            <Box sx={ss.footerBox}>
              <Typography sx={ss.disclaimerRight}>
                {t("footer.social_media.email")}
              </Typography>
              <Typography>{t("footer.social_media.email_address")}</Typography>
            </Box> 

            <Box sx={ss.footerBox}>
              <Typography sx={ss.disclaimerRight}>
                {t("footer.social_media.follow")}
              </Typography>
              <Box sx={ss.footerBoxRightIcons}>
                <IconButton
                  LinkComponent={Link}
                  href={t("footer.social_media.linkedin")}
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  LinkComponent={Link}
                  href={t("footer.social_media.github")}
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  LinkComponent={Link}
                  href={t("footer.social_media.instagram")}
                  target="_blank"
                >
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Box>
          </Box> */}
      </Box>
    </Toolbar>
  );
};

const ss = stylesheet({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "120px",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    justifyContent: "center",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
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
  footerBox: {
    display: "flex",
    flexDirection: "column",
  },
  footerBoxRight: {
    display: "flex",
    gap: "100px",
    textAlign: "center",
    "@media (max-width: 600px)": {
      flexDirection: "column",
      gap: "20px",
    },
  },
  disclaimer: {
    fontSize: "14px",
  },
  disclaimerRight: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  footerBoxRightIcons: {
    display: "flex",
    textAlign: "center",
    justifyContent: "space-between",
  },
});
