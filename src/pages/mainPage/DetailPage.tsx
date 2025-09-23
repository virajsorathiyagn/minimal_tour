import { ArrowBack } from "@mui/icons-material";
import { Box, Chip, Container, IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";

export function DetailPage() {
  const navigate = useNavigate();

  const navigateToListPage = () => {
    navigate("/");
  };
  
  return (
    <>
      <Box></Box>
      <Container sx={{ maxWidth: "1200px", pt: 1, pr: 5, pb: 8, pl: 5 }}>
        <Box sx={{ mb: { xs: 3, sm: 5 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: { xs: 1.5, md: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Chip
                icon={<ArrowBack />}
                label={"Back"}
                onClick={navigateToListPage}
              ></Chip>
            </Box>
            <Box>
              <IconButton>
                <Icon
                  icon="mdi:external-link"
                  width="24"
                  height="24"
                  style={{ color: "#637381" }}
                />
              </IconButton>
              <IconButton>
                <Icon
                  icon="ic:baseline-edit"
                  width="24"
                  height="24"
                  style={{ color: "#637381" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
