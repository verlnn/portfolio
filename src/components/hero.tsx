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
  const highlights = [
    "운영 안정성",
    "데이터 파이프라인",
    "성능 개선",
    "협업 기반 문제 정의",
  ]

  return (
    <div className="space-y-6 text-center md:text-left">
      <div className="mx-auto h-28 w-28 md:mx-0 md:h-36 md:w-36 rounded-full border border-primary/20 bg-card/70 p-1 shadow-lg shadow-primary/10">
        <div className="h-full w-full rounded-full bg-gradient-to-br from-primary/15 via-transparent to-accent/20 p-1">
          <img
            src="/profile.jpg"
            alt="김민수 프로필"
            className="h-full w-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Backend Engineer
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-balance">
          <span className="text-primary">김민수</span>
        </h1>
        <p className="text-lg md:text-2xl text-foreground/90 text-balance">
          운영 가능한 시스템을 설계하고, 문제를 구조적으로 해결합니다
        </p>
        <p className="text-sm md:text-base text-muted-foreground">
          4년간의 실무 경험으로 검증된 풀스택 병역특례 개발자
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
        {highlights.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function PrimaryActions({
  onContact,
  onViewProjects,
}: Required<Pick<HeroProps, "onContact" | "onViewProjects">>) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
      <Button size="lg" className="gap-2" onClick={onContact}>
        <Mail className="w-5 h-5" />
        연락하기
      </Button>
      <Button size="lg" variant="outline" className="gap-2 bg-transparent" onClick={onViewProjects}>
        회사 프로젝트 보기
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

function ResumeDownloadButton({
  open,
  onOpenChange,
  onConfirm,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full"
          aria-label="Resume"
        >
          <img src="/pdf.png" alt="PDF 다운로드" className="w-5 h-5 object-contain" />
        </Button>
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
          <AlertDialogAction onClick={onConfirm}>다운로드</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function Hero({ onViewProjects, onContact }: HeroProps) {
  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false)

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

  const handleMailClick = () => {
    safeOnContact()
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
    <section id="home" className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_55%)]" />
      <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center gap-10 px-4 py-20 md:flex-row md:items-center md:justify-between">
        <HeroHeader />

        <div className="w-full max-w-md rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm backdrop-blur">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-muted-foreground">Interview-ready summary</p>
            <h2 className="text-2xl font-semibold text-foreground">
              운영 안정성과 협업 기반 문제 해결에 강한 백엔드 개발자
            </h2>
            <p className="text-sm text-muted-foreground">
              실무 운영 환경에서의 장애 대응, 데이터 연계, 성능 개선 경험을 중심으로
              신뢰감 있는 시스템을 설계합니다.
            </p>
            <PrimaryActions onContact={safeOnContact} onViewProjects={safeOnViewProjects} />
          </div>

          <div className="flex items-center gap-3 pt-6">
            {socialButtons.map((button) => (
              <SocialButton key={button.label} {...button} />
            ))}
            <ResumeDownloadButton
              open={isResumeDialogOpen}
              onOpenChange={setIsResumeDialogOpen}
              onConfirm={handleResumeDownload}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 pb-8 text-xs text-muted-foreground">
        <span className="h-px w-8 bg-border" />
        Scroll for details
        <span className="h-px w-8 bg-border" />
      </div>
    </section>
  )
}
