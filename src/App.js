import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detial";

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/upstage-ui-design" element={<Home />} />
        <Route path="/upstage-ui-design/detail" element={<Detail />} />
        {/* <Route path="/upstage-ui-design/detail/:id" element={<Detail />} /> */}
      </Routes>
    </Router>
  );
}