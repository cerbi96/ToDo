import React from "react";
import "./style.css";



export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Task: "",
      allTasks: []
    };
  }

  dntReloadPage(event) {
    event.preventDefault();
    
 this.setState({
        currentTask:"",
        allTasks: [...this.state.allTasks,{
            text: this.state.currentTask,
            done:false
        }]
    });
  }

  nextTask(event) {
    this.setState({
      currentTask: event.target.value
    });
  }

  taskDone(event,index){

const allTasks = [...this.state.allTasks];
allTasks[index]= {...allTasks[index]};
allTasks[index].done = event.target.checked;

this.setState({
 
  allTasks
});
  }

  DeleteTask(index){

    const allTasks = [...this.state.allTasks];
    allTasks.splice(index,1);

    this.setState({
     
      allTasks
    });
  }
 
 
  render() {
    return (
        <>
        <form onSubmit={this.dntReloadPage.bind(this)}>
        
        <input
          className="newTask"
          id="newTask"
          name="newTask"
          onChange={this.nextTask.bind(this)} placeholder="Type your task here"
        />
        <button className="addTask" type="submit">Add New Task</button>
      </form>
      <ul>
          {this.state.allTasks.map((task,index)=>{
              return (
                  <>
              <li key={task.text}>{task.text}
            <input className="check" onChange={(event)=>this.taskDone(event,index)}type="checkbox"></input></li>
                <button className="deleteTask" onClick={()=> this.DeleteTask(index)}>Delete Task</button>
            
              </>
              )
          })}
      </ul>
      </>
    );
  }
}
