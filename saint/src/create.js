import React, {Component} from 'react'
import apis from './api'

class Create extends Component{

    constructor(props){
        super(props)
          this.state={
            count:0,
            statusSerie:[],
            isLoading:false
          }
        
      }  

      componentDidMount(){
        this.setState.isLoading = true;
        apis.loadSeries().then((res)=>{
           
            this.setState({
              isLoading:false,
              statusSerie:res.data
      
            })
          })

      }
    


render(){

    return(
        <section className="intro-section">

            <h1>Cadastrar nova série</h1>
            <form>
                {/* <ul> */}
                       <li>
                        Nome: &nbsp; <input type="text" class-Name="form-control" /> 
                     </li>  
                     <br/>
                     <li>
                         Genero: &nbsp; <input type="text" class-Name="form-control" />
                    </li>
                    <br/>
                    <li>
                         Status: &nbsp; <input type="text" class-Name="form-control" />
                    </li>
                    <br/>
                    <li>
                          Comentários: &nbsp; <input type="text" class-Name="form-control" />
                    </li>
                    <br/>
                {/* </ul> */}
            </form>
        </section>
    )
}


}



export default Create