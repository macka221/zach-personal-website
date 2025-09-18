import { Typography } from "@mui/material";

export default function Footer() {
  // TODO: Make a nicer footer.
  return (
    <div
      className="footer"
      style={{
        backgroundColor: '#1E1E1E',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 20,
        fontSize: 60,
        color: '#2FE517',
        fontWeight: 'bold'
      }}
    >
      <Typography sx={{ fontSize: 40, fontWeight: 'bold' }}>
        Thanks For Coming!
      </Typography>

    </div>
  )
}
