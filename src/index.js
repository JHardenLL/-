import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Bar(props){
    return (
        <button onClick={props.onClick}>
            {props.value}
        </button>
    )
}

function Text(props){
    return(
        <div>
            <div>
                if(0===page){
                    <p>aaa</p>
                }
                else if(1===page){
                    <p>旧密码</p> 
                    
                }
                else if(2===page){
                    
                }
            </div>
        </div>
    );
}

class TopBars extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page:0,
        }
    }
    

    render(){
        return(
            <div>
                <div>
                    <Bar
                        value='基本资料'
                    />
                    <Bar
                        value='修改密码'
                    />
                    <Bar
                        value='其他'
                    />
                </div>
                <div>
                    if(0===page){
                        <div>
                            <p>aaa</p>
                        </div>
                    }
                    else if(1===page){
                        <p>旧密码</p> 
                        
                    }
                    else if(2===page){
                        
                    }
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TopBars />);