import { useState } from 'react';
import About from './components/about';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Portfolio from './components/portfolio';
import Resume from './components/tech';

function App() {

  const [tab, setTab] = useState()

  const renderTab = () => {
    if (tab === "Portfolio") {
      return <Portfolio/>
    } else if (tab === "Technologies"){
        return <Resume />;
    } else {
        return <About />;
    }
  }
  const changeTab = (currentTab) => setTab(currentTab);
  
  return (
    <div>
      <Navbar 
        tab = {tab}
        changeTab = {changeTab}
      >
      </Navbar>
      <main>
        {renderTab()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;