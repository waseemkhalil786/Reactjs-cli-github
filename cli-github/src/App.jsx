import "./app.css";
function App() {
  return (
    <div className="colorb">
      <header className="header">
        <nav className="navbar">
          <div className="navbar-section">
            <img 
              src="https://tse3.mm.bing.net/th?id=OIP.Sfgbqcg35rCru0YB-IQwxgHaD4&pid=Api&P=0&h=220" 
              alt="" 
              className="image" 
            />
            <ul className="menu-item">
              <li><a href="#">Manual</a></li>
              <li><a href="#">Release notes</a></li>
            </ul>
          </div>
        </nav>
        <div className="home-content">
          <div className="home-content2">
            <h1 className="para">Take GitHub to the command line</h1>
            <p className="para2">GitHub CLI brings GitHub to your terminal. Free and open source.</p>
            <a href="#" className="hello">Download For Windows</a>
            <a href="#" className="hello2"><p>View installation instructions →</p></a>
          </div>
        </div>
      </header>
      <section className="main-2">
        <div className="hello3">
          <p><span className="color"> $ </span> gh release</p>
          <p className="hello5">Create a new release.</p>
        </div>
        <div className="box">
          <div className="box2">
            <h3 className="red">$ gh issue list</h3>
            <h3 className="red">Showing 4 of 4 issues in cli/cli</h3>
            <h3 className="red"><span className="green"> #16</span> Improving interactions with protected branches</h3>
            <h3 className="red"><span className="green"> #14</span> PR commands on a detached head</h3>
            <h3 className="red"><span className="green"> #13</span> Support for GitHub Enterprise (enhancement)</h3>
            <h3 className="red"><span className="green"> #8</span> Add an easier upgrade command (bug)</h3>
            <h3 className="red">- Adding alias for bugs: issue list --label="bugs" <span className="green"> ✓</span> Added alias.</h3>
            <h3 className="red">$ gh bugs</h3>
            <h3 className="red">Showing 2 of 7 issues in cli/cli that match your search</h3>
            <h3 className="red"><span className="green"> #19</span> Pagination request returns empty JSON (bug)</h3>
            <h3 className="red"><span className="green"> #21</span> Error raised when passing valid parameters (bug)</h3>
          </div>
          <div className="hello-1">
            <a href="#">View all GitHub CLI commands →</a>
          </div>
        </div>
      </section>
      <section className="main-4">
        <div className="main4">
          <h1 className="helo">Goodbye, context switching.</h1>
          <h1 className="helo">Hello, terminal.</h1>
        </div>
        <div className="main-3">
          <div className="card">
            <h2>Your entire GitHub workflow</h2>
            <p className="color2">Work with issues, pull requests, checks, releases and more.</p>
            <a href="#" className="helo2">View all GitHub CLI commands →</a>
          </div>
          <div className="card">
            <h2>Script and customize</h2>
            <p className="color2">Call the GitHub API to script almost any action, and set a custom alias for any command.</p>
            <a href="#" className="helo2">Learn about aliases and API →</a>
          </div>
          <div className="card">
            <h2>Enterprise-ready</h2>
            <p className="color2">Connect to GitHub Enterprise Server in addition to GitHub.com.</p>
            <a href="#" className="helo2">Get set up with Enterprise →</a>
          </div>
          <div className="card">
            <h2>We ❤️ community</h2>
            <p className="color2">Work with issues, pull requests, checks, releases and more.</p>
            <a href="#" className="helo2">View all GitHub CLI commands →</a>
          </div>
        </div>
      </section>
      <section>
        <div className="box5">
          <h1>Try GitHub on the command line</h1>
          <p className="he">GitHub CLI brings GitHub to your terminal. Free and open source.</p>
          <a href="#" className="hel6">Download For Windows</a>
          <br />
          <a href="#" className="hee5">View installation instructions →</a>
        </div>
      </section>
      <section className="box7">
        <div className="box8"></div>
        <div className="footer1">
          <div className="child1"><h1>GitHub</h1></div>
          <div className="child2">
            <div className="c-child2"><span>lorem</span><span>lorem</span><span>lorem</span><span>lorem</span><span>lorem</span><span>lorem</span></div>
            <div className="c-child2"><span>lorem</span><span>lorem</span><span>lorem</span><span>lorem</span><span>lorem</span><span>lorem</span></div>
            <div className="c-child2"><span>lorem</span><span>lorem</span><span>lorem</span><span>lorem</span><span>lorem</span><span>lorem</span></div>
            <div className="c-child2"><span>lorem</span><span>lorem</span><span>lorem</span><span>lorem</span><span>lorem</span><span>lorem</span></div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <h5>wkdeveloper@gmail.com</h5>
      </footer>
    </div>
  );
}

export default App;