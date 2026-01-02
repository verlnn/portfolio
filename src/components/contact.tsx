"use client"

"use client"

import type React from "react"

import { forwardRef, useState } from "react"
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

export const Contact = forwardRef<HTMLElement, ContactProps>(function Contact(
  { email = "contact@example.com", className, ...props },
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

  return (
    <section ref={ref} id="contact" className="py-20 px-4" {...props}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary">Get</span> In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">{email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">전화</p>
                  <p className="text-muted-foreground">+82 10-1234-5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">위치</p>
                  <p className="text-muted-foreground">서울, 대한민국</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">메시지 보내기</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="이름"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="이메일"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Textarea
                  placeholder="메시지를 입력하세요..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                보내기
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
})
