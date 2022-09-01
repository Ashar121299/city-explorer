import React from "react"; 
import movie from "./movie";

class movies extends React.Component{
    render(){
        return (
            <div>
            {this.props.MovieData.map((item)=>{
                return (
                    <movie item={item}/>
                );

            })}
            </div>
        );
        
    }
}
export default movies;