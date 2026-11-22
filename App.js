{/* <div id="" parent>
    <div id="parent-1">
        <h1>Hello</h1>
        <h2>Hi</h2>
    </div>


    <div id="parent-2">
        <h1>Hello</h1>
        <h2>Hi</h2>
    </div>
</div> */}



const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "parent-1" },
        [
            React.createElement("h1", {}, "Hello"),
            React.createElement("h2", {}, "Hi")
        ]),
    React.createElement("div", { id: "parent-2" },
        [
            React.createElement("h1", {}, "Hello"),
            React.createElement("h2", {}, "Hi")
        ])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);