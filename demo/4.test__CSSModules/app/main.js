//main.js 
//main.js用来把Greeter模块返回的节点插入页面
// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());


//引入react
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

//使用require导入css文件
import './main.css';
 

render(<Greeter />,document.getElementById("root"));