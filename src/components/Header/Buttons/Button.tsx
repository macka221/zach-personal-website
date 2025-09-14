
export default function NavBarButton({ buttonText, style }: { buttonText: string, style?: React.CSSProperties }) {
  return (
    <button style={{
      color: 'black',
      paddingLeft: 0,
      background: 'none',
      border: 'none',
      ...style,
    }}>
      <svg width='120' height='40'>
        <filter id='shadow' x='20%' y='-20%' width='140%' height='140%'>
          <feDropShadow dx='0' dy='2' stdDeviation='2' floodColor='#000' floodOpacity='0.2' />
        </filter>
        <polygon
          points='110,0 50,0 0,20 50,40 110,40 110,20'
          fill='#06710D'
          stroke='black'
          strokeWidth='2'
          filter='url(#shadow)'
          rx='10'
        />
        <text x='65' y='25' textAnchor='middle' fontSize='18' fontWeight='bold'>{buttonText}</text>
      </svg>
    </button >
  )
}
