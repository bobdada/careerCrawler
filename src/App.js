import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobname: "",
      location: "",
      salary: "",
      editor: "",
      message: "",
      terms: false,
      test: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
    <div className="App">
      <h1> Career Crawler: </h1><p> (Pursue your dream job) </p>
        <header>
          <div className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <h3><span className="navbar-item">Search the best suited job </span> </h3>
              </div>
            </nav>
          </div>
        </header>
        <div className="container">
          <div className="columns">
            <div className="column is-9">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Job Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="jobname"
                      value={this.state.jobname}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <br/> <label className="label">Location</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="location"
                      value={this.state.location}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                <br/>  <label className="label">Salary (Upto)</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      name="salary"
                      value={this.state.salary}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <br/> <label className="label">Pick the Job Category with your education level</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.editor}
                        name="editor"
                        onChange={this.handleChange}
                      >
                        <option value="it">It and Telecommunication</option>
                        <option value="finance">Banking/Insurance/Finance Service</option>
                        <option value="marketing">Marketing/Advertising/Customer Service</option>
                        <option value="teaching">Teaching/Education</option>
                        <option value="socialservice">NGO/INGO/Social Work</option>
                        <option value="legal">Legal Services</option>
                        <option value="engineer">Engineering</option>
                        <option value="media">Journalism/Editor/Media</option>
                        <option value="sales">Sales/Public relations</option>
                      </select>
                      
                    </div>
                    <div className="select2">
                    <select
                      value={this.state.editor2}
                      name="editor2"
                      onChange={this.handleChange}
                    >
                      <option value="phd">PhD</option>
                      <option value="master">Master</option>
                      <option value="bachelor">Bachelor</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="slc">SLC/SEE</option>
                      <option value="other">Others</option>
                    </select>
                    </div>
                  </div>
                </div>
                
                                <div className="field">
                                  <div className="control">
                                    <br/>
                                    <label className="label">
                                      Employment Type:
                                    </label>
                                    <label className="radio">
                                      <input
                                        type="radio"
                                        name="test"
                                        onChange={this.handleChange}
                                        value="Full Time"
                                        checked={this.state.test === "Full Time"}
                                      />
                                      Full Time
                                    </label>
                                    <label className="radio">
                                      <input
                                        type="radio"
                                        name="test"
                                        onChange={this.handleChange}
                                        value="Part Time"
                                        checked={this.state.test === "Part Time"}
                                      />
                                      Part Time
                                      </label>
                                      <label className="radio">
                                        <input
                                          type="radio"
                                          name="test"
                                          onChange={this.handleChange}
                                          value="Contract"
                                          checked={this.state.test === "Contract"}
                                        />
                                      Contract
                                    </label>
                                  </div>
                                </div>
              
                                <div className="field1">
                                  <div className="control1">
                                    <br/>
                                    <label className="label1">
                                      Entry Level:
                                    </label>
                                    <label className="radio1">
                                      <input
                                        type="radio"
                                        name="test1"
                                        onChange={this.handleChange}
                                        value="Senior Level"
                                        checked={this.state.test1 === "Senior level"}
                                      />
                                      Full Time
                                    </label>
                                    <label className="radio1">
                                      <input
                                        type="radio"
                                        name="test1"
                                        onChange={this.handleChange}
                                        value="Junior Level"
                                        checked={this.state.test1=== "Junior Level"}
                                      />
                                      Junior Level
                                      </label>
                                      <label className="radio1">
                                        <input
                                          type="radio"
                                          name="test1"
                                          onChange={this.handleChange}
                                          value="Entry Level"
                                          checked={this.state.test1 === "Entry Level"}
                                        />
                                      Entry Level
                                    </label>
                                  </div>
                                </div>
                

                <div className="field">
                  <div className="control">
                    <br/>
                    <label className="checkbox">
                      <input
                        name="terms"
                        type="checkbox"
                        checked={this.state.terms}
                        onChange={this.handleChange}
                      />
                      I agree to the{" "}
                    <a href="https://google.com">Terms and Conditions of Career Crawler</a>
                    </label>
                  </div>
                </div>


                <div className="field">
                  <div className="control">
                  <br/>  <input
                      type="submit"
                      value="Submit"
                      className="button is-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
                      </div>
        </div>
      </div>
    );
  }
}

export default App;
