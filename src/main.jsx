import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from './09-useContext/MainApp';
//import { TodoApp } from './08-useReducer/TodoApp';
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer';
//import { CallbackHooks } from './06-memos/CallbackHooks';
//import { MemoHook } from './06-memos/MemoHook';
//import { Memorize } from './06-memos/Memorize';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { CounterApp } from './01-useState/CounterApp';
//import { HooksApp } from './HooksApp';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      {/* <React.StrictMode> */}
        <MainApp />
        {/* <TodoApp /> */}
        {/* <Padre /> */}
        {/* <CallbackHooks /> */}
        {/* <MemoHook /> */}
        {/* <Memorize /> */}
        {/* <Layout /> */}
        {/* <FocusScreen /> */}
        {/* <MultipleCustomHooks /> */}
        {/* <FormWithCustomHook /> */}
        {/* <SimpleForm /> */}
        {/* <CounterWithCustomHook /> */}
        {/* <CounterApp /> */}
        {/* <HooksApp /> */}
      {/* </React.StrictMode> */}
  </BrowserRouter>
)
