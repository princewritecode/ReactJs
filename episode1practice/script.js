// const heading = React.createElement("h1", { "id": "headingMain" }, "inside heading one");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const heading = React.createElement("h1", { id: "headingMain" }, "inside heading one");
const heading2 = React.createElement("h2", { id: "headingMain" }, "inside heading two");
const container = React.createElement("div", null, heading, heading2);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(container);