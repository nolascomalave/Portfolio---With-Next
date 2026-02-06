"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

import { useTheme } from "next-themes"
import { useTranslations } from "next-intl";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  duration = 400
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme } = useTheme(),
    buttonRef = useRef<HTMLButtonElement>(null),
    __ = useTranslations("common"),
    isMobile = useMediaQuery("(max-width: 800px)"),
    [isErrorInAnimation, setIsErrorInAnimation] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      if(document.documentElement.classList.contains("dark")) {
        setTheme("dark");
      }
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    const newTheme = theme === 'dark' ? 'light' : 'dark';

    try {
      await document.startViewTransition(() => flushSync(() => setTheme(newTheme))).ready

      const { top, left, width, height } =
        buttonRef.current.getBoundingClientRect()
      const x = left + width / 2
      const y = top + height / 2
      const maxRadius = Math.hypot(
        Math.max(left, window.innerWidth - left),
        Math.max(top, window.innerHeight - top)
      )

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      )
    } catch(err: any) {
      if (err.name === 'InvalidStateError' || err.message?.includes('aborted')) {
        setIsErrorInAnimation(true);
        setTheme(newTheme);
      } else {
        console.error('Error during theme transition:', err);
      }
    }
  }, [theme, duration])

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          ref={buttonRef}
          className="rounded-full bg-transparent cursor-pointer hover:bg-transparent text-inherit [&_svg]:size-6"
          onClick={(e) => {
            if (isMobile || isErrorInAnimation) { // skip en mobile
              return setTheme(theme === 'dark' ? 'light' : 'dark');
            }

            toggleTheme();
          }}
        >
          {theme === 'dark' ? (
            <Sun />
          ) : (
            <Moon />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="TooltipContent z-[1000]">
        <p>{__('theme-mode', { theme: __(`theme.${theme}`).toLowerCase() })}</p>
      </TooltipContent>
    </Tooltip>
  )
}