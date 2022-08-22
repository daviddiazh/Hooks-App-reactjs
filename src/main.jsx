import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HooksApp } from './HooksApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CustomHookForm } from './02-useEffect/CustomHookForm';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusInput } from './04-useRef/FocusInput';
// import { Layout } from './05-useLayouEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo';
// import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
)
