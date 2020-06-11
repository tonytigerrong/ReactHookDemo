import React,{useContext, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookClassMouse from './components/HookClassMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFecthing from './components/DataFecthing';
import DataFecthing2 from './components/DataFecthing2';
import ComponentC from './components/ComponentC';
import CountOne from './components/CountOne';
import CountTwo from './components/CountTwo';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import FetchDataOne from './components/FetchDataOne';
import FetchDataTwo from './components/FetchDataTwo';
import ParentComponent from './components/ParentComponent'
import CounterUseMemo from './components/CounterUseMemo'
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';

import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';

import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import UserForm from './components/UserForm';

export const FNameContext = React.createContext();
export const LNameContext = React.createContext()

export const CountContext = React.createContext();
const init = 0;
const reducer = (state, action)=>{
  switch(action){
    case 'inc':
      return state+1;
    case 'dec':
      return state-1;
    case 'reset':
      return init;
    default:
      return state;
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer,init);
  return (
    <div className="App">
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <ClassCounterOne />
      <HookCounterOne />
      <ClassMouse />
      <HookClassMouse />
      <MouseContainer />
      Counter:
      <IntervalClassCounter />
      <IntervalHookCounter />
      Rest Fetch:
      <DataFecthing />
      <DataFecthing2 />
      UseContext:
      <FNameContext.Provider value={'tony'}>
        <LNameContext.Provider value={'rong'}>
          <ComponentC />
        </LNameContext.Provider>
      
      </FNameContext.Provider>
      useReducer:
      <CountOne />
      <CountTwo />

      useReducer&useContext 
   <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
     App: count-{count}
      <ComponentA />
      <ComponentB />
      <ComponentC />
   </CountContext.Provider>

    Fetch Data:
    <FetchDataOne />
    Fetch Data Two:
    <FetchDataTwo />
    useCallback:
    <ParentComponent />
    useMemo:
    <CounterUseMemo />
    useRef:1
    <FocusInput />
    useRef:2
    <ClassTimer />
    <HookTimer />
    custom hook:
    <DocTitleOne />
    <DocTitleTwo />
    custom hook 2:
    <CounterOne />
    <CounterTwo />
    custom hook 3: form/input
    <UserForm />
    </div>
  );
}

export default App;
