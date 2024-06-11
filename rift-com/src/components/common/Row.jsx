import React from 'react'

// class Row extends Component{
//     state = { title : ' This is a row component' }
//     render(){
//         return (
//             <div className={`flex ${this.props.className}`}>
//                 {this.props.children}
//             </div>
//         );
//     }
// } lets convert it into func

const Row = ({className, children}) => {
    return (
        <div className={`flex ${className}`}>
            {children}
        </div>
    );
}


export default Row;
