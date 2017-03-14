import React , { Component } from "react";

class QuestionHeader extends React.Component{
	render(){
		return (

		<div className="jumbotron text-center">
          <div className="container">
            <h1>React问答</h1>
            <button id="add-question-btn" className="btn btn-success">添加问题</button>
          </div>
    	</div>
			);
	}
}

export default QuestionHeader