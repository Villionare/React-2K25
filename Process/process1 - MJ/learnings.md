leanings will be here

1. **.json() ka jhol:**
Jab hum kisi object ko HTTP request ke through bhejte hain, toh pehle usko JSON.stringify() se JSON string mein convert karte hain, kyunki HTTP data ko string format (text) mein hi transfer karta hai. Phir jab response receive hota hai, toh server se aaya hua JSON string ko wapas JavaScript object mein convert karne ke liye hum .json() method use karte hain, jo internally JSON.parse() hi call karta hai.

2. **useNavigate():** kuch ni bro bas ye another way hai navaigate ka par redirect me kaam aata hai
e.g. const navigate = useNavigate();
`<Button onClick={()=>{navigate('/route')}}>`

3. **dynamic routing:** bhai this is all about ki ham routes me values add kar sakte hain taaki kuch details mill sake and usme hum `const params = useParams()` ka use karte hain, and `console.log(params)` ke andar saari values hongi, route will be somewhat like `'id/:name'`

` const location = useLocation();` ye bhai url relate chizein rakhta hai jaise ki 
* route ka patk
* state
* search (wahi ?name=4545&no=34335)

4. **useRoutes():** ik aur tarika hota hai routes banane ka that is useRoutes(), ye json wala tarika hota hai:

```javascript
import { useRoutes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

function App() {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'about', element: <About /> },
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      // Children routes for the dashboard
      children: [
        { index: true, element: <DashboardIndex /> }, // Renders at /dashboard
        { path: 'profile', element: <DashboardProfile /> }, // Renders at /dashboard/profile
        { path: 'settings', element: <DashboardSettings /> } // Renders at /dashboard/settings
      ]
    },
    { path: '*', element: <NotFound /> }
  ]);

  return element;
};
```
5. **Custom Hooks:** bhai bas kuch hooks bana lo taaki baar same code na likhna pade. e.g. useFetch

6. **Abort Controller:** jab hum koi http request kar rahe hote hain, aur hame use cancel karna hota hai to hum abort controller ka use karte hain. ye performance and control deta hai in dynamic applications.
`const controller = new AbortController()` then hame ik signal banana hota hai controller instance se.
`const signal = controller.signal` , phir isko paas kardo, (use nahi kiya.) `fetch(url, { ...options, signal })`

7. **useRef():** ye important cheez hai aur iske so kaam hote hain typically:
* Referencing a DOM Element
This is the most common use case. You can use a ref to get a direct reference to a DOM node (like an input, div, or canvas element). This allows you to interact with the element imperatively, outside of React's typical data flow.

For example, you might use it to:
1. Programmatically focus an input field.
2. Play or pause a video element.
3. Measure the size or position of a DOM element.

```javascript
import { useRef } from 'react';

function MyForm() {
  const inputRef = useRef(null);

  const handleFocusClick = () => {
    // We can directly access the DOM element via .current
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="I will be focused" />
      <button onClick={handleFocusClick}>Focus the Input</button>
    </div>
  );
}
```

* Storing a Mutable Value Without Causing a Re-render
Unlike useState, which is designed to manage state that affects the component's render output, useRef is perfect for storing data that needs to persist across renders but should not trigger a re-render.

A classic example of this is holding a timer ID from setInterval or setTimeout.

Example:
In a timer component, you need to store the ID returned by setInterval so you can clear it later. Storing this ID in state would cause a re-render on every tick, which is inefficient. Using a ref avoids this.
```javascript
function Timer() {
  // Use a ref to store the interval ID
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start the timer and store its ID in the ref
    intervalRef.current = setInterval(() => {
      console.log('Timer is ticking...');
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(intervalRef.current);
  }, []); // Empty dependency array means this effect runs once

  return <div>Timer running...</div>;
}
```
8. **tabIndex={}:** so jab bhi hame focus karna ho on a p tag to hame bas tabIndex me -1 daalna hai and uske ik ref banake foucs kar lena hai
`const pref = useRef(null);`

```javascript
 <button type="submit" className="bg-green-500 p-5" onClick={() => focusTheP()}>
                focus the p
            </button>
            <div className="flex items-end h-screen">
                {/* <input type="text" ref={pref} /> */}
                <p ref={pref} tabIndex={-1}>
                    this is a para that will be used for foucusing.
                </p>
            </div>
```
