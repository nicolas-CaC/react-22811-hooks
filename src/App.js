import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseLayoutEffect } from './components/UseLayoutEffect';
import { UseEffect } from './components/UseEffect';
import { UseState } from './components/UseState';
import { UseRef } from './components/UseRef';
import { OnClickCapture } from './components/OnClickCapture';
import { Memo } from './components/Memo/Memo';
import { UseMemo } from './components/UseMemo';
import { UseCallback } from './components/UseCallback/UseCallback';
import { ForwardRef } from './components/ForwardRef/ForwardRef';
import { UseReducer } from './components/UseReducer/UseReducer';
import { UseImperativeHandle } from './components/UseImperativeHandle/UseImperativeHandle';
import { UseTransition } from './components/UseTransition';
import { UseDeferredValue } from './components/UseDeferredValue';
import { UseInsertionEffect } from './components/UseInsertionEffect';
import { UseId } from './components/UseId';
import { UseSyncExternalStore } from './components/UseSyncExternalStore';

const clase = "d-flex border border-2 bg-light p-2 rounded justify-content-between align-items-center"

function App() {

  return (
    <div className="container my-4">
      <UseState clase={ clase } />
      <hr />
      <UseEffect clase={ clase } />
      <hr />
      <UseRef clase={ clase } />
      <hr />
      <UseLayoutEffect clase={ clase } />
      <hr />
      <OnClickCapture clase={ clase } />
      <hr />
      <Memo clase={ clase } />
      <hr />
      <UseMemo clase={ clase } />
      <hr />
      <UseCallback clase={ clase } />
      <hr />
      <ForwardRef clase={ clase } />
      <hr />
      <UseReducer clase={ clase } />
      <hr />
      <UseImperativeHandle clase={ clase } />
      <hr />
      {/* <UseTransition clase={ clase } /> */ }
      <hr />
      {/* <UseDeferredValue clase={ clase } /> */ }
      <hr />
      <UseInsertionEffect clase={ clase } />
      <hr />
      <UseId clase={ clase } />
      <hr />
      <UseSyncExternalStore clase={ clase } />
    </div>
  );
}

export default App;
