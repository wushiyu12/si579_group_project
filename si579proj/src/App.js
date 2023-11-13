import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import CourseCard from './component/CourseCard';
import NavBar from './component/NavBar';
import CourseCardArea from './component/CourseCardArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>This is the start of our work</h2>
          <a>
          <NavBar/>
          {/* <CourseCard code={courseList[0]['code']} title={courseList[0]['Course Title']}/> */}
          <CourseCardArea/>
          </a>
          </div>
      </header>
    </div>
  );
}

export default App;
