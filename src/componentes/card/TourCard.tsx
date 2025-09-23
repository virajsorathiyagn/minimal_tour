import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import type { ITourItemList } from "../../types/tours";
import Menu_Component from "../menubarComponents/MenuComponent";
import { useNavigate } from "react-router";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function TourCard(tours: ITourItemList) {
  const navigate = useNavigate();

  const navigateToDetailPage = () => {
    navigate("detail");
  };
  return (
    <>
      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {tours.tourListItems.map((items, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <Card
                key={index}
                sx={{ borderRadius: "15px" }}
                onClick={navigateToDetailPage}
              >
                <CardMedia
                  sx={{
                    px: 1,
                  }}
                >
                  <ImageList
                    sx={{ width: "100%", height: "100%" }}
                    variant="quilted"
                    cols={4}
                    rowHeight={80}
                  >
                    {items.images.map((item, index) => (
                      <ImageListItem
                        key={item.img}
                        cols={item.cols || 1}
                        rows={item.rows || 1}
                      >
                        {index % 3 === 0 && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: 8,
                              left: 8,
                              paddingLeft: 0,
                            }}
                          >
                            <Chip
                              label={
                                <>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                      gap: 0.5,
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        textDecoration: "line-through",
                                        fontSize: "0.80rem",
                                        fontWeight: 600,
                                        color: "#919eab",
                                      }}
                                    >
                                      ${items.originalPrice}
                                    </Typography>
                                    <Typography
                                      sx={{
                                        fontSize: "0.80rem",
                                        fontWeight: 600,
                                      }}
                                    >
                                      ${items.discountPrice}
                                    </Typography>
                                  </Box>
                                </>
                              }
                              color="primary"
                              sx={{
                                borderRadius: "8px",
                                width: "80px",
                                bgcolor: "black",
                                color: "white",
                                ".css-1dybbl5-MuiChip-label": {
                                  paddingLeft: "5px",
                                },
                              }}
                            />
                          </Box>
                        )}
                        <img
                          style={{ borderRadius: "10px" }}
                          {...srcset(item.img, 80, item.rows, item.cols)}
                          loading="lazy"
                        />
                        {index % 3 === 0 && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: 8,
                              right: 8,
                            }}
                          >
                            <Chip
                              label={items.ratingNumber}
                              color="primary"
                              icon={
                                <Icon
                                  icon="material-symbols:kid-star"
                                  width="24"
                                  height="24"
                                  style={{
                                    color: "#FFAB00",
                                    backgroundColor: "transparent",
                                  }}
                                />
                              }
                              sx={{
                                borderRadius: "8px",
                                bgcolor: "#fff5cc",
                                color: "black",
                                fontWeight: "600",
                                fontSize: "0.90rem",
                              }}
                            />
                          </Box>
                        )}
                      </ImageListItem>
                    ))}
                  </ImageList>
                </CardMedia>
                <CardContent sx={{ marginBottom: "0px" }}>
                  <Stack spacing={1}>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Posted date: 18 Sep 2025 10:35 am
                    </Typography>
                    <Typography fontWeight={"bold"}>
                      {items.name}
                      {/* Majestic Mountain Adventures */}
                    </Typography>
                    <Box display={"flex"} gap={1}>
                      <Icon
                        icon="material-symbols:location-on-rounded"
                        width="24"
                        height="24"
                        style={{ color: "#ff5630" }}
                      />
                      <Typography>{items.location}</Typography>
                    </Box>

                    <Box display={"flex"} gap={1}>
                      <Icon
                        icon="ic:baseline-access-time-filled"
                        width="24"
                        height="24"
                        style={{ color: "#00b8d9" }}
                      />
                      <Typography>
                        {items.available.startDate.day}-
                        {items.available.endDate.day} Sep{" "}
                        {items.available.startDate.year}
                      </Typography>
                    </Box>
                    <Stack justifyContent={"space-between"} direction={"row"}>
                      <Box display={"flex"} gap={1}>
                        <Icon
                          icon="ic:sharp-people-alt"
                          width="24"
                          height="24"
                          style={{ color: "#00a76f" }}
                        />
                        <Typography>{items.bookers} Booked</Typography>
                      </Box>
                      <Menu_Component btnColor="black" />
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
