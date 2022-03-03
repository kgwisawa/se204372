import "./App.css";

function App() {
  return (
    <div className="App container">
      <h1>Employee Information</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age:{" "}
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter age"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter country"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="position" className="form-label">
              Position:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter position"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="wage" className="form-label">
              Wage:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter wage"
            />
          </div>
          <button >Add</button>
        </form>
      </div>
      <hr/>
      <div>
        <button >Show emplyees</button>
      </div>
    </div>
  );
}

export default App;
