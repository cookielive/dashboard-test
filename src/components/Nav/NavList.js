import React from 'react';
import Request from 'superagent';
require('./navlistbox.css');

class NavListBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {module:'home'};
	}
	render(){
		return (
			<div className="navlistbox">
				<div className="main-logo">
					<a href="/">dashboard</a>
				</div>
				<NavList dataArray={this.props.dataArray} f_moduleState={this.props.f_moduleState} />
			</div>
		)
	}
}

class NavList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {module:'home'};
	}

	componentDidMount(){

	}

	itemClick(i) {
		if(i){
			this.props.f_moduleState(i);
		}

		this.setState({module:i});
	}

	render() {
		var data = this.props.dataArray;

		var items = data.map(function(v){
			return (<NavItem
				text={v.text} module={v.module} icon={v.icon}
				onClick={this.itemClick.bind(this,v.module)}
				f_moduleState={this.props.f_moduleState}
				level2={v.level2}
				key={v.module}
				className={this.state.module==v.module ? 'active' : ''} />)
		}.bind(this));

		return (
			<div className="navlist">
				<ul className="menu-level-1">
					{items}
				</ul>
			</div>
		);
	}
}

class NavItem extends React.Component{
	constructor(){
		super();
		this.state={flag:false}
	}

	itemClick1(i) {
		if(i){
			this.props.f_moduleState(i);
		}
	}

	render() {
		var level2 = this.props.level2;
		if(!level2){
			return(
				<li>
					<a href="#" className={this.props.className} onClick={this.props.onClick}>
						<i className={'fa '+this.props.icon}></i>&nbsp;
						<span>{this.props.text}</span>
					</a>
				</li>
			);
		}else{
			var items = level2.map(function(v){
				return(
					<li key={v.module}>
						<a href="#" onClick={this.itemClick1.bind(this,v.module)}>
							<i className={'fa '+v.icon}></i>&nbsp;
							<span>{v.text}</span>
						</a>
					</li>
				);
			}.bind(this));

			return (
				<li>
					<a href="#" module={this.props.module} className={this.props.className} onClick={this.props.onClick}>
						<i className={'fa '+this.props.icon}></i>&nbsp;
						<span>{this.props.text}</span>
					</a>
					<ul className="menu-level-2">
						{items}
					</ul>
				</li>
			);
		}
	}
}


module.exports = NavListBox;
