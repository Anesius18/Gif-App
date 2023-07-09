import React from 'react'
import { AppRouter } from './routes/AppRouter'
import { GifProvider } from './Gifs/Context/GifProvider'

import { AuthProvider } from './auth/context'
import { Background } from './auth/components/Background'

export const GifApp = () => {
  return (
    <GifProvider>
 <AuthProvider>
  <Background/>
   <AppRouter/>
   </AuthProvider>
    </GifProvider>
  )
}
