const headerStyle = {
    textAlign: "center",
    margin: "0",
    padding: "4px",
    borderBottom: "1px solid var(--card-border-color)",
}

const Header = ({ title, subtitle }) => {
  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header> 
  )
}

export default Header 