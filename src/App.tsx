import { useReactToPrint } from 'react-to-print';
import './App.css';
import { Resume } from './resume';
import { useRef } from 'react';

function App() {
  const ResumeRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => ResumeRef.current,
  }); 

  return (
    <div className='body'>
      <button className='btn' onClick={handlePrint}>Print</button>
      <div className="view">
        <div ref={ResumeRef}>
          <Resume />
        </div>
      </div>
    </div>
  )
}

export default App
