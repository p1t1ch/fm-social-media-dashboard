import React from 'react'
import ColorSchemeProvider from '@/components/ColorSchemeProvider'
import 'focus-visible'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-700.css'
import '@/styles/global.css'

interface RootWrapperProps {
  children: React.ReactNode
}

const RootWrapper = ({ children }: RootWrapperProps) => {
  return <ColorSchemeProvider>{children}</ColorSchemeProvider>
}

export default RootWrapper
