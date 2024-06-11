import { useTheme } from "./ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={`${theme === "dark" ? "text-bg-dark" : "text-bg-light"} ${theme === "dark" ? "text-light" : "text-dark"} `} style={{ fontSize: "1.3rem",width:"100%", textAlign: "center" }}>
      Footer
    </footer>
  )
}

export default Footer
