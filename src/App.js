import React, { Component } from 'react';
import ArrowDown from './downArrow.png';
import Graduate from './graduate.png';
import English from './english.png';
import Teacher from './teacher.png';
import Apple from './apple.png';
import Stop from './stop.png';
import Thailand from './thailand.png';
import TukTuk from './tuktuk.png';
import StudentTeacher from './studentteach.png';
import School from './school.png';
import Programmer from './programmerGirl.png';
import Card from './card.png';
import Event from './event.png';
import Tracker from './tracker.png';
import Cat from './gitcat.png'
import Computer from './computer.png';
import Wheel from './wheel.png';
import Linked from './linked.png';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Pre-name">
          <div className="Pre-name1">the</div>
          <div className="Pre-name2">Resume</div>
          <div className="Pre-name3">of</div>
          </div>
          <div className="Name">
          <div className="Name1">A</div>
          <div className="Name2">S</div>
          <div className="Name3">H</div>
          <div className="Name4">L</div>
          <div className="Name5">E</div>
          <div className="Name6">Y</div>
          </div>
        </header>
        <div className="Sections">
          <a className="CCLabel" href="#College-finder" style={{textDecoration: 'none'}}>College<br/>&<br/>Career</a>
          <a className="ProjectsLabel" href="#Start-Projects-Section" style={{textDecoration: 'none'}}>Projects</a>
          <a className="ContactLabel" href="#FindMeStart-section" style={{textDecoration: 'none'}}>Contact <br/> Me</a>
        </div>
        <div className="CollegeSection">
          <College/>
        </div>
        <div className="BigSpace">
          <img className="Stop" src={Stop}></img>
          <div className="Choice">Career Choice</div>
          <div className="TeacherCard">
            <img className="TeacherPhoto" src={Teacher}></img>
            <div className="TeacherTitle">Teacher</div>
              <img className="Apple" src={Apple}></img>
              <p className="Certification">Certification <br/> Required</p>
          </div>
        </div>
        <Career/>
        <Change/>
        <Projects/>
        <FindMe/>
      </div>
    );
  }
}

class College extends Component {
  
