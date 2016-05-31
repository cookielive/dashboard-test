require('styles/App.css');

import Request from 'superagent';
import React from 'react';
import NavList from './Nav/NavList';

class Dashboard extends React.Component {
	constructor(props){
		super(props);
		this.state = {module:'home'};
	}

	loadModule(){
		switch(this.state.module){
			case 'home':
				return(<div>home模块加载中</div>);
				break;
			case 'admin':
				return(<div>admin模块加载中</div>);
				break;
			case 'user1':
				return(<div>user1模块加载中</div>);
				break;
			case '2-1':
				return(<div>2-1模块加载中</div>);
				break;
			case '2-2':
				return(<div>2-2模块加载中</div>);
				break;
			case '2-3':
				return(<div>2-3模块加载中</div>);
				break;
		}
	}

    render(){
    	var dataArray = [
	        			{module:'home',text:'主页',icon:'fa-home'},
	        			{module:'admin',text:'管理员',icon:'fa-user',level2:[
	        				{module:'2-1',text:'二级1',icon:'fa-user'},
	        				{module:'2-2',text:'二级2',icon:'fa-user'},
	        				{module:'2-3',text:'二级3',icon:'fa-user'},
	        			]},
	        			{module:'user1',text:'用户1',icon:'fa-user'}
	        		];

        return(
        	<div className="dashboard">
	        	<NavList
	        		dataArray={dataArray}
	        		f_moduleState={val => this.setState({module:val})} />
	        	<div className="main-content">
	        		{this.loadModule()}
	        	</div>
	        </div>
        )
    }
}

Dashboard.defaultProps = {
};

export default Dashboard;
