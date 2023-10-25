
/* ReactElement(OBJECT) => HTML( Browser Understands )*/

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"h1"},"H1 tag is here"),
    React.createElement("h2",{id:"h2"},"H2 tag is here")])
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);