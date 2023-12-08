import React, { Fragment, FunctionComponent, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { stylesheet } from "../../styles/stylesheet";
import { Color } from "../../styles/colors";

import { useTranslation } from "react-i18next";
import { Header } from "../Header/Header";

export const DescriptionCard: FunctionComponent = () => {
  const { t } = useTranslation(["translation", "common"]);
  const [selectedButton, setSelectedButton] = useState("about_me");
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

  const skills = t("description_card.skills").concat("\n") as string;

  return (
    <Fragment>
      <Box sx={ss.content}>
        <Header
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
        <Typography sx={ss.title}>{t("description_card.title")}</Typography>
        <Typography sx={ss.subtitle}>
          {t("description_card.subtitle")}
        </Typography>
        <Box sx={ss.resume}>
          <Stack spacing={2}>
            {selectedButton === "about_me" ? (
              <Typography sx={ss.resumeText}>
                {t("description_card.resume_1")}
              </Typography>
            ) : selectedButton === "resume" ? (
              <Fragment>
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
                <Typography sx={ss.resumeText}>
                  {projectManagerDetails}
                </Typography>
                <Typography sx={ss.resumeText}>
                  <strong>{t("description_card.resume_analyst_title")}</strong>
                </Typography>
                <Typography sx={ss.resumeText}>{analystDetails}</Typography>
                <Typography sx={ss.resumeText}>{resumeSkills}</Typography>
                <Typography sx={ss.resumeText}>
                  {t("description_card.resume_2")}
                </Typography>
              </Fragment>
            ) : (
              <Typography sx={ss.resumeText}>
                <strong>Skills:</strong>
                <ul>
                  <li>
                    <strong>Programming Languages:</strong> Javascript,
                    Typescript
                  </li>
                  <li>
                    <strong>Front-End:</strong> HTML5, CSS, SCSS, SASS
                  </li>
                  <li>
                    <strong>Database (SQL/Nosql):</strong> Oracle, Mongodb,
                    Postgresql, Amazon Aurora
                  </li>
                  <li>
                    <strong>Frameworks:</strong> Angular 7~12, Node.js 10~16,
                    Angularjs, jQuery, Vuejs, React
                  </li>
                  <li>
                    <strong>Architecture:</strong> Restful Web Service, SOAP Web
                    Service
                  </li>
                  <li>
                    <strong>Ides and Tools:</strong> Visual Studio, Git, Jira,
                    Slack, AWS, DataDog, SVN, Mandrill, Segment, Eloqua,
                    Contentstack
                  </li>
                  <li>
                    <strong>TDD:</strong> Jest, RTL, enzime
                  </li>
                  <li>
                    <strong>Operating Systems:</strong> Linux/Ubuntu/MacOS
                  </li>
                  <li>
                    <strong>Functional:</strong> Estimation of story points,
                    analysis of epics branchs
                  </li>
                  <li>
                    <strong>Methodologies:</strong> Scrum
                  </li>
                  <li>
                    <strong>Additional Information:</strong> Working among
                    clients/projects majority based in the USA. Scopes like
                    cloud communication, facilities, etc.
                  </li>
                  <li>
                    <strong>Skills:</strong> Metodologias Agile
                  </li>
                </ul>
              </Typography>
            )}
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
