import React from "react";

import axios from "axios";



class Form extends React.Component{


    
    constructor (props){
        super(props);
        this.state={
            displayName:'',
            lon:'',
            lat:'',
            mapFlag:false,
            error:true
            
        }
    }


    getLocationDate = async (e) => {
        e.preventDefault();
        const Key =  "pk.10357c1ba2083965ce77883210d40fcd";
        const Name =e.target.cityName.value; 
        
        const URL =`https://us1.locationiq.com/v1/search?key=${Key}&q=${Name}&format=json`;
    

        try {
            let resResult= await axios.get(URL);
            this.setState=({
                displayName:resResult.data[0].display_name,
                lon :resResult.data[0].lon,
                lat :resResult.data[0].lat,
                mapFlag:true
                
            })
        }
        catch{
            this.setState({
            error:true,
            
        });
    }

}


    render(){
        return(
            <div>
                <form onSubmit={this.getLocationDate}>
                <input type="text" name="cityName" placeholder='Enter city'></input>
                <button type='submit'>Explor!</button>
            </form>
            
           <h3> displayName:{this.state.displayName}</h3>
            <h3>lon:{this.state.lon}</h3>
            <h3>lat:{this.state.lat}</h3>
            {this.state.mapFlag && <img src={`https://maps.locationiq.com/v3/staticmap?key=${
              this.state.key}&center=${this.state.lat},${this.state.lon}&zoom=${18}&size=610x300`}></img>}
            
            {this.state.error && <h4>sorry something wrong!</h4>}
 
             </div>

        )
    }
}
export default Form;
    