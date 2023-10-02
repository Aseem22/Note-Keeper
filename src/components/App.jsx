import React from "react";
import Header from "./header";
import Footer from "./Footer";
import Notes from "./Notes";
import notes from "../../notes";

function createNotes(x) {
  return <Notes key={x.key} title={x.title} content={x.content} />;
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}
export default App;
