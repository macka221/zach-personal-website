import ProfilePhoto from "./ProfilePhoto";

export default function HomePageBody() {
  return (
    <div
      className="home-page-body"
      style={{
        backgroundImage: 'url(/background/NES-gameplay.gif)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
      }}>
      <ProfilePhoto />
    </div>
  )
}
