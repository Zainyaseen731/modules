import React,{Component} from "react";
import style from "./Khansa.module.css";
class Khansa extends Component{
    render(){
        return(
            <>
              <h1 className={style.txt}>Zain</h1>
            <img src={process.env.PUBLIC_URL + "/pic.jpg"} width="200px"/>  
            </>
        )
    }
}
export default Khansa;