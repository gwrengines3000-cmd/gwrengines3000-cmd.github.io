import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Sections from './components/Sections.jsx'
import MovieList from './components/MovieList.jsx' 
import ThemeToggle from './components/ThemeToggle.jsx'
import ThemeProvider from './components/ThemeProvider.jsx'
import ReducerToggle from './components/ReducerToggle.jsx'
import { ReducerProvider } from './components/ReducerProvider.jsx'

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

const App = () => {
  return (
    <ThemeProvider>
      <ReducerProvider> 
        <div>
        <Header title="JavaScript: The Next Level" subtitle="A Steve Ramirez Journey" />
        <Nav/>
        <main>
          <Sections />
          <section style={sectionStyle}>
            <MovieList />
          </section>
          <section style={sectionStyle}>
            <ThemeToggle />
          </section>
          <section style={sectionStyle}>
            <ReducerToggle />
          </section>
        </main>
        <Footer />
        </div>
      </ReducerProvider>
    </ThemeProvider>
  )
}

export default App