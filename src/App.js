import { Sidebar, Footer, MyLayout } from './components'
import './App.scss';
function App() {

  return (
    <div className="App">
      <Sidebar />
      <MyLayout />
      <Footer />
    </div>
  );
}

export default App;
