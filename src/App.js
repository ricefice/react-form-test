import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Form Test
      </header>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
        }}>
          <div>
            {
              ['1', '10', '100'].map(val => (
                <button
                  key={val}
                  onClick={(e) => {
                    console.log(val)}
                  }
                >{val}</button>
              ))
            }
          </div>
          <div>
            <input
              type='string'
              // onKeyDown={e => e.preventDefault}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
