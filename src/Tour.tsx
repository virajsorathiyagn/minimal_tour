import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  CssBaseline, 
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TourSearch from "./TourSearch";
import TourFilter from "./TourFilter";
import { TourSort } from "./TourSort";
import CustomBreadcrumb from "./CustomBreadcrums";

const name:string[]=["Dashboard","Tour"]
const link:string[]=["/","/add"]

export default function Tour() {
  const [sort, setSort] = useState("newest");

  return (
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
                  List
                </Typography>
                <CustomBreadcrumb name={name} link={link} current_component="viraj"/>
              </Box>
              <Button
                variant="contained"
                href="/dashboard/tour/new"
                disableElevation
                startIcon={<Add />}
                sx={{
                  backgroundColor: "#000",
                  borderRadius: 2,
                  px: 1.2,
                  textTransform: "capitalize",
                  fontWeight: "bold",
                   fontFamily: `Public Sans Variable, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
                  "&:hover": {
                    backgroundColor: "#545454ff",
                    px: 1.2,
                  },
                }}
              >
                Add tour
              </Button>
            </Box>
          </Box>

          <Box sx={{ mb: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TourSearch />
              <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                <TourFilter />
                <TourSort
                  sort={sort}
                  onSort={setSort}
                  sortOptions={[
                    { value: "newest", label: "Newest" },
                    { value: "popular", label: "Popular" },
                    { value: "oldest", label: "Oldest" },
                  ]}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </React.Fragment>
  );
}
