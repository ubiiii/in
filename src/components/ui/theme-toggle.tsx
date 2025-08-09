"use client"

import { useEffect, useState, type ReactElement } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function ThemeToggle(): ReactElement | null {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const effectiveTheme = (theme ?? resolvedTheme) as string | undefined
  const isDarkMode = effectiveTheme === "dark"

  const handleToggleTheme = (): void => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Toggle theme"
          aria-pressed={isDarkMode}
          className="rounded-full"
          onClick={handleToggleTheme}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>{isDarkMode ? "Switch to light" : "Switch to dark"}</p>
      </TooltipContent>
    </Tooltip>
  )
}


