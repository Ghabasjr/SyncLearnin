import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import App from './App.tsx'
// import { Provider } from 'react-redux'
// import store from './Redux/store/store.ts'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}> */}

      <App />
      {/* </Provider> */}
    </QueryClientProvider>
  </StrictMode>,
)
