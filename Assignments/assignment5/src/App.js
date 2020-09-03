import React from 'react';

// import * as ReactDOM from 'react-dom';
import './App.css';
import Checkbox from './checkbox';


const items = [
  'HTML,CSS,JS',
  'Angular 8',
  'ExpressJS',
  'SASS',
  'React JS',
  'Node JS',
  'ESS,ES6,ES7..',
  'Veu JS',
  'MangoDB',
  'Bootstrap',
  'TypeScript'
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      assname: "",
      assid: "",
      proid: "",
      comm: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
        let fields = {};
        fields["username"] = "";
        fields["associateid"] = "";
        fields["projectid"] = "";
        fields["emailid"] = "";
        fields["mobileno"] = "";
        fields["comment"] = "";
        fields["filename"]= "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter the Associate Name.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Accepts Alphabets,space and Min 5 to Max 30 char only.";
      }
    }

    if(!fields["associateid"]){
      formIsValid = false;
      errors["associateid"] = "*Please enter the Associate Id.";
    }
    if (typeof fields["associateid"] !== "undefined") {
      if (!fields["associateid"].match(/^[0-9\b]+$/)) {
        formIsValid = false;
        errors["associateid"] = "*Invalid Associate Id accepts only numeric.";
      }
    }

    if(!fields["projectid"]){
      formIsValid = false;
      errors["projectid"] = "*Please enter the Project Id.";
    }

    if (typeof fields["projectid"] !== "undefined") {
      if (!fields["projectid"].match(/^[^* | " : < >  [ ] { } ` ( ) '' ; @ & $]+$/)) {
        formIsValid = false;
        errors["projectid"] = "*Invalid Project Id and does not contain special characters.";
      }
    }


    if (!fields["comment"]) {
      formIsValid = false;
      errors["comment"] = "*Please enter your comments.";
    }

    if (!fields["filename"]){
      formIsValid = false;
      errors["filename"] = "*Please upload Profile Picture";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  } 
  createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  handleInputChange1 = (e) =>{
    this.setState({assname: e.target.value1});
  }
  cancelCourse = () =>{
    
    this.setState({
      assname: "",
      assid:"",
      proid:"",
      comm:""
    });
    
  }

  //File
  // $('#chooseFile').bind('change', function () {
  //   var filename = $("#chooseFile").val();
  //   if (/^\s*$/.test(filename)) {
  //     $(".file-upload").removeClass('active');
  //     $("#noFile").text("No file chosen..."); 
  //   }
  //   else {
  //     $(".file-upload").addClass('active');
  //     $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
  //   }
  // });
  

render() {
  return (
  <div id="main-registration-container">
   <div id="register">
      <h3>Form Validation</h3>
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <label>Name</label>
      <input type="text" name="username" minLength="5" maxLength="30" value={this.state.fields.username} value1={this.state.assname} onChange={this.handleChange}  placeholder="Associate Name" />
      <div className="errorMsg">{this.state.errors.username}</div>
      <label>Associate Id:</label>
      <input type="text" name="associateid" minLength="6" maxLength="6" value={this.state.fields.associateid} value1={this.state.assid} onChange={this.handleChange} placeholder="Associate Id"  />
      <div className="errorMsg">{this.state.errors.associateid}</div>
      <label>Project Id:</label>
      <input type="text" name="projectid" minLength="12" maxLength="12" value={this.state.fields.projectid} onChange={this.handleChange}placeholder="Project Id"/>
      <div className="errorMsg">{this.state.errors.projectid}</div>
      <div className="radiobutton">
        <input type="radio" value="offshore" name="loc" /> Offshore
        <input type="radio" value="onshore" name="loc" /> Onshore
      </div>
      
      <div className="specifiedlocation">
      <select id="location" name="location" placeholder="Select Location">
        <option value="1">Chennai</option>
        <option value="2">Bangalore</option>
        <option value="3">Hyderabad</option>
        <option value="4">Pune</option>
        <option value="5">Kochi</option>
        <option value="6">US</option>
        <option value="7">Non US</option>
      </select>
      </div>

      <div className="row-2">
          <div className="col-sm-12">           
              <p className="box">{this.createCheckboxes()}</p>
          </div>
        </div>

        <label>Upload Profile</label>
        <div class="file-upload">
          <div class="file-select">
              
              <div class="file-select-button" id="fileName" name="filename" required>Choose File</div>
              <div class="file-select-name" id="noFile">No file chosen...</div> 
              <input type="file" name="chooseFile" id="chooseFile" />
          </div>
        </div>
        <div className="errorMsg">{this.state.errors.filename}</div>

      <label>Comments</label>
      <input type="textarea" name="comment" value={this.state.fields.comment} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.comment}</div>
      <div className="buttontypes">
      <input type="submit" className="button1"  value="Register"/>
      <input type="button" className="button2" name="cancelCourse" onClick={this.cancelCourse} value="Reset"  />
      </div>
      </form>
  </div>
</div>

    );
}


}

export default App;
