import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";

const Footer = () => {
  return (
    <Container
      sx={{
        padding: "60px 64px",
        display: "flex",
        borderTop: "1px solid #E5E5E5",
        justifyContent: "space-between",
        "& a": {
          textDecoration: "none",
          color: "black",
        },
      }}
    >
      <Image src={Logo} alt="logo" height={90} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          padding: "0 16px",
        }}
      >
        <Typography variant="h5">News and Seminars</Typography>
        <Link href={"/news"}>
          <Typography variant="subtitle1" sx={CustomTypoSx}>
            News
          </Typography>
        </Link>
        <Link href={"/news"}>
          <Typography variant="subtitle1" sx={CustomTypoSx}>
            Events
          </Typography>
        </Link>
        <Link href={"/seminars"}>
          <Typography variant="subtitle1" sx={CustomTypoSx}>
            Seminars
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          padding: "0 16px",
        }}
      >
        <Typography variant="h5">R&D</Typography>
        <Link href={"/our-team"}>
          <Typography variant="subtitle1" sx={CustomTypoSx}>
            Research Teams
          </Typography>
        </Link>
        <Link href={"/research"}>
          <Typography variant="subtitle1" sx={CustomTypoSx}>
            Projects/Publications
          </Typography>
        </Link>
        <Link href={"/research"}>
          <Typography variant="subtitle1" sx={CustomTypoSx}>
            Training Courses
          </Typography>
        </Link>
        <Link href={"/research"}>
          <Typography variant="subtitle1" sx={CustomTypoSx}>
            Solutions
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          padding: "0 16px",
        }}
      >
        <Typography variant="h5">Information</Typography>
        <Typography variant="subtitle1" sx={CustomTypoSx}>
          Tel: (+84) 24 3869 2463
        </Typography>
        <Typography variant="subtitle1" sx={CustomTypoSx}>
          Email: bkai@soict.hust.edu.vn
        </Typography>
        <Typography variant="subtitle1" sx={CustomTypoSx}>
          Location: Room 1001-1002, 10-th floor, B1 Building, HUST
        </Typography>
      </Box>
    </Container>
  );
};

const CustomTypoSx = {
  marginTop: "16px",
  borderBottom: "1px solid #E5E5E5",
};

export default Footer;
