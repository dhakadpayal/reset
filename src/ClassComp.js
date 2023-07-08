import React, { Component } from 'react';  
 export default class ClassComp extends React.Component {
    //property
    
    //constructor
    constructor(){
        super();  
      this.state = {  
         data:   
         [  
            {             
               "name":"Abhishek",           
               "surname":"dhakad"           
            },  
            {            
               "name":"Saharsh" ,
               "surname":"dhakad"              
            },  
            {    
               "name":"Ajay",
               "surname":"dhakad"           
            }  
         ]  
      }  
   }  
    //method

    render() {  
        return (  
           <div>  
              
              <ol>            
                  {this.state.data.map((item) => <li>{item.name} {item.surname}</li>)}           
              </ol>  
           </div>  
        );  
     }  
  }  

