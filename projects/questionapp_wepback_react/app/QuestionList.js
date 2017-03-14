import React , { Componnet } from "react"

class QuestionList extends React.Component{
	render(){
		return (
		<div id="questions" className="">
          <div className="media">
            <div className="media-left">
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-chevron-up"></span>
                <span className="vote-count">22</span>
              </button>
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-chevron-down"></span>
              </button>
            </div>
            <div className="media-body">
              <h4 className="media-heading">产品经理与程序员矛盾的本质是什么？</h4>
              <p>理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。</p>
            </div>
          </div>

          <div className="media">
            <div className="media-left">
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-chevron-up"></span>
                <span className="vote-count">12</span>
              </button>
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-chevron-down"></span>
              </button>
            </div>
            <div className="media-body">
              <h4 className="media-heading">热爱编程是一种怎样的体验？</h4>
              <p>别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。</p>
            </div>
          </div>

        </div>
			);
	}
}

export default QuestionList