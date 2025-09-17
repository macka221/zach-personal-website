import { ICardInfo } from "@/types/i-card-info.interface";

export default function ContactSection() {
  const linkIconInformaation: ICardInfo[] = [];
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
      I am the contacts section
    </div>
  );
}

