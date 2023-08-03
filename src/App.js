// import React from "react";

// import "./App.css";

// import { Navbar } from "./component/Navbar";
// import {Main} from "./component/MainContent";
// import {Footer} from "./component/Footer";

// function App() {
//   return (
//     <body className="lg:px-10 pt-4">
//       <div className="px-8 w-full">
//         <header>
//           <Navbar />
//         </header>

//         <main>
//           <Main />
//         </main>

//         <footer>
//           <Footer />
//         </footer>
//         </div>
//     </body>
//   );
// }

// export default App;

// import React from 'react';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {

  const isRTL = true;
  return (
    <Router>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
