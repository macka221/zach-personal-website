import { Grid } from "@mui/material";
import InputFieldWrapper from "./InputField";

export default function ContactSection() {
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
          <InputFieldWrapper fieldName="Name" placeholder="John Doe" divider={false} />
        </Grid>
        <Grid size={{ xs: 8, md: 6 }}>
          <InputFieldWrapper fieldName="Email" placeholder="john.doe@email.com" divider={false} />
        </Grid>
        <Grid size={{ xs: 8, md: 6 }}>
          <InputFieldWrapper fieldName="Phone" placeholder="1234567890" divider={false} />
        </Grid>
        <Grid size={{ xs: 8, md: 6 }}>
          <InputFieldWrapper fieldName="Subject" placeholder="Job Opportunity" divider={false} />
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <InputFieldWrapper fieldName="Message" placeholder="Your message here..." divider multiline />
        </Grid>
      </Grid>
    </div>
  );
}

