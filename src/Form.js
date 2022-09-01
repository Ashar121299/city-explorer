import React from "react";
import axios from "axios";




class Form extends React.Component{


    
    constructor (props){
        super(props);
        this.state={
            displayName:'',
            lon:'',
            lat:'',
            imgUrl:'',
            mapFlag:false,
            err:'',
            error:false
            
        }
    }


    getLocationDate = async (e) => {
        e.preventDefault();
        
        const Name =e.target.cityName.value; 
        
        const URL =`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY}&q=${Name}&format=json`;
    

        try {
            let resResult= await axios.get(URL);
            this.setState=({
                displayName:resResult.data[0].display_name,
                lon :resResult.data[0].lon,
                lat :resResult.data[0].lat,
                imgUrl:`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${resResult.data[0].lat},${resResult.data[0].lon}`,
                mapFlag:true,
                error:false,
                err:''
                
            })
        }
        catch{
            this.setState({
                displayName:"",
                lon :'',
                lat :'',
                mapFlag:false,
                error:true,
                err:"something wrong !"
            
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
                   
                      <h3>Display Name : {this.state.displayName}</h3>
                      <h3>latitude :{this.state.lat}</h3>
                      <h3>longitude:{this.state.lon}</h3>
                      {this.state.imgFlag &&  this.state.imgUrl }
                      {this.state.error && this.state.err}

            
                    
        
                      
                      
                  
            
 
        </div>

        );
    }
}
export default Form;
    