import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
	const [themeMode, setThemeMode] = useState("light");
	const darkTheme = () => {
		setThemeMode("dark");
	};
	const lightTheme = () => {
		setThemeMode("light");
	};

	useEffect(() => {
		document.querySelector("html").classList.remove("light", "dark");
		document.querySelector("html").classList.add(themeMode);
	}, [themeMode]);

	return (
		<ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
			<div className="flex flex-col min-h-screen justify-center items-end max-w-[400px] mx-4">
				<ThemeBtn />
				<Card />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
