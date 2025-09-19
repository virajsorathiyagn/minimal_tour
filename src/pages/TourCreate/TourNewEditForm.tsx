import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Avatar,
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  Paper,
  Stack,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomMenu from "../../componentes/customMenu/CustomMenu";
import FileUploadBox from "../../componentes/formComponents/FileUploadBox";

export default function TourNewEditForm() {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const hasError = touched && !value;
  const labelData: string[] = [
    "Audio Guide",
    "Lunch",
    "Special Activity",
    "Gratuities",
    "Professional Guide",
  ];

  const label2Data: string[] = [
    "Foods and Drinks",
    "Private Tour",
    "Entrance Fees",
    "Pick-up and drop off",
    "Transport by air-conditioned",
  ];
  const [open, setOpen] = useState(false);
  const handleOpenClick = () => {
    setOpen((prev) => !prev);
    console.log("open clicked");
  };
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  const renderDetails = () => (
    <Accordion style={{ width: "100%", borderRadius: "12px" }} elevation={3}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel2-content"
        id="panel2-header"
        sx={{
          // borderBottom: 2,
          borderColor: "grey.300",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            pl: 1,
            pr: 2,
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: "1.125rem",
              fontWeight: 600,
              lineHeight: 1.55556,
            }}
          >
            Details
          </Typography>
          <Typography
            component="span"
            sx={{
              mt: 0.5,
              fontSize: "0.875rem",
              fontWeight: 400,
              lineHeight: 1.57143,
              color: "#637381",
            }}
          >
            Title, short description, image...
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          p: 0,
          border: 0,
          borderTop: 2,
          borderColor: "grey.300",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
        }}
      >
        <Paper sx={{ borderRadius: "0 0 12px 12px" }}>
          {/* Main Box */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 3,
              gap: 3,
            }}
          >
            {/* Name Field */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  lineHeight: 1.57143,
                }}
              >
                Name
              </Typography>

              <FormControl sx={{ width: "100%" }}>
                <OutlinedInput
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onBlur={() => setTouched(true)}
                  placeholder="Please enter text"
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: hasError ? "red" : "#ccc",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: hasError ? "red" : "#888",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: hasError ? "red" : "#000",
                    },
                  }}
                />
                {hasError && (
                  <FormHelperText sx={{ color: "red" }}>
                    Name field required
                  </FormHelperText>
                )}
              </FormControl>
            </Box>

            {/* Content Field */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  lineHeight: 1.57143,
                }}
              >
                Content
              </Typography>
              <Box sx={{ border: "1px solid #cfcfcfff", borderRadius: 3 }}>
                {/* functionality box */}
                <Box
                  sx={{
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    // border: "1px solid black",
                    borderBottom: "1px solid #cfcfcfff",
                    alignItems: "center",
                    gap: 1,
                    p: 1.25,
                  }}
                >
                  <CustomMenu />

                  <Divider
                    orientation="vertical"
                    sx={{ height: "17px", alignItems: "center" }}
                  />

                  <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormat}
                    aria-label="text formatting"
                    sx={{
                      display: "flex",
                      gap: 0.5, // adds spacing between buttons
                    }}
                  >
                    <ToggleButton
                      value="bold"
                      aria-label="bold"
                      sx={{ minWidth: 30, height: 30, border: "none", p: 0 }}
                    >
                      <FormatBoldIcon sx={{ fontSize: "22px" }} />
                    </ToggleButton>
                    <ToggleButton
                      value="italic"
                      aria-label="italic"
                      sx={{ minWidth: 30, height: 30, border: "none", p: 0 }}
                    >
                      <FormatItalicIcon sx={{ fontSize: "22px" }} />
                    </ToggleButton>
                    <ToggleButton
                      value="underlined"
                      aria-label="underlined"
                      sx={{ minWidth: 30, height: 30, border: "none", p: 0 }}
                    >
                      <FormatUnderlinedIcon sx={{ fontSize: "22px" }} />
                    </ToggleButton>
                  </ToggleButtonGroup>

                  <Divider
                    orientation="vertical"
                    sx={{ height: "17px", alignItems: "center" }}
                  />

                  <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormat}
                    aria-label="text formatting"
                    sx={{
                      display: "flex",
                      gap: 0.5,
                    }}
                  >
                    <ToggleButton
                      value="left"
                      aria-label="left aligned"
                      sx={{ minWidth: 30, height: 30, border: "none", p: 0 }}
                    >
                      <Icon icon="pixel:bullet-list" width="22" height="24" />
                    </ToggleButton>
                    <ToggleButton
                      value="center"
                      aria-label="centered"
                      sx={{ minWidth: 30, height: 30, border: "none", p: 0 }}
                    >
                      <Icon icon="bx:list-ol" width="24" height="24" />
                    </ToggleButton>
                  </ToggleButtonGroup>

                  <Divider
                    orientation="vertical"
                    sx={{ height: "17px", alignItems: "center" }}
                  />

                  <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormat}
                    aria-label="text formatting"
                    sx={{
                      display: "flex",
                      gap: 0.5,
                    }}
                  >
                    <ToggleButton
                      value="left"
                      aria-label="left aligned"
                      sx={{ minWidth: 30, height: 30, border: "none", p: 0 }}
                    >
                      <FormatAlignLeftIcon sx={{ fontSize: "20px" }} />
                    </ToggleButton>
                    <ToggleButton
                      value="center"
                      aria-label="centered"
                      sx={{ minWidth: 30, height: 30, border: "none", p: 0 }}
                    >
                      <FormatAlignCenterIcon sx={{ fontSize: "20px" }} />
                    </ToggleButton>
                    <ToggleButton
                      value="right"
                      aria-label="right aligned"
                      sx={{ minWidth: 30, height: 30, border: "none", p: 0 }}
                    >
                      <FormatAlignRightIcon sx={{ fontSize: "20px" }} />
                    </ToggleButton>
                    <ToggleButton
                      value="right"
                      aria-label="right aligned"
                      sx={{ minWidth: 30, height: 30, border: "none", p: 0 }}
                    >
                      <FormatAlignJustifyIcon sx={{ fontSize: "20px" }} />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
                {/* Text Box */}
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { width: "100%" },
                    backgroundColor: "#f6f7f8",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="filled-multiline-static"
                    multiline
                    rows={7}
                    placeholder="Write Something awesome..."
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none",
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "none",
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Image Field */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  lineHeight: 1.57143,
                }}
              >
                Image
              </Typography>
              <FileUploadBox />
            </Box>
          </Box>
        </Paper>
      </AccordionDetails>
    </Accordion>
  );

  const renderProperties = () => (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Paper
          elevation={3}
          sx={{
            p: "20px",
            // boxShadow: "1px 10px 30px -20px #050404ff",
            borderRadius: "20px",
          }}
        >
          {/* Main Box */}
          <Box>
            {/* Title box */}
            <Box>
              {/* Box with icon */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: "700", fontSize: "20px", mb: 1 }}>
                  Properties
                </Typography>
                <IconButton
                  aria-label="delete"
                  color="primary"
                  onClick={handleOpenClick}
                >
                  {open ? (
                    <ExpandLess />
                    
                  ) : (
                    <ExpandMore />
                  )}
                </IconButton>
              </Box>
              <Typography color="grey">
                Additional functions and attributes...
              </Typography>
            </Box>
            {open && (
              <Box
                mt={2}
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <Divider sx={{ width: "100%", borderBottomWidth: 2 }} />
                {/* Tour guide */}
                <Box mb={2}>
                  <Typography fontWeight={"700"} fontSize={"13px"} mb={2}>
                    Tour Guide
                  </Typography>
                  <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={["Deep", "Viraj"]}
                    getOptionLabel={(option) => option}
                    defaultValue={["viraj"]}
                    filterSelectedOptions
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          sx={{
                            bgcolor: "grey.300",
                            borderRadius: "8px",
                          }}
                          avatar={
                            <Avatar
                              alt="Natacha"
                              src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-2.webp"
                            />
                          }
                          label={option}
                          variant="outlined"
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    renderOption={(props, option, { selected }) => (
                      <li {...props} key={option}>
                        <ListItem disableGutters disablePadding>
                          <ListItemAvatar>
                            <Avatar
                              alt={option}
                              src={
                                "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-2.webp"
                              }
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={`${option} ${
                              selected ? "(Selected)" : ""
                            }`}
                          />
                        </ListItem>
                      </li>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="+Tour Guides"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderRadius: "10px",
                              borderColor: "grey",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </Box>
                <Typography fontWeight={"700"} fontSize={"13px"}>
                  Available
                </Typography>
                {/* Available Box */}
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                >
                  <DatePicker
                    defaultValue={dayjs("2022-04-17")}
                    slotProps={{
                      textField: {
                        size: "medium",
                        InputProps: {
                          sx: {
                            borderRadius: "10px",
                            backgroundColor: "white",
                          }, // Apply the styles here
                        },
                      },
                    }}
                    sx={{
                      width: "410px",
                    }}
                  />
                  <DatePicker
                    slotProps={{
                      textField: {
                        size: "medium",
                        InputProps: {
                          sx: {
                            borderRadius: "10px",
                            backgroundColor: "white",
                          }, // Apply the styles here
                        },
                      },
                    }}
                    defaultValue={dayjs("2022-04-17")}
                    sx={{ width: "410px" }}
                  />
                </Box>
                {/* Duration Box */}
                <Box>
                  <Typography fontWeight={"700"} fontSize={"13px"} mb={2}>
                    Duration
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    placeholder="Ex: 2 Days, 4 Days 3 Nights"
                    variant="outlined"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: "10px",
                          borderColor: "grey",
                        },
                      },
                    }}
                    // onChange={(event:React.ChangeEvent<HTMLInputElement>) => handleInputChange(event)}
                  />
                </Box>
                {/* Destination Box */}
                <Box mb={2}>
                  <Typography fontWeight={"700"} fontSize={"13px"} mb={2}>
                    Destination
                  </Typography>
                  <Autocomplete
                    freeSolo
                    id="tags-outlined"
                    options={["India", "America"]}
                    getOptionLabel={(option) => option}
                    filterSelectedOptions
                    renderOption={(props, option, { selected }) => (
                      <li {...props} key={option}>
                        <ListItem disableGutters disablePadding>
                          <ListItemAvatar>
                            {/* change here the img url of country */}
                            <Avatar
                              alt={option}
                              src={
                                "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-2.webp"
                              }
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={`${option} ${
                              selected ? "(Selected)" : ""
                            }`}
                          />
                        </ListItem>
                      </li>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="+Destination"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderRadius: "10px",
                              borderColor: "grey",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </Box>
                {/* services */}
                <Box mb={2}>
                  <Typography fontWeight={"700"} fontSize={"13px"} mb={2}>
                    Services
                  </Typography>
                  <Box
                    display={"flex"}
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={{ xs: 0, md: 10 }}
                  >
                    <FormGroup>
                      {labelData.map((item, index) => {
                        return (
                          <FormControlLabel
                            key={index}
                            control={<Checkbox />}
                            label={item}
                          />
                        );
                      })}
                    </FormGroup>
                    <FormGroup>
                      {label2Data.map((item, index) => {
                        return (
                          <FormControlLabel
                            key={index}
                            control={<Checkbox />}
                            label={item}
                          />
                        );
                      })}
                    </FormGroup>
                  </Box>
                </Box>
                {/* Tags */}
                <Box mb={2}>
                  <Typography fontWeight={"700"} fontSize={"13px"} mb={2}>
                    Tags
                  </Typography>
                  <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={["Fashion", "Technology"]}
                    getOptionLabel={(option) => option}
                    filterSelectedOptions
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          sx={{
                            bgcolor: "#d6f4f9",
                            borderRadius: "8px",
                          }}
                          label={option}
                          variant="outlined"
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="+Tag"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderRadius: "10px",
                              borderColor: "grey",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </Box>
              </Box>
            )}
          </Box>
        </Paper>
      </LocalizationProvider>
    </>
  );

  const renderActions = () => (
    <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
      <FormControlLabel
        label="Publish"
        control={
          <Switch defaultChecked inputProps={{ id: "publish-switch" }} />
        }
        sx={{ flexGrow: 1, pl: 3 }}
      />

      <Button
        variant="contained"
        disableElevation
        sx={{
          backgroundColor: "#000",
          borderRadius: 2,
          px: 2,
          py: 1,
          textTransform: "capitalize",
          fontSize: "0.9375rem",
          fontWeight: "bold",
          fontFamily: `Public Sans Variable, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
          "&:hover": {
            backgroundColor: "#545454ff",
            px: 2,
            py: 1,
          },
        }}
      >
        Create Tour
      </Button>
    </Box>
  );

  return (
    <Stack
      spacing={{ xs: 3, md: 5 }}
      sx={{ mx: "auto", maxWidth: { xs: 720, xl: 880 } }}
    >
      {renderDetails()}
      {renderProperties()}
      {renderActions()}
    </Stack>
  );
}
