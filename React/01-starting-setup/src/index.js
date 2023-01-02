import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// createRoot 메서드는 React에게 이것이 React 어플리케이션의 루트(root)이자 
// React 어플리케이션이 렌더링될 주된 위치라는 점을 알려줌
// root 객체를 상수 또는 변수에 저장 (const root에 해당)
// 이후 root 객체에서 render 메서드를 호출하여 React에게 선택된 div에서 무엇이 렌더링되어야 하는지를 알려줌
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
