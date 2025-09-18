import { Button, CardActions, Link, Typography } from "@mui/material";
import { CSSProperties } from "react";

export default function LinkButton({ link, style }: { link: string, style?: CSSProperties }) {
  return (
    <CardActions sx={{ ...style }}>
      <Button
        variant="contained"
        style={{
          backgroundColor: '#2FE517',
          borderRadius: 10,
        }}
      >
        <Link
          href={link}
          underline="none"
        >
          <Typography
            sx={{
              alignItems: 'center',
              color: 'black',
              fontSize: 24,
              fontFamily: 'times new roman',
            }}
          >
            Click  Me
          </Typography>
        </Link>
      </Button>
    </CardActions>
  );
}
