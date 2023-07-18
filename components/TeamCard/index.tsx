import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type CardProps = {
  name: string;
  imgUrl: string;
  href: string;
};

const TeamCard = ({ name, imgUrl, href }: CardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        padding: "16px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        // when hover on the card, the card will be raised up
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
        },
        transition: "all 0.2s ease-in-out",
      }}
    >
      <Box
        onClick={() => {
          window.open(href, "_blank");
        }}
        sx={{
          "& img": {
            width: "100%",
            objectFit: "cover",
          },
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <img src={imgUrl} alt="team-member" />
      </Box>
      <Typography
        variant="body1"
        color={"black"}
        textAlign={"center"}
        sx={{
          paddingTop: "16px",
          fontWeight: "500",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default TeamCard;
