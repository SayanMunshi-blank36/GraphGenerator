import { useState, useEffect, useMemo } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState("");

  const [graphType, setGraphType] = useState(1);

  const graphDataFn = (e) => {
    setGraphData(e.target.value);
  };

  const userData = {
    labels: useMemo(() => data.map((data, id) => id + 1), [data]),
    datasets: [
      {
        label: "Input Data",
        data: useMemo(() => data.map((data) => data), [data]),
        backgroundColor: useMemo(
          () =>
            data.map(
              (data, id) => `#${Math.floor(Math.random() * 899999 + 100000)}`
            ),
          [data]
        ),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  useEffect(() => {
    const d = graphData.split(" ");
    setData(d);
  }, [graphData]);

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
            value={graphData}
            onChange={(e) => graphDataFn(e)}
          />
        </div>
        {/* The button to open modal */}
        <label
          htmlFor="my-modal"
          className={`btn mt-10 border-none outline-none ${
            graphData === "" && "btn-disabled"
          }`}
        >
          Generate Graph
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal w-screen">
          <div className="modal-box w-screen flex flex-col items-center">
            <h3 className="font-bold text-2xl text-center mb-5">
              Generated Graph
            </h3>
            <div className="tabs tabs-boxed py-5 bg-transparent">
              <a
                onClick={() => setGraphType(1)}
                className={`tab ${graphType === 1 && "tab-active"}`}
              >
                Line Graph
              </a>
              <a
                onClick={() => setGraphType(2)}
                className={`tab ${graphType === 2 && "tab-active"}`}
              >
                Bar Graph
              </a>
              <a
                onClick={() => setGraphType(3)}
                className={`tab ${graphType === 3 && "tab-active"}`}
              >
                Pie Chart
              </a>
            </div>
            {!userData ? (
              "No Data Found"
            ) : (
              <>
                {graphType === 1 && (
                  <p className="w-full">
                    <LineChart chartData={userData} />
                  </p>
                )}
                {graphType === 2 && (
                  <p className="w-full">
                    <BarChart chartData={userData} />
                  </p>
                )}
                {graphType === 3 && (
                  <p className="w-1/2">
                    <PieChart chartData={userData} />
                  </p>
                )}
              </>
            )}
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
