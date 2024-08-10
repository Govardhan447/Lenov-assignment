import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ContentArea from './components/ContentArea'
import './App.css'

// Replace your code here
const App = () => (
  <div className="bg-container">
    <Sidebar />
    <div className="header-content-container">
      <Header />
      <ContentArea />
    </div>
  </div>
)

export default App
