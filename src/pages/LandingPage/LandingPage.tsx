import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { stylesheet } from "../../styles/stylesheet";
import { Color } from "../../styles/colors";

import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../providers/CustomProvider";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";

export const LandingPage: FunctionComponent = () => {
  const { t } = useTranslation(["translation", "common"]);
  const { showLanguageModal, setShowLanguageModal, setLanguage } =
    useLanguageContext();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [openLanguageDialog, setOpenLanguageDialog] = useState(false);

  const handleCloseLanguageDialog = () => {
    setOpenLanguageDialog(false);
    setShowLanguageModal(false);
  };

  const handleLanguageOptionsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedLanguage(event.target.value);
    setLanguage(event.target.value);
  };

  useEffect(() => {
    setOpenLanguageDialog(showLanguageModal);
  }, [showLanguageModal]);

  return (
    <Box sx={ss.content}>
      <Box sx={ss.profileCardWrapper}>
        <ProfileCard />
      </Box>
      <Backdrop
        sx={{
          color: Color.BackdropFill,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={openLanguageDialog}
        onClick={handleCloseLanguageDialog}
      >
        <Dialog
          open={openLanguageDialog}
          onClose={handleCloseLanguageDialog}
          sx={ss.dialog}
          data-testid="landingPage_languageDialog"
        >
          <DialogTitle sx={ss.dialogTitle}>
            {t("landing_page.language_dialog.title")}
          </DialogTitle>
          <DialogContent sx={ss.dialogContent}>
            <FormControl sx={ss.dialogDisclaimer}>
              <RadioGroup
                onChange={handleLanguageOptionsChange}
                value={selectedLanguage}
              >
                <FormControlLabel
                  sx={ss.languageOptions}
                  value="en"
                  control={<Radio />}
                  label={t("landing_page.language_dialog.lang_options.en")}
                />
                <FormControlLabel
                  sx={ss.languageOptions}
                  value="pt_BR"
                  control={<Radio />}
                  label={t("landing_page.language_dialog.lang_options.pt_br")}
                />
                <FormControlLabel
                  sx={ss.languageOptions}
                  value="fr"
                  control={<Radio />}
                  label={t("landing_page.language_dialog.lang_options.fr")}
                />
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions sx={ss.actions}>
            <Button
              sx={ss.dialogButton}
              onClick={handleCloseLanguageDialog}
              data-testid="landingPage_languageDialog_button"
            >
              {t("landing_page.language_dialog.button")}
            </Button>
          </DialogActions>
        </Dialog>
      </Backdrop>
    </Box>
  );
};

const ss = stylesheet({
  content: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  profileCardWrapper: {
    flex: 1,
    height: "100%",
    display: "flex",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  dialogContent: {
    padding: "0px 24px",
  },
  title: {
    fontSize: "36px",
    fontWeight: 600,
    textAlign: "center",
    color: Color.White,
    width: "450px",
    alignSelf: "center",
  },
  dialog: {
    borderRadius: "6px",
    padding: "6px 0",
  },
  dialogTitle: {
    fontSize: "24px",
    fontWeight: 400,
    textAlign: "center",
    color: Color.TextPrimary,
  },
  dialogDisclaimer: {
    fontSize: "14px",
    fontWeight: 400,
    textAlign: "center",
    color: Color.TextLightSecondary,
  },
  dialogButton: {
    width: "100%",
    fontSize: "15px",
    fontWeight: 500,
    padding: "8px 24px",
    borderRadius: "6px",
    background: Color.PrimaryLightMain,
    color: Color.White,
    gap: "8px",
    "&:hover": {
      background: Color.PrimaryLightMain,
    },
  },
  languageOptions: {
    fontSize: "16px",
    fontWeight: 400,
    padding: "0 8px",
    color: Color.TextPrimary,
  },
  actions: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    padding: "16px",
  },
});
