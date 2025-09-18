import { ICardInfo } from "@/types/i-card-info.interface";
import { Box, Card, CardContent } from "@mui/material";
import CardIcon from "./CardIcon";
import LinkButton from "./LinkButton";

export default function CardWrapper({ path, url, name, style }: ICardInfo) {
  return (
    <div
      className="card-wrapper"
      style={{
      }}
    >
      <Card>
        <Box>
          <CardContent>
            <CardIcon path={path} name={name} style={{ ...style }} />
            <LinkButton link={url} />
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}
