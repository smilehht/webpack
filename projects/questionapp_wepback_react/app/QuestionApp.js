// module.exports=function(){
// 	var greet=document.createElement("div");
// 	greet.textContent="hi,this is the first project!";
// 	return greet;
// };


import React,{Component} from 'react';
import QuestionHeader from "./QuestionHeader";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

class QuestionApp extends React.Component{
	render() {
		return (

		 <div id="app">
		    <QuestionHeader />
	    	<div className="main container">
		        <QuestionForm />
		       	<QuestionList />
	    	</div>
		</div>

			);
	}
}

export default QuestionApp;