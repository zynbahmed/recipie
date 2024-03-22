import { useState, useEffect } from "react"

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      )
    
      const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("dark")
        } else {
          setTheme("light")
        }
      }
    
      useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
      }, [theme])
return (
    <div>
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={theme === "light" ? false : true}
          value="synthwave"
          className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
        />
    </div>
)

}

export default ThemeToggle