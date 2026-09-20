import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Rating from './components/Rating.jsx'
import MovieList from './components/MovieList.jsx' 

const sectionStyle = {
  margin: "2rem",
  padding: "1rem",
  borderRadius: "8px",
  maxWidth: "600px",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  listStyleType: "none",
}

const favoriteBooks = [
  "DC: The New Frontier",
  "Percy Jackson & the Olympians Series",
  "The Adventures of Huckleberry Finn",
  "Legendborn",
]
const App = () => {
  return (
    <div>
      <Header title="JavaScript: The Next Level" subtitle="A Steve Ramirez Journey" />
      <Nav/>
      <main>
        <section style={sectionStyle}>
          <h2>About Me</h2>
          <p>My name is Stephen Ramirez, but just call me Steve. I am a 2nd year student here at Fox Valley Tech, in the IT program. Over my time here, I have developed a passion for web development and programming. While the process can be tedious at first, the end results are incredibly satisfying. Here you'll find a hub of the projects I'm working on this year. I hope you enjoy looking at them, as I enjoy making them. - Steve</p>
        </section>
        <section style={sectionStyle}>
          <h2>Favorite Books</h2>
          <ul>
            {favoriteBooks.map((book, index) => (
              <li key={index}>
                <h3>{book}</h3>
                <Rating />
              </li>
            ))}
          </ul>
        </section>
        <section style={sectionStyle}>
          <MovieList />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App