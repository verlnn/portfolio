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
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
      <span className="text-primary">Get</span> In Touch
    </h2>
  )
}

function ContactInfoList({ items }: { items: ContactInfoItem[] }) {
  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              {item.icon}
            </div>
            <div>
              <p className="font-medium">{item.label}</p>
              <p className="text-muted-foreground">{item.value}</p>
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
    <Card className="p-8">
      <h3 className="text-2xl font-bold mb-6">메시지 보내기</h3>
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
    <section ref={ref} id="contact" className="py-20 px-4" {...props}>
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
