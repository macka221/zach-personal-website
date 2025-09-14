import NavBar from "./NavBar/NavBar";


export default function Header() {
  return (
    <div className="header" style={{
      backgroundColor: '#1E1E1E',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      justifyContent: 'space-between',
      fontSize: 60,
      color: '#2FE517',
      fontWeight: 'bold'
    }}>
      {'Zachar\'e Lofton'}
      <NavBar />
    </div>
  )
}
