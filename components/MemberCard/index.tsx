import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type CardProps = {
  name: string;
  imgUrl: string;
  position: string;
  personalUrl: string;
};

const MemberCard = ({ name, imgUrl, position, personalUrl }: CardProps) => {
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
          window.open(personalUrl, "_blank");
        }}
        sx={{
          "& img": {
            width: "210px",
            height: "210px",
          },
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <img src={imgUrl} alt="team-member" />
      </Box>
      <Typography
        variant="h6"
        color={"black"}
        sx={{
          paddingTop: "16px",
          textTransform: "uppercase",
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="body1"
        color={"black"}
        sx={{
          textTransform: "uppercase",
          marginTop: "8px",
          color: "#636363",
        }}
      >
        {position}
      </Typography>
    </Box>
  );
};

export default MemberCard;