  render() {
    return (
      <div className="College-section">
        <header className="Start-section" id="College-finder">
          <img className="DownArrow" src={ArrowDown}></img>
          <header className="PathTitle">Start College</header>
        </header>
        <div className="Space">
          <div className="UCLAcard">
            <div className="UCLAtitle">UCLA</div>
            <img className="GraduationPic" src={Graduate}></img>
            <div className="UCLAdegree"><strong>Degree Earned:</strong> B.A. in English</div>
          </div>
        </div>
        <div className="ThailandSpace">
          <div className="ThailandTopSection">
            <img className="TukTuk" src={TukTuk}></img>
            <p className="ThailandInstructions">Teach <br/> in <br/> Thailand</p>
            <img className="ThailandPic" src={Thailand}></img>
          </div>
          <div className="ThailandAssignmentCard">
            <div className="AssignmentTitle">Assignment Card</div>
            <div className="Location"><strong>Location:</strong> Phanomsarakham School, Thailand</div>
            <div className="Length"><strong>Assignment Length:</strong> Oct. 2013 - Feb. 2014</div>
            <div className="Role"><strong>Role:</strong> ELD/Geography Elective Instructor</div>
            <p className="Responsibilities">
            <strong>Responsibilities:</strong> <br/>
              +Created multimedia presentations to help students learn through colorful pictures and animations<br/>
              +Developed daily lesson plans that utilized EL instructional strategies <br/>
              +Designed interactive geography lessons for multiple grade levels <br/>
              +Participated in cultural unity activities with the staff and students
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class Career extends Component {
  
  render() {
    return (
      <div className="Career-section">
        <div className="Space">
          <div className="CSUNcard">
            <div className="CSUNtitle">CSUN</div>
            <img className="EnglishPic" src={English}></img>
            <p className="CSUNdegree"><strong>Certification Earned:</strong> <br/> Single Subject Teaching Credential, English</p>
          </div>
        </div>
        <div className="HighSchoolSpace">
          <div className="HighSchoolTopSection">
            <img className="SchoolPhoto" src={StudentTeacher}></img>
            <p className="SchoolInstructions">Student<br/>Teach</p>
          </div>
          <div className="StudentTeachAssignmentCard">
            <div className="StudentTeachAssignmentTitle">Assignment Card</div>
            <div className="Location"><strong>Location:</strong> Granada Hills Charter High School</div>
            <div className="Length"><strong>Assignment Length:</strong> August 2015 - Dec 2015</div>
            <div className="Role"><strong>Role:</strong> 11th Grade English Student Teacher</div>
            <p className="Responsibilities">
            <strong>Responsibilities:</strong> <br/>
              + Utilized Google Classroom to administer assignments, give essay and journal feedback, and present educational media to students<br/>
              + Practiced multimodal teaching methods to increase student engagement and student understanding<br/>
            </p>
          </div>
        </div>
        <header className="Start-section">
          <img className="DownArrow" src={ArrowDown}></img>
          <header className="PathTitle">Start Career</header>
        </header>
        <div className="HighSchoolSpace">
          <div className="HighSchoolTopSection">
            <img className="SchoolPhoto" src={School}></img>
            <p className="SchoolInstructions">Teach <br/> High School</p>
          </div>
          <div className="HighSchoolAssignmentCard">
            <div className="HighSchoolAssignmentTitle">Assignment Card</div>
            <div className="Location"><strong>Location:</strong> Los Angeles Senior High School</div>
            <div className="Length"><strong>Assignment Length:</strong> August 2016 - June 2018</div>
            <div className="Role"><strong>Role:</strong> English/Drama Teacher</div>
            <p className="Responsibilities">
            <strong>Responsibilities:</strong> <br/>
              + Utilized Schoology software to input grades, give online assignments, and contact parents <br/>
              + Applied mastery teaching techniques to promote and develop a growth mindset within students <br/>
              + Prepared daily, weekly, and unit lesson plans
            </p>
            <p className="Extracurriculars">
            <strong>Extracurriculars: </strong><br/>
              + ASB Advisor: Organized, promoted, and ran school events <br/>
              + Drama Advisor: Casted, scheduled, and ran student performances
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class Change extends Component {
  render() {
    return (
      <div className="ChangeBigSpace">
          <img className="Stop" src={Stop}></img>
          <div className="Choice">Career Change</div>
          <div className="CoderCard">
            <img className="CoderPhoto" src={Programmer}></img>
            <div className="ComputerTitle">Programmer</div>
              <img className="Computer" src={Computer}></img>
          </div>
        </div>
    );
  }
}

class Projects extends Component {
  render() {
    return(
      <div className="ProjectsSection">
        <header className="Start-Projects-Section" id="Start-Projects-Section">
          <img className="DownArrow" src={ArrowDown}></img>
          <header className="PathTitle">Projects</header>
        </header>
        <div className="Space">
          <a href="https://glacial-inlet-67939.herokuapp.com/"><img className="EventPic" src={Card}></img></a>
          <header className="ProjectTitle">Interactive Christmas Card</header>
          <a href="https://github.com/coyotegremlin312/Christmas-Card"><img className="GitLogo" src={Cat}></img></a>
        </div>
        <div className="Space">
          <a href="https://the-financial-tracker.herokuapp.com/"><img className="EventPic" src={Tracker}></img></a>
          <header className="ProjectTitle">The Financial Tracker</header>
          <a href="https://github.com/coyotegremlin312/The-Financial-Tracker"><img className="GitLogo" src={Cat}></img></a>
        </div>
        <div className="Space">
          <a href="https://peaceful-forest-71977.herokuapp.com/"><img className="EventPic" src={Event}></img></a>
          <header className="ProjectTitle">Event Planner</header>
          <a href="https://github.com/coyotegremlin312/Event-Planner"><img className="GitLogo" src={Cat}></img></a>
        </div>
      </div>
    )
  }
}

class FindMe extends Component {
  render() {
    return(
      <div className="FindMeSection">
        <div className="FindMeStart-section" id="FindMeStart-section">Contact Me</div>
        <div className="FindMeBigSpace">
          <a href="https://www.linkedin.com/in/ashleybrown121389/" className="Linked"><img className="linked" src={Linked}/></a>
          <img className="Wheel" src={Wheel}/>
        </div>
      </div>
    )
  }

}
export default App;
