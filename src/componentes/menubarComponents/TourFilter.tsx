import { Badge, Button } from "@mui/material";
import { Icon } from "@iconify/react";

export default function TourFilter() {
  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={
          <Badge color="error" variant="dot">
            <Icon icon="ic:round-filter-list" />
          </Badge>
        }
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          verticalAlign: "center",
          fontWeight: 700,
          fontSize: "0.875rem",
          pt: 0.75,
          pr: 1,
          pb: 1,
          pl: 0.75,
          fontFamily: `Public Sans Variable, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
          textTransform: "capitalize",
        }}
      >
        Filters
      </Button>
    </>
  );
}
