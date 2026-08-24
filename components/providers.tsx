'use client'

import type { ReactNode } from 'react'
import { ThemeProvider, ToastProvider } from '@the_viveksingh/vivek-ui'

/**
 * The only two providers this site needs.
 *
 * `ThemeProvider` renders no DOM of its own, and `themeScript` in the document
 * head has already set `data-theme` before first paint — this just owns the
 * choice from there on. `ToastProvider` mounts its live regions empty, which is
 * what makes the first toast actually get announced.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system">
      <ToastProvider position="bottom-end" duration={4500}>
        {children}
      </ToastProvider>
    </ThemeProvider>
  )
}
