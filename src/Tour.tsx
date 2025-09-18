import styled from "@emotion/styled";
import { Add } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  CssBaseline,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TourSearch from "./TourSearch";
import TourFilter from "./TourFilter";
import { TourSort } from "./TourSort";

const BreadcrumbsSeparator = styled("span")(() => ({
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: "#919EAB",
}));

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const breadcrumbs = [
  <Link
    underline="hover"
    key="1"
    color="inherit"
    href="/"
    onClick={handleClick}
    sx={{ fontSize: "14px", fontWeight: "600px", color: "#000" }}
  >
    Dashboard
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/material-ui/getting-started/installation/"
    onClick={handleClick}
    sx={{ fontSize: "14px", fontWeight: "600px", color: "#000" }}
  >
    Tour
  </Link>,
  <Typography key="3" sx={{ color: "#637381", fontSize: "14px" }}>
    Viraj
  </Typography>,
];

export default function Tour() {
  const [sort, setSort] = useState("newest");

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
                  List
                </Typography>
                <Breadcrumbs
                  separator={<BreadcrumbsSeparator />}
                  aria-label="breadcrumb"
                  sx={{
                    "& ol": {
                      display: "flex",
                      flexWrap: "wrap",
                      rowGap: 0.5,
                      columnGap: 2,
                    },
                  }}
                >
                  {breadcrumbs}
                </Breadcrumbs>
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
    </>
  );
}
