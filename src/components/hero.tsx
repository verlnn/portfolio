import { ReactNode, useState } from "react"
import { ArrowDown, Github, Mail } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"
import { Button } from "./ui/button"

type HeroProps = {
  onViewProjects?: () => void
  onContact?: () => void
}

type SocialButtonConfig = {
  label: string
  icon: ReactNode
  onClick: () => void
}

function HeroHeader() {
  return (
    <div className="space-y-4">
      <h1 className="text-5xl md:text-7xl font-bold text-balance">
        <span className="text-primary">김민수</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground text-balance">
        4년간의 실무 경험으로 검증된 풀스택 병역특례 개발자
      </p>
      <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto text-pretty">
        복잡한 비즈니스 문제를 우아한 코드로 해결하고, 사용자 경험과 성능을 동시에 고려한 서비스를 설계합니다
      </p>
    </div>
  )
}

function PrimaryActions({
  onContact,
  onViewProjects,
}: Required<Pick<HeroProps, "onContact" | "onViewProjects">>) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button size="lg" className="gap-2" onClick={onContact}>
        <Mail className="w-5 h-5" />
        연락하기
      </Button>
      <Button size="lg" variant="outline" className="gap-2 bg-transparent" onClick={onViewProjects}>
        실무 프로젝트 보기
        <ArrowDown className="w-5 h-5" />
      </Button>
    </div>
  )
}

function SocialButton({ label, icon, onClick }: SocialButtonConfig) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className="rounded-full"
      aria-label={label}
      onClick={onClick}
    >
      {icon}
    </Button>
  )
}

export function Hero({ onViewProjects, onContact }: HeroProps) {

  const safeOnViewProjects = onViewProjects ?? (() => {})
  const safeOnContact = onContact ?? (() => {})

  const handleGithubClick = () => {
    window.open("https://github.com/verlnn", "_blank", "noopener,noreferrer")
  }

  const handleWantedClick = () => {
    window.open(
      "https://social.wanted.co.kr/community/profile/cVvsuEETpRbX7pQs83s6xr?utm_source=wanted&utm_medium=share",
      "_blank",
      "noopener,noreferrer",
    )
  }


  const socialButtons: SocialButtonConfig[] = [
    {
      label: "GitHub",
      icon: <Github className="w-5 h-5" />,
      onClick: handleGithubClick,
    },
    {
      label: "Wanted",
      icon: <img src="/wanted_logo.png" alt="Wanted" className="w-5 h-5 object-contain" />,
      onClick: handleWantedClick,
    },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <HeroHeader />

        <PrimaryActions onContact={safeOnContact} onViewProjects={safeOnViewProjects} />

        <div className="flex items-center justify-center gap-4 pt-8">
          {socialButtons.map((button) => (
            <SocialButton key={button.label} {...button} />
          ))}
        </div>
      </div>
    </section>
  )
}
