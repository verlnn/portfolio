"use client"

import type React from "react"
import { forwardRef, useMemo, useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

type ContactFormData = {
  name: string
  email: string
  message: string
}

type ContactProps = React.ComponentPropsWithoutRef<"section"> & {
  email?: string
}

type ContactInfoItem = {
  label: string
  value: string
  icon: React.ReactNode
}

type ContactField = {
  name: keyof ContactFormData
  placeholder: string
  type?: React.HTMLInputTypeAttribute
  component: "input" | "textarea"
  rows?: number
}

function ContactHeading() {
  return (
    <div className="mb-10 space-y-1">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">연락하기</h2>
      <p className="text-sm text-muted-foreground mt-1">협업과 운영을 함께 고민하는 백엔드 개발자로 기여하고 싶습니다.</p>
    </div>
  )
}

function ContactInfoList({ items }: { items: ContactInfoItem[] }) {
  return (
    <Card className="p-7 bg-card border-border shadow-none">
      <h3 className="text-base font-bold mb-1">연락처 정보</h3>
      <p className="text-sm text-muted-foreground mb-6">
        함께 이야기 나눌 기회가 있다면 감사하겠습니다.
      </p>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
              {item.icon}
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

function ContactForm({
  fields,
  formData,
  onChange,
  onSubmit,
}: {
  fields: ContactField[]
  formData: ContactFormData
  onChange: (name: keyof ContactFormData, value: string) => void
  onSubmit: (e: React.FormEvent) => void
}) {
  return (
    <Card className="p-7 bg-card border-border shadow-none">
      <h3 className="text-base font-bold mb-5">메시지 보내기</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        {fields.map((field) =>
          field.component === "input" ? (
            <Input
              key={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={(e) => onChange(field.name, e.target.value)}
              required
            />
          ) : (
            <Textarea
              key={field.name}
              placeholder={field.placeholder}
              rows={field.rows}
              value={formData[field.name]}
              onChange={(e) => onChange(field.name, e.target.value)}
              required
            />
          ),
        )}
        <Button type="submit" className="w-full" size="lg">
          보내기
        </Button>
      </form>
    </Card>
  )
}

export const Contact = forwardRef<HTMLElement, ContactProps>(function Contact(
  { email = "mlnsukim2327@gmail.com", className, ...props },
  ref,
) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `[Portfolio] ${formData.name || "문의"}`
    const body = `이름: ${formData.name}\n이메일: ${formData.email}\n\n${formData.message}`
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  const contactItems = useMemo<ContactInfoItem[]>(
    () => [
      {
        label: "Email",
        value: email,
        icon: <Mail className="w-6 h-6 text-primary" />,
      },
      {
        label: "전화",
        value: "+82 10-8348-1463",
        icon: <Phone className="w-6 h-6 text-primary" />,
      },
      {
        label: "위치",
        value: "서울, 대한민국",
        icon: <MapPin className="w-6 h-6 text-primary" />,
      },
    ],
    [email],
  )

  const contactFields: ContactField[] = [
    { name: "name", placeholder: "이름", component: "input" },
    { name: "email", placeholder: "이메일", component: "input", type: "email" },
    { name: "message", placeholder: "메시지를 입력하세요...", component: "textarea", rows: 5 },
  ]

  return (
    <section ref={ref} id="contact" className="py-20 px-4 bg-muted scroll-mt-24" {...props}>
      <div className="max-w-6xl mx-auto">
        <ContactHeading />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactInfoList items={contactItems} />
          <ContactForm
            fields={contactFields}
            formData={formData}
            onChange={(name, value) =>
              setFormData((prev) => ({
                ...prev,
                [name]: value,
              }))
            }
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  )
})
