import { Box, CardMedia } from "@mui/material";
import { CSSProperties } from "react";

export default function CardIcon({ path, name, style }: { path: string, name: string, style?: CSSProperties }) {
  return (
    <>
      <CardMedia component="img" image={path} alt={name} sx={{ backgroundColor: 'unset', maxWidth: 400, maxHeight: 400, ...style }} />
    </>
  );
}
