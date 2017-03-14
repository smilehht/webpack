// module.exports=function(){
// 	var greet=document.createElement("div");
// 	greet.textContent="hi,this is the first project!";
// 	return greet;
// };


import React,{Component} from 'react';
import Child1 from "./child1.js";
import Child2 from "./child2.js";
import main from "./main.css";


class Root extends React.Component{
	render() {
		return (

		 <div id="app" ClassName={main.parent}>
		    <Child1 />
	    	<div className={main.child1}>
		        <Child2 />
		       	<Child2 />
	    	</div>
		</div>

			);
	}
}

export default Root;