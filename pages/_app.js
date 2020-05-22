import "../styles/main.scss";


const App = ({Component, pageProps}) => {
  return <Component {...pageProps} appProps="Hello From App"/>
}

export default App;


// https://nextjs.org/docs/advanced-features/custom-app 
//app component : Next.js uses the App component to initialize pages. You can override it and control the page initialization. Which allows you to do amazing things like:

//     Persisting layout between page changes
//     Keeping state when navigating pages
//     Custom error handling using componentDidCatch
//     Inject additional data into pages
//     Add global CSS

