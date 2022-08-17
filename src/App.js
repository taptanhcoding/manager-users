import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import publicRoutes from '~/routes/routes';

import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((value, key) => {
                    const Page = value.component;
                    return (
                        <Route
                            key={key}
                            path={value.path}
                            element={
                                <DefaultLayout>
                                    <Page />
                                </DefaultLayout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
