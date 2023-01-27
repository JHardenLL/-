import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Bar(props){
    return (
        <button onClick={props.onClick}>
            {props.value}
        </button>
    )
}

function Mytext(props){
    if(0===props.page)
        return(
            <div>
                <p>头像</p>{/* 这里要从数据库读取 */}
                <p>姓名</p>{/* 这里要从数据库读取 */}
                <p>id</p>{/* 这里要从数据库读取 */}
                <p>性别</p>{/* 这里要从数据库读取 */}
                <p>手机号</p>{/* 这里要从数据库读取 */}
                <p>单位</p>{/* 这里要从数据库读取 */}
            </div>
        );
    else if(1===props.page)
        return(
            <div>
                <ol>
                    <li>旧密码<input type="text"></input></li>
                    <li>新密码<input type="text"></input></li>
                    <li>再次输入新密码<input type="text"></input></li>
                    <li><input type="button" value="确定"></input></li>
                    {/* 这里要连数据库，会要改动 */}
                </ol>
            </div>
        );
        else if(2===props.page)
            return ;
}

class TopBars extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page:0,
        }
    }
    
    handleClick(i){
        this.setState({page:i});
    }

    renderBar(i){
        return(
            <Bar
                value='基本资料'
                onClick={()=>this.handleClick(i)}//onClick里的()=>不能忘
            />
        );
    }

    renderText(i){
        return(
            <Mytext 
                page={this.state.page}//这里赋值时等号左边的变量外都要加{}，可能是所有变量都被当做对象了
            />
        );
    }

    render(){
        return(
            <div>
                <div>
                    {this.renderBar(0)}
                    {this.renderBar(1)}
                    {this.renderBar(2)}
                </div>
                <div>
                    {this.renderText(0)}
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TopBars />);