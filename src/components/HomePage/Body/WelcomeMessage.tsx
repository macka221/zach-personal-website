import { Typography } from "@mui/material";

export default function WelcomeMessage() {
  return (
    <div
      className="welcome-text"
      style={{
        fontSize: 70,
        color: '#2FE517'

      }}
    >
      <Typography sx={{ fontSize: 70, fontWeight: 'bold' }}>
        Welcome To My Website!
      </Typography>

    </div>
  )
}
