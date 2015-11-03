'use strict';

import React from 'react';

export default class Entry extends React.Component {

	constructor(props, context){
		super(props, context);
	}

	render(){

		const scripts = this.props.scripts.map((script, index)=>{
			return (<script key={index} src={script}></script>)
		});

		const innerHtml = {__html: this.props.componentHTML};

		return (<html>
				<head>
					<title>Walker Randolph Smith</title>
					<meta name="description" content="Walker Randolph Smith resume." />
					<meta name="author" content="Walker Randolph Smith" />
					<link rel="canonical" href="http://walkerrandolphsmith.github.com/" />

					<link rel="icon" type="image/png" href="profile.png" />
					<link rel="apple-touch-icon" sizes="57x57" href="apple-icon-57x57.png" />
					<link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png" />
					<link rel="apple-touch-icon" sizes="114x114" href="apple-icon-114x114.png" />
					<link rel="apple-touch-icon" sizes="144x144" href="apple-icon-144x144.png" />
          <link href={this.props.styles} rel="stylesheet" type="text/css" />
				</head>
				<body>
					<div id="app" dangerouslySetInnerHTML={innerHtml}></div>
          {scripts}
				</body>
		</html>);
	}
}
