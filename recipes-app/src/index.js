import React, { useEffect, useState, useMemo, useCallback, useLayoutEffect } from "react";
import { render } from "react-dom";
import  ColorProvider from "./provider/ColorProvider";
import ColorList from "./components/ColorList.js";
import AddColorForm from './components/AddColorForm'
// import App from './components/virtualFaker' // Получение списка с 5000элементов и вывод их в виртуальном компоненте
import App from './components/GitHubUser' // Фетч запрос за сервер и вывод данных

// function App() {
//   return (
//     <>
//       <AddColorForm />
//       <ColorList />
//     </>
    
//   )
// }

// function Checkbox() {
//   const [checked, setChecked] = useState(false);
//   alert(`checked: ${checked.toString()}`);
//   useEffect(
//     () => {
//       setTimeout(
//         () => { alert(`checked111: ${checked.toString()}`) },
//         500
//       )
//     })
//   return (
//     <>
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={() => setChecked(checked => !checked)}
//       />
//       {checked ? "checked" : "not checked"}
//     </>
//   );
// };

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();
  useEffect(() => {
    window.addEventListener("click", forceRender);
    return () => window.removeEventListener("click", forceRender);
  }, []);
};

function WordCount({ children = '' }) {
  useAnyKeyToRender();
  const words = useMemo(
    () => children.split(" "),
    [children]
  );

  const fn = useCallback(() => {
    console.log("hello");
    console.log("world");
  }, []);

  useEffect(() => {
    console.log("fresh render");
    fn()
  }, [words, fn]);
  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} — words</strong>
      </p>
    </>
  );
}

// function App() {
//   const renderItem = item => (
//     <div style={{display: "flex"}}>
//       <img src={ item.avatar } alt={ item.name } width={50} />
//       <p>
//         {item.name} - {item.email}
//       </p>
//     </div>
//   );
//   return <List data={bigList} renderItem={ renderItem }/>;
// }

// function List({ data = [], renderItem, renderEmpty }) {
//   return !data.length ? (renderEmpty) :
//     (
//       <ul>
//         {
//           data.map((item, i) => <li>{ renderItem(item) }</li>)
//         }
//       </ul>
//     )
// }

render(
  <ColorProvider>
    <App />
    {/* <Checkbox /> */}
  </ColorProvider>,
  document.getElementById("root")
);