import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomMenu from "../componentes/CustomMenu";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

export default function TourNewEditForm() {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const hasError = touched && !value;

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
              <Box>
                {/* functionality box */}
                <Box
                  sx={{
                    height: "60px",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    // border: "1px solid black",
                    borderBottom: "1px solid #919eab",
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
                      gap: 1.5, // adds spacing between buttons
                    }}
                  >
                    <ToggleButton
                      value="bold"
                      aria-label="bold"
                      sx={{ minWidth: 25, height: 30, border: "none", p: 0 }}
                    >
                      <FormatBoldIcon sx={{ fontSize: "22px" }} />
                    </ToggleButton>
                    <ToggleButton
                      value="italic"
                      aria-label="italic"
                      sx={{ minWidth: 25, height: 30, border: "none", p: 0 }}
                    >
                      <FormatItalicIcon sx={{ fontSize: "22px" }} />
                    </ToggleButton>
                    <ToggleButton
                      value="underlined"
                      aria-label="underlined"
                      sx={{ minWidth: 25, height: 30, border: "none", p: 0 }}
                    >
                      <FormatUnderlinedIcon sx={{ fontSize: "22px" }} />
                    </ToggleButton>
                  </ToggleButtonGroup>

                  <Divider
                    orientation="vertical"
                    sx={{ height: "17px", alignItems: "center" }}
                  />
                </Box>
                {/* Text Box */}
                <Box></Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </AccordionDetails>
    </Accordion>
  );

  return (
    <Stack
      spacing={{ xs: 3, md: 5 }}
      sx={{ mx: "auto", maxWidth: { xs: 720, xl: 880 } }}
    >
      {renderDetails()}
    </Stack>
  );
}
