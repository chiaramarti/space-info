import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import ArticleDetail from './components/ArticleDetail/ArticleDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/article/:id" component={ArticleDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

