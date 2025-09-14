import NavBarButton from "../Buttons/Button";

export default function ButtonCollection({ menuItems }: { menuItems: { title: string, link: string }[] }) {
  return (
    <div className="button-collection" style={{ display: 'flex', alignItems: 'center' }}>
      {menuItems.map((item, index) => <NavBarButton buttonText={item.title} key={item.title} style={{ marginTop: '2%', marginLeft: index === 0 ? 0 : -20 }} />)}
    </div>
  )
}
