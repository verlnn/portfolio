import { useCallback, useRef } from "react"

export function useSectionScroll() {
  const projectsRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  const scrollToProjects = useCallback(() => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const scrollToContact = useCallback(() => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return { projectsRef, contactRef, scrollToProjects, scrollToContact }
}
