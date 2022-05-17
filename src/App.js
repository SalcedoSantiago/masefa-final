import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Masefa from './demos/Masefa';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/thank-you">
          <ThankYouPage />
        </Route> */}
        <Route path="/" element={<Masefa />} >
        </Route>
      </Routes>
    </Router>
  );
}

