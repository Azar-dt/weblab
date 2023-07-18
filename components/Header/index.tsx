import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../../public/logo.png";

const pages = [
  {
    title: "Home Page",
    href: "/",
  },
  {
    title: "Our Team",
    href: "/our-team",
  },
  {
    title: "Research",
    href: "/research",
  },
  {
    title: "Solutions",
    href: "/solution",
  },
  {
    title: "News and Events",
    href: "/news",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

const Header = () => {
  const router = useRouter();

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <Container
        sx={{
          padding: "0 64px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          color: "black",
        }}
      >
        <Box
          sx={{
            height: "90%",
            "& img": {
              height: "100%",
              width: "auto",
            },
          }}
        >
          <Image src={Logo} alt="logo" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          {pages.map((page) => (
            <Button
              key={page.href}
              onClick={() => router.push(page.href)}
              sx={{
                color: "black",
                display: "block",
                textTransform: "none",
                fontSize: "16px",
                padding: "0 24px",
              }}
            >
              {page.title}
            </Button>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
