import './App.css';
import { Document } from 'react-pdf'

function App() {

  const filepath = 'assets/resume.pdf';

  return (
    <>
      <Document file={filepath} />
    </>
  )
}

export default App
