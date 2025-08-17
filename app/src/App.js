import ThreeDViewer from './components/ThreeDViewer';
import './App.css';

function App() {
  return (
    <main className='relative w-screen h-screen bg-[#0a192f]'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <ThreeDViewer />
      </div>
    </main>
  );
}

export default App;
