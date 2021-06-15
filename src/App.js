
import './App.css';
import './Style.css';
import mySrcImage from "./imageInSrc.jpg";
function App() {
    return (
      <div>
        <div >
          <h1 className="title">Your First name here</h1>
          <h1 className="red">Your Last name here</h1>
          <br />
          <img src={mySrcImage} alt='imageInSrc' />
          <br />
          <img src="/imageInPublic.jpg" />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

export default App;
