import "./App.css";

function App() {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h1 className="mt-20 font-black text-3xl text-primary-focus">
          Simple Graph Generator
        </h1>
        <div className="form-control w-full max-w-xs mt-10">
          <label className="label mt-5">
            <span className="label-text font-semibold text-sm">
              Enter values to generate graph:{" "}
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter values separated by sapces"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label mt-5">
            <span className="label-text font-semibold text-sm">
              Select the Type of Graph you want to Generate:{" "}
            </span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
              Select the Type of Graph
            </option>
            <option>Line Graph</option>
            <option>Bar Graph</option>
            <option>Pie Chart</option>
          </select>
        </div>
        {/* The button to open modal */}
        <label
          htmlFor="my-modal"
          className="btn bg-primary mt-10 border-none outline-none"
        >
          open modal
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-xl text-center">Generated Graph</h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
