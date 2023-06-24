import NavBar from "./NavBar"

const Header = ({language, changeLanguage}) => {
  return (
    <div className="static">
      <NavBar language={language} changeLanguage={changeLanguage} />
    </div>
  )
}

export default Header