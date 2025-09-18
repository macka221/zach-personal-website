import { ICardInfo } from "@/types/i-card-info.interface";
import { Box, Card, CardContent } from "@mui/material";
import CardIcon from "./CardIcon";
import LinkButton from "./LinkButton";

export default function CardWrapper({ path, url, name, style }: ICardInfo) {
  return (
    <Card sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      width: 500,
      height: 500,
      borderRadius: 10,
      justifyContent: 'space-evenly',
      display: 'flex',
    }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CardIcon path={path} name={name} style={{ ...style }} />
        <LinkButton link={url} style={{ marginTop: '20%' }} />
      </CardContent>
    </Card>
  );
}
