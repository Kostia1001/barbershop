import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import styles from "./PriceBoxItem.module.scss";

const priceInfoLeft = [
  { text: "Чоловіча стрижка", price: "400 ₴",to:"https://n827968.alteg.io/company/777273/personal/select-services?o=s10900701"},
  { text: "Стрижка + борода", price: "600 ₴",to:"https://n827968.alteg.io/company/777273/personal/select-services?o=s10884843"},
  { text: "Стрижка машинкою", price: "300 ₴",to:"https://n827968.alteg.io/company/777273/personal/select-services?o=s10884847"},
  { text: "Стрижка машинкой + борода", price: "500 ₴",to:"https://n827968.alteg.io/company/777273/personal/select-services?o=s10884844" },
  { text: "Стрижка бороди", price: "300 ₴",to:"https://n827968.alteg.io/company/777273/personal/select-services?o=s10884841" },
  { text: "Дитяча стрижка", price: "300 ₴",textMark:"( (*) -від 5 до 10 років )",to:"https://n827968.alteg.io/company/777273/personal/select-services?o=s10884842"},
  { text: "Укладка волосся", price: "150 ₴",to:"https://n827968.alteg.io/company/777273/personal/select-services?o=s10885461" },
  {
    text: "Батько (стрижка) + син",
    price: "650 ₴",
    textMark:"(*)",
    to:"https://n827968.alteg.io/company/777273/personal/select-services?o=s10885450"
  },
  {
    text: "Батько (стрижка + борода) + син",
    price: "850 ₴",
    textMark:"(*)",
    to:"https://n827968.alteg.io/company/777273/personal/select-services?o=s10885456"
  },
  {
    text: "Батько (машинка + борода) + син",
    price: "750 ₴",
    textMark:"(*)",
    to:"https://n827968.alteg.io/company/777273/personal/select-services?o=s10885458"
  },
  { text: "Традиційне гоління", price: "300 ₴",to:"https://n827968.alteg.io/company/777273/personal/select-services?o=s10884835"},
  { text: "Воскове видалення волосся", price: "50 ₴",to:"https://n827968.alteg.io/company/777273/personal/select-services?o=s11437410" },
  
];

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const DemoPaper = styled(Paper)(({ theme }) => ({
  maxWidth: "100%",
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
  backgroundColor: "rgba(255, 255, 255, 0.0)",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 0 15px rgba(177, 127, 52, 0.6)",
  },
  "@media (max-width: 1024px)": {
    fontSize: "0.9rem",
  },
  "@media (max-width: 768px)": {
    fontSize: "0.8rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.7rem",
    height: 30,
    alignItems: "center"
  },
}));
export default function PriceBoxItem() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      {[darkTheme].map((theme, index) => (
        <Grid
          item
          xs={12}
          md={9.8}
          key={index}
          sx={{
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.0)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                width: "100%",
                p: 2,
                borderRadius: 2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "0.56fr 0.56fr" },
                gap: 2,
                backgroundColor: "rgba(255, 255, 255, 0.0)",
              }}
            >
              {priceInfoLeft.map((e) => (
                <Link to={e.to}><DemoPaper
                  variant="elevation"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className={styles.title}>{e.text}{e.textMark}</p>
                  <p className={styles.titlePrice}>{e.price}</p>
                </DemoPaper></Link>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
