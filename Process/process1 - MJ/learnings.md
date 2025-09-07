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