import './App.css';

function App({counterApp, incrementContainerCounter}) {
  console.log('counterApp', counterApp)
  return (
    <div className="App">
      <div className='container'>
        <div className='mb-3'>
          MFE
        </div>
        <input className='mb-3' value={counterApp} disabled type="number" />
        <button onClick={() => incrementContainerCounter()}>Increment</button>
      </div>
    </div>
  );
}

export default App;
