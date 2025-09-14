import ProfilePhoto from "./ProfilePhoto";
import WelcomeMessage from "./WelcomeMessage";

export default function TaglineSection() {
  return (
    <div
      className="tagline-section"
      style={{
        backgroundImage: 'url(/background/NES-gameplay.gif)',
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
      <ProfilePhoto />
      <WelcomeMessage />
    </div>
  )
}
