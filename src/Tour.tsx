import { Add } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Container,

  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TourFilter from "./TourFilter";
import { TourSort } from "./TourSort";

import CustomBreadcrumb from "./CustomBreadcrums";

import ListPage from "./pages/cardListPage/ListPage";
import { tours } from "./data/TourItem";
import { Icon } from "@iconify/react";
import type { ITourItem } from "./types/tours";


const name:string[]=["Dashboard","Tour"]
const link:string[]=["/","/add"]

export default function Tour() {
  const [sort, setSort] = useState("newest");
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState(tours);
  let filteredList: ITourItem[] = tours;
  const filterData = (query: string, data: ITourItem[]) => {
    if (!query) {
      return data;
    }
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.location.toLowerCase().includes(query.toLowerCase())
    );
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    filteredList = filterData(event.target.value, tours);
    setSearchData(filteredList);
  };
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
              <Autocomplete
                popupIcon={null}
                options={[]}
                disableClearable
                sx={{ width: { xs: 1, sm: 260 } }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search..."
                    value={inputValue}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(event)
                    }
                    slotProps={{
                      input: {
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start">
                            <Box
                              sx={{
                                ml: 1,
                                color: "text.disabled",
                                display: "flex",
                              }}
                            >
                              <Icon icon="eva:search-fill" />
                            </Box>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                )}
              />
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
          <ListPage tourListItems={searchData} />
        </Container>
      </React.Fragment>
  );
}
