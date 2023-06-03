import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "@material-tailwind/react";
import SideBar from './Component/SideBar';
import SearchFilter from './Component/SearchFilter'
import Body from './Component/Body';
import LeftSide from './Component/LeftSide';
function App() {
  return (
    <div className="App">
     <ThemeProvider>
     <SideBar/>
      <SearchFilter/>
      <Body/>
      {/* <LeftSide/> */}
     </ThemeProvider>
    </div>
  );
}

export default App;
