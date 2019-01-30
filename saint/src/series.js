import React, {Component} from 'react'
import apis from './api'




class Series extends Component{

  render(){
    return(
      <p> </p>

    )
    
  }
}






class Dexter extends Component{

    constructor(props){
        super(props)
          this.state={
            count:0,
            series:[],
            isLoading:false
          }
        
      }  

      componentDidMount(){
        this.setState.isLoading = true;
        apis.loadSeries().then((res)=>{
            console.log(res)
            this.setState({
              isLoading:false,
              series:res.data
      
            })
          })

      }
    


render(){

return(

            <div>
                <section id="intro" className="intro-section">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                    <img src="../images/Dexter.jpg" />
                    <section>
                        {
                            this.state.isLoading &&
                                <span>Aguarde, carregando...</span>
                    
                        }{
                            !this.state.isLoading &&
                            <p>{this.state.series.map((element)=><p>{element.description}</p> )}</p>
                        }
                            
                    </section> 
                    </div>
                  </div>
                </div>
              </section>
              <br/><br/><br/><br/>


               


            </div>



)
    
}




}





export {Dexter, Series}