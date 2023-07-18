"use client";

import Layout from "@/components/Layout";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import DraftsIcon from "@mui/icons-material/Drafts";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import GoogleMapReact from "google-map-react";
import Image from "next/image";
import React from "react";
import ContactImg from "../../public/contact-img.png";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactUs() {
  const [contactForm, setContactForm] = React.useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactUs = {
    email: "bkai@soict.hust.edu.vn",
    phone: "024 3869 2463",
    address: "10-th floor, B1 Building, HUST",
  };

  const mapCenter = {
    lat: 21.0045779,
    lng: 105.8467023,
  };

  const handleChangeFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contactForm);
  };

  return (
    <Layout>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "64px",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <DraftsIcon sx={{ fontSize: 120, color: "wheat" }} />
          <Typography variant="h6" fontWeight={700}>
            {contactUs.email}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <AddIcCallIcon sx={{ fontSize: 120, color: "wheat" }} />
          <Typography variant="h6" fontWeight={700}>
            {contactUs.phone}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <LocationOnIcon sx={{ fontSize: 120, color: "wheat" }} />
          <Typography variant="h6" fontWeight={700}>
            {contactUs.address}
          </Typography>
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "0 64px",
          width: "100%",
          height: "500px",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCVW3VzIBiHFUsZv9esoLXdsra4a4j_2ag" }}
          defaultCenter={mapCenter}
          defaultZoom={11}
        />
      </Container>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "0 64px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            "& > img": {
              width: "100%",
              objectFit: "contain",
            },
          }}
        >
          <Image src={ContactImg} alt="contact" />
        </Box>
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Box
            component={"form"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
            onSubmit={handleSubmitForm}
          >
            <TextField
              name="name"
              label="Your name"
              variant="outlined"
              value={contactForm.name}
              onChange={handleChangeFormInput}
            />
            <TextField
              name="email"
              label="Your email"
              variant="outlined"
              value={contactForm.email}
              onChange={handleChangeFormInput}
            />
            <TextField
              name="subject"
              label="Subject"
              variant="outlined"
              value={contactForm.subject}
              onChange={handleChangeFormInput}
            />
            <TextField
              name="message"
              label="Your message (optional)"
              variant="outlined"
              value={contactForm.message}
              onChange={handleChangeFormInput}
              multiline
              rows={6}
            />
            <Box>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  padding: "8px 32px",
                }}
              >
                SUBMIT
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
