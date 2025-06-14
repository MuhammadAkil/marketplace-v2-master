import { ServicesContent } from '@/components/services/services-content'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('common')
  return (
    <div className="p-8 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <main>
      <ServicesContent/> 
      </main>
    </div>
  )
}
