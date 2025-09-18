import { Box, CardMedia } from "@mui/material";
import { CSSProperties } from "react";

export default function CardIcon({ path, name, style }: { path: string, name: string, style?: CSSProperties }) {
  return (
    <>
      <Box>
        <CardMedia component="img" image={path} alt={name} sx={{ ...style }} />
      </Box>
    </>
  );
}

