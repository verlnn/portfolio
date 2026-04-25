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

export function Hero({ onViewProjects, onContact }: HeroProps) {
  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false)

  const safeOnViewProjects = onViewProjects ?? (() => {})
  const safeOnContact = onContact ?? (() => {})

  const highlights = ["운영 안정성", "데이터 파이프라인", "성능 개선", "MSA 설계"]

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

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "resume.pdf"
    document.body.appendChild(link)
    link.click()
    link.remove()
    setIsResumeDialogOpen(false)
  }

  const socialButtons: SocialButtonConfig[] = [
    { label: "GitHub", icon: <Github className="w-4 h-4" />, onClick: handleGithubClick },
    {
      label: "Wanted",
      icon: <img src="/wanted_logo.png" alt="Wanted" className="w-4 h-4 object-contain" />,
      onClick: handleWantedClick,
    },
  ]

  return (
    <section id="home" className="scroll-mt-14">
      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center gap-12 px-4 py-20 md:flex-row md:items-center md:justify-between">

        {/* Left: Identity */}
        <div className="space-y-6 text-center md:text-left">
          <div className="mx-auto md:mx-0 h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden border border-border">
            <img
              src="/profile.jpg"
              alt="김민수 프로필"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Backend Engineer</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              김민수
            </h1>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              운영 가능한 시스템을 설계하고<br className="hidden md:block" />
              문제를 구조적으로 해결합니다
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Summary card */}
        <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-7 shadow-sm">
          <div className="space-y-5">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Interview-ready summary
              </p>
              <h2 className="text-xl font-bold text-foreground leading-snug">
                운영 안정성과 협업 기반<br />문제 해결에 강한 백엔드 개발자
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              4년 실무 경험 — 의료·금융 도메인에서 장애 대응, 성능 개선,
              MSA 전환, Kafka 기반 모니터링까지 전 과정을 담당했습니다.
            </p>

            <div className="flex flex-col gap-2">
              <Button className="w-full gap-2 h-10" onClick={safeOnContact}>
                <Mail className="w-4 h-4" />
                연락하기
              </Button>
              <Button variant="outline" className="w-full gap-2 h-10" onClick={safeOnViewProjects}>
                프로젝트 보기
                <ArrowDown className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2 pt-1">
              {socialButtons.map((btn) => (
                <button
                  key={btn.label}
                  aria-label={btn.label}
                  onClick={btn.onClick}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
                >
                  {btn.icon}
                </button>
              ))}

              <AlertDialog open={isResumeDialogOpen} onOpenChange={setIsResumeDialogOpen}>
                <AlertDialogTrigger asChild>
                  <button
                    aria-label="Resume"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
                  >
                    <img src="/pdf.png" alt="PDF" className="w-4 h-4 object-contain" />
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>이력서 다운로드</AlertDialogTitle>
                    <AlertDialogDescription>
                      김민수님의 이력서를 PDF로 다운로드 하시겠습니까?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>취소</AlertDialogCancel>
                    <AlertDialogAction onClick={handleResumeDownload}>다운로드</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 pb-8 text-xs text-muted-foreground">
        <span className="h-px w-10 bg-border" />
        Scroll to explore
        <span className="h-px w-10 bg-border" />
      </div>
    </section>
  )
}
