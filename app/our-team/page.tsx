"use client";

import Layout from "@/components/Layout";
import MemberCard from "@/components/MemberCard";
import TeamCard from "@/components/TeamCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Dr. John",
      imgUrl: "https://bkai.ai/wp-content/uploads/2021/05/BaoHT-2.jpg",
      position: "President",
      personalUrl: "https://google.com",
    },
    {
      name: "Dr. Jane Doe",
      imgUrl:
        "https://bkai.ai/wp-content/uploads/2021/05/Park-Dong-Jin-e1629462485582.jpg",
      position: "Vice President",
      personalUrl: "https://github.com",
    },
    {
      name: "Dr. JoDoe",
      imgUrl: "https://bkai.ai/wp-content/uploads/2021/05/BaoHT-2.jpg",
      position: "President",
      personalUrl: "https://youtube.com",
    },
    {
      name: "Dr. Jane",
      imgUrl:
        "https://bkai.ai/wp-content/uploads/2021/05/Park-Dong-Jin-e1629462485582.jpg",
      position: "Vice President",
      personalUrl: "https://google.com",
    },
  ];
  const teams = [
    {
      name: "Machine Learning",
      imgUrl: "https://bkai.ai/wp-content/uploads/2021/05/b2-300x200.jpg",
      href: "/research/machine-learning",
    },
    {
      name: "Computer Vision",
      imgUrl: "https://bkai.ai/wp-content/uploads/2021/05/b2-300x200.jpg",
      href: "/research/machine-learning",
    },
    {
      name: "Natural Language Processing",
      imgUrl: "https://bkai.ai/wp-content/uploads/2021/05/b2-300x200.jpg",
      href: "/research/machine-learning",
    },
    {
      name: "Optimization",
      imgUrl: "https://bkai.ai/wp-content/uploads/2021/05/b2-300x200.jpg",
      href: "/research/machine-learning",
    },
  ];
  return (
    <Layout>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#7A9C59",
          padding: "64px",
          maxWidth: "100% !important",
        }}
      >
        <Typography variant="h4" color={"white"}>
          Board of Directors
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "64px",
          }}
        >
          {teamMembers.map((member) => (
            <MemberCard
              key={member.name}
              name={member.name}
              imgUrl={member.imgUrl}
              position={member.position}
              personalUrl={member.personalUrl}
            />
          ))}
        </Container>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "64px",
          maxWidth: "100% !important",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            padding: "16px 0",
          }}
        >
          Research Team
        </Typography>
        <Typography variant="body1">
          We have 9 research labs with more than 50 scientists from HUST and
          other experts from universities, institutes and technology groups in
          the AI-related areas.
        </Typography>
        <Container
          sx={{
            padding: "64px",
          }}
        >
          <Grid
            container
            spacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            rowSpacing={{ xs: 1, sm: 2, md: 5 }}
          >
            {teams.map((team) => (
              <Grid item key={team.name} xs={6} md={4}>
                <TeamCard
                  name={team.name}
                  imgUrl={team.imgUrl}
                  href={team.href}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Layout>
  );
}
