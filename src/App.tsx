import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
    </Router>
  );
}
