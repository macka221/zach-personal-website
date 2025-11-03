'use client';

import { Button, Grid } from "@mui/material";
import InputFieldWrapper from "./InputField";
import { useState } from "react";
import { SendEmailService } from "@/service/send-email.service";
import { sendEmailProxy } from "@/service/send-email.proxy";

export default function ContactSection() {
  const emailApi = new SendEmailService();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div
      className="body-contact-section"
      style={{
        backgroundImage: 'url(/background/ff-tactivs.gif)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        margin: 0,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'

      }}
    >
      <Grid container spacing={2} style={{ width: '80%' }}>
        <Grid size={{ xs: 8, md: 6 }}>
          <InputFieldWrapper fieldName="Name" placeholder="John Doe" callBack={(value: string) => setName(value)} divider={false} />
        </Grid>
        <Grid size={{ xs: 8, md: 6 }}>
          <InputFieldWrapper fieldName="Email" placeholder="john.doe@email.com" callBack={(value: string) => setEmail(value)} divider={false} />
        </Grid>
        <Grid size={{ xs: 8, md: 6 }}>
          <InputFieldWrapper fieldName="Phone" placeholder="1234567890" divider={false} callBack={(value: string) => setPhone(value)} />
        </Grid>
        <Grid size={{ xs: 8, md: 6 }}>
          <InputFieldWrapper fieldName="Subject" placeholder="Job Opportunity" divider={false} callBack={(value: string) => setSubject(value)} />
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <InputFieldWrapper fieldName="Message" placeholder="Your message here..." divider multiline callBack={(value: string) => setMessage(value)} />
        </Grid>
        <Grid>
          <Button
            variant="contained"
            onClick={() => sendEmailProxy({ name, phone, subject, from: email, body: message })}
            style={{
              backgroundColor: '#',
              color: 'white',
              padding: '10px 20px',
              fontSize: '16px'
            }}>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </div >
  );
}

