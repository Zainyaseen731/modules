import React,{Component} from "react";
import Khansa from "./Khansa";
import style from "./Student.module.css";
class Student extends Component{
    render(){
        return(
            <div>
            <button className="btn btn-danger">zain</button>
            <h1 className={style.txt}>Khansa</h1>
            <Khansa/>
           
            </div>

        )
    }
}
export default Student;
// this is my comment
