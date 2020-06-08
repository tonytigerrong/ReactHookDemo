import React from 'react';
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

function App() {
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
    </div>
  );
}

export default App;
