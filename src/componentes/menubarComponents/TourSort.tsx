import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react"; // using iconify directly

type Props = {
  sort: string;
  sortOptions: { value: string; label: string }[];
  onSort: (newValue: string) => void; // add this
};

export function TourSort({ sort, sortOptions, onSort }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        onClick={handleOpen}
        endIcon={
          <Icon
            icon={
              open
                ? "eva:arrow-ios-upward-fill"
                : "eva:arrow-ios-downward-fill"
            }
            style={{ fontSize: 18 }}
          />
        }
        sx={{ fontWeight: 700, textTransform: "capitalize", fontFamily: `Public Sans Variable, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,}}
      >
        Sort by:
        <Box
          component="span"
          sx={{ ml: 0.5, fontWeight: 700, textTransform: "capitalize", fontFamily: `Public Sans Variable, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`, }}
        >
          {sort}
        </Box>
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {sortOptions.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === sort}
            onClick={() => {
              onSort(option.value);
              handleClose();
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
