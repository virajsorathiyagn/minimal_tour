import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { type MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(0.5),
    minWidth: 120,
    color: theme.palette.text.primary,
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 6px 10px -3px",
    "& .MuiMenu-list": {
      padding: "0px",
    },
    "& .MuiMenuItem-root": {
      fontSize: "0.8rem",
      minHeight: "30px",
      padding: "2px 10px",
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selected, setSelected] = React.useState("Paragraph");
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value?: string) => {
    if (value) setSelected(value);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: "transparent",
          border: "1px solid #e0e0e0",
          borderRadius: "6px",
          color: "black",
          textTransform: "none",
          fontWeight: 400,
          fontSize: "0.8rem",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "#000",
          },
          justifyContent: "space-between",
          px: 1,
          py: 0,
          minWidth: 100,
          height: 35,
        }}
      >
        {selected}
      </Button>

      <StyledMenu
        id="demo-customized-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
      >
        {["Paragraph", "Heading 1", "Heading 2", "Heading 3"].map((item) => (
          <MenuItem key={item} onClick={() => handleClose(item)}>
            {item}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
