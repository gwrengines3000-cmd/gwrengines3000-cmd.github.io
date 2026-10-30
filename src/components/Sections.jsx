import { useContext } from 'react'
import { SectionContext } from './ReducerProvider.jsx'
import Rating from './Rating.jsx'

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

const Sections = () => {
  const { state } = useContext(SectionContext)

  return (
    <>
      {state.showAbout && (
        <section style={sectionStyle}>
          <h2>About Me</h2>
          <p>My name is Stephen Ramirez, but just call me Steve. I am a 2nd year student here at Fox Valley Tech, in the IT program. Over my time here, I have developed a passion for web development and programming. While the process can be tedious at first, the end results are incredibly satisfying. Here you'll find a hub of the projects I'm working on this year. I hope you enjoy looking at them, as I enjoy making them. - Steve</p>
        </section>
      )}
      {state.showFavorites && (
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
      )}
      {state.showContact && (
        <section style={sectionStyle}>
          <h2>Contact</h2>
          <p>Email: gwramirez@example.com</p>
        </section>
      )}
    </>
  )
}

export default Sections
