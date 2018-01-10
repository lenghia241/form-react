import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor (props) {
        super(props);
        this.state= {
            txtUsername: '',
            txtPassword: '',
            txtDesc: '',
            sltGender: 0,
            rdLang: 'en',
            checkTerm: true
        };

        this.onHandleChange=this.onHandleChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }

    onHandleChange (event) {
        let target = event.target;
        let name = target.name;
        let value =  target.type === 'checkbox'? target.checked : target.value;
        this.setState ({
            [name]: value
        });
    }

    onFormSubmit (event) {
        event.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
      <div className="container-fluid mg-30">
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              
          
              <div className="panel panel-primary">
                  <div className="panel-heading">
                      <h3 className="panel-title">Form</h3>
                  </div>

                  <div className="panel-body">

                      <form onSubmit={this.onFormSubmit}>
                          
                      
                          <div className="form-group">
                              <label>Username: </label>
                              <input type="text" 
                              className="form-control"
                              name="txtUsername"
                              onChange={this.onHandleChange}
                              value={this.state.txtUsername}
                              />
                          </div>

                          <div className="form-group">
                              <label>PassWord: </label>
                              <input type="password" 
                              className="form-control"
                              name="txtPassword"
                              onChange={this.onHandleChange}
                              value={this.state.txtPassword}
                              />
                          </div>

                          <div className="form-group">
                              <label>Description: </label>
                              <textarea name="txtDesc" 
                                        className="form-control"
                                        onChange={this.onHandleChange}
                                        value={this.state.txtDesc}
                                ></textarea>
                          </div>
                        
                        <label>Gender: </label>
                        <select name="sltGender" className="form-control" value={this.state.sltGender} onChange={this.onHandleChange}>
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                        </select>

                        <br/>

                        <label>Language: </label>
                        <div className="radio">
                            <label>
                                <input type="radio"
                                name="rdLang"
                                value="fn"
                                onChange={this.onHandleChange}
                                checked = {this.state.rdLang==="fn"}
                                />
                                Finnish
                            </label>
                        </div>

                        <div className="radio">
                            <label>
                                <input type="radio" 
                                    name="rdLang"
                                    value="en"
                                    onChange={this.onHandleChange}
                                    checked = {this.state.rdLang==="en"}
                                    />
                                English
                            </label>
                        </div>

                        <div className="checkbox">
                            <label>
                                <input type="checkbox"
                                        name="checkTerm"
                                        value={true}
                                        onChange={this.onHandleChange}
                                        checked = {this.state.checkTerm===true}
                                        />
                                I agree with terms & conditions
                            </label>
                        </div>

                        <br/>

                          <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
                          <button type="reset" className="btn btn-primary">Clear</button>

                      </form>
                  </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
