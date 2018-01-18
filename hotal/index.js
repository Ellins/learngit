import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './component/style.css';
import { WrappedNormalLoginForm} from './component/login';

function App() {
  return (
    <div style={{ margin: '70px 100px' }}>
        <h1>郭玉明 Hotal</h1>
        <hr /><br />
        <div className='login-box'>

          <WrappedNormalLoginForm />
        </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
