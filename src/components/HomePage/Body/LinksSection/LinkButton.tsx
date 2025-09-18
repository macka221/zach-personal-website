import { Button } from "@mui/material";
import Link from "next/link";
import { CSSProperties } from "react";

export default function LinkButton({ link, style }: { link: string, style?: CSSProperties }) {
  return (
    <>
      <Button
        variant="contained"
        style={{
          backgroundColor: '#2FE517'
        }}
      >
        <Link href={`url(${link})`} style={{ color: 'black', ...style }}>
          Click Me
        </Link>
      </Button>
    </>
  );
}
