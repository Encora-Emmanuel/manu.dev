import React, { Fragment, FunctionComponent } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { stylesheet } from "../../styles/stylesheet";
import { Color } from "../../styles/colors";

import { useTranslation } from "react-i18next";
import { Header } from "../Header/Header";

export const DescriptionCard: FunctionComponent = () => {
  const { t } = useTranslation(["translation", "common"]);
  const encoraDetails = t("description_card.resume_encora_details").concat(
    "\n"
  ) as string;
  const sondaDetails = t("description_card.resume_sonda_details").concat(
    "\n"
  ) as string;
  const projectManagerDetails = t(
    "description_card.resume_project_manager_details"
  ).concat("\n") as string;
  const analystDetails = t("description_card.resume_analyst_details").concat(
    "\n"
  ) as string;

  const resumeSkills = t("description_card.resume_skills").concat(
    "\n"
  ) as string;

  return (
    <Fragment>
      <Box sx={ss.content}>
        <Header />
        <Typography sx={ss.title}>{t("description_card.title")}</Typography>
        <Typography sx={ss.subtitle}>
          {t("description_card.subtitle")}
        </Typography>
        <Box sx={ss.resume}>
          <Stack spacing={2}>
            <Typography sx={ss.resumeText}>
              {t("description_card.resume_1")}
            </Typography>
            <Typography sx={ss.resumeText}>
              <strong>{t("description_card.resume_encora_title")}</strong>
            </Typography>
            <Typography sx={ss.resumeText}>
              <em>{t("description_card.resume_encora_subtitle")}</em>
            </Typography>
            <Typography sx={ss.resumeText}>{encoraDetails}</Typography>
            <Typography sx={ss.resumeText}>
              <strong>{t("description_card.resume_sonda_title")}</strong>
            </Typography>
            <Typography sx={ss.resumeText}>{sondaDetails}</Typography>
            <Typography sx={ss.resumeText}>
              <strong>
                {t("description_card.resume_project_manager_title")}
              </strong>
            </Typography>
            <Typography sx={ss.resumeText}>{projectManagerDetails}</Typography>
            <Typography sx={ss.resumeText}>
              <strong>{t("description_card.resume_analyst_title")}</strong>
            </Typography>
            <Typography sx={ss.resumeText}>{analystDetails}</Typography>
            <Typography sx={ss.resumeText}>{resumeSkills}</Typography>
            <Typography sx={ss.resumeText}>
              {t("description_card.resume_2")}
            </Typography>
          </Stack>
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
    width: "100%",
    background: Color.White,
    alignItems: "center",
    borderRadius: "6px",
    padding: "24px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "50px",
    fontWeight: "bold",
    "@media (max-width: 600px)": {
      fontSize: "30px",
    },
  },
  subtitle: {
    fontSize: "20px",
    color: Color.MediumGray,
  },
  resume: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "24px",
  },
  resumeText: {
    fontSize: "16px",
    fontWeight: 400,
    textAlign: "left",
    lineHeight: "1.5",
  },
});
