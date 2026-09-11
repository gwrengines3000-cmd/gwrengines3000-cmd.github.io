const navStyle = {
    display: "flex",
    justifyContent: "space-around",
}


const Nav = () => {
	return <nav style={navStyle}>
        <a href="#">Home</a> 
        <a href="#">Projects</a>
        <a href="#">Contact</a>
    </nav>

}

export default Nav
