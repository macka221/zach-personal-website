import { Typography } from "@mui/material";


export default function Header() {
  return (
    <div className="header" style={{
      backgroundColor: '#1E1E1E',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      justifyContent: 'space-between',
      fontSize: 60,
      color: '#2FE517',
      fontWeight: 'bold'
    }}>
      <Typography
        sx={{ fontSize: 60, fontWeight: 'bold' }}
      >
        Zachar'e Lofton
      </Typography>
      {/*
        TODO: Fix this component
      <NavBar />
      */}
    </div>
  )
}
