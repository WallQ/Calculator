import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/index';

// Components
import Layout from './components/Layout/Layout';

const App: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path='/' element={<Layout />}>
						{routes.map(({ path, component: Component }) => {
							return (
								<Route
									key={path}
									path={path}
									element={<Component />}
								/>
							);
						})}
					</Route>
				</Routes>
			</Router>
		</React.Fragment>
	);
};

export default App;
