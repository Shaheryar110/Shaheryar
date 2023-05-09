import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import SailingIcon from "@mui/icons-material/Sailing";
// import { useRouter } from "next/router";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Appbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        transition: "all 0.5s",
        alignItems: "center",
        position: "absolute",
        top: "0",
        width: { xs: "90%", md: "90%" },
        zIndex: "500",
        padding: "2rem",
        marginX: "auto",
      }}
    >
      <Link href={"/"}>
        <Typography
          sx={{ fontSize: { sm: "1.5rem", md: "2rem" }, fontWeight: 600 }}
        >
          <SailingIcon
            sx={{ fontSize: { sm: "1.5rem", md: "2rem" }, color: "#804dee" }}
          />{" "}
          FOLIO
        </Typography>
      </Link>
      <Stack
        spacing={3}
        direction="row"
        sx={{
          display: { xs: "none", md: "flex" },
          ">p": {
            cursor: "pointer",
            zIndex: "1",
            // color: isBottom && router.pathname === "/" && "black",
            ":hover": {
              color: "var(--primary)",
            },
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "1.3rem",
            ":hover": {
              color: "var(--primary)",
            },
          }}
        >
          Projects
        </Typography>
        <Typography
          sx={{
            fontSize: "1.3rem",
            ":hover": {
              color: "var(--primary)",
            },
          }}
        >
          Skills
        </Typography>
      </Stack>

      <IconButton
        onClick={() => setOpenDrawer(true)}
        sx={{ display: { md: "none" }, fontSize: "2rem" }}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>

      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          ".MuiPaper-root": { backgroundColor: "black" },
          display: { md: "none" },
        }}
      >
        <Box
          sx={{ width: 250, backgroundColor: "#434242", height: "100vh" }}
          role="presentation"
          onClick={() => setOpenDrawer(false)}
          onKeyDown={() => setOpenDrawer(false)}
        >
          <List
            sx={{
              marginTop: "2rem",
              padding: "1rem",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={"Pricing"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={"Dashboard"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Stack>
  );
}

export default Appbar;
