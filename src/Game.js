import React, { Component } from 'react'

 class Result extends Component {
state={
    name:"Mario",
    winner:true
}
  render() {
    // ******avec la solution de if et else ******
//     let result;
// if(this.state.winner){
//     result= <h1>Bravo {this.state.name}</h1>
    
// } else {
//   result=  <h1>raté !!!</h1>
    
// }
// return result;

//*******avec une meilleure solution****** :
// return(
//     this.state.winner ? (
//         <h1>Bravo {this.state.name}</h1>
//     ): <h1>(raté !!!)</h1>)

//*****focalise  seulement sur la condition vrai *****

return this.state.winner  && <h1>Bravo {this.state.name}</h1>

 }
}
export default Result
