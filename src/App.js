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
      

    </div>
  );
}

export default App;
