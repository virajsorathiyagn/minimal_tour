import { Box, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import CustomBreadcrumb from "../CustomBreadcrums";
import TourNewEditForm from "./TourNewEditForm";


const name:string[]=["Dashboard","Job"]
const link:string[]=["/","/job"]

export function TourCreateView() {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container sx={{ maxWidth: "1200px", pt: 1, pr: 5, pb: 8, pl: 5 }}>
          <Box sx={{ mb: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Create a new job
                </Typography>
                <CustomBreadcrumb
                  name={name}
                  link={link}
                  current_component="Create"
                />
              </Box>
              
            </Box>
          </Box>

          <TourNewEditForm />
        </Container>
      </React.Fragment>
    </>
  );
}
