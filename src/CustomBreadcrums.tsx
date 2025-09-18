import { Breadcrumbs, Link, styled, Typography } from "@mui/material";

type Props = {
  name: string[];
  link: string[];
  current_component: string;
};

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

const CustomBreadcrumb = (props: Props) => {
  const { name, link, current_component } = props;
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href={link[0]}
      onClick={handleClick}
      sx={{ fontSize: "14px", fontWeight: "600px", color: "#000" }}
    >
      {name[0]}
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href={link[1]}
      onClick={handleClick}
      sx={{ fontSize: "14px", fontWeight: "600px", color: "#000" }}
    >
      {name[1]}
    </Link>,
    <Typography key="3" sx={{ color: "#637381", fontSize: "14px" }}>
      {current_component}
    </Typography>,
  ];

  return (
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
  );
};

export default CustomBreadcrumb;
