import React, { useEffect } from 'react';
import Search from './search/container/Serch';
import 'antd/dist/antd.css';
import User from './user/container/User';
import { Route } from 'react-router-dom';
import Login from './auth/container/Login';
import Signup from './auth/container/Signup';

export default function App() {
	useEffect(() => {
		const bodyEl = document.getElementsByTagName('body')[0];
		const loadingEl = document.getElementById('init-loading');
		bodyEl.removeChild(loadingEl);
	}, []);
	return (
		<>
			<Route exact path='/' component={Search} />
			<Route path='/user/:name' component={User} />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={Signup} />
		</>
	);
}
