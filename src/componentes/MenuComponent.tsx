import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";

const options = ["Edit", "Delete"];

const ITEM_HEIGHT = 48;

type propType = {
  btnColor:string
}

export default function Menu_Component(props:propType) {
  const {btnColor} = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{color:btnColor}}/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              backgroundImage: `url(${"src/assets/images/bg-1.svg"}),url(${"src/assets/images/bg-2.svg"})`,
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "7rem",
            },
          },
          list: {
            "aria-labelledby": "long-button",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option === "Edit" && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon icon="material-symbols:ink-pen-rounded" width="20" />
                <Typography>Edit</Typography>
              </Box>
            )}
            {option === "Delete" && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "red",
                }}
              >
                <Icon icon="ic:round-delete" width="20" />
                <Typography>Delete</Typography>
              </Box>
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
