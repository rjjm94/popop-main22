import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-slate-900 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Be an Earlier Movier
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          If you are interested in being one of the first to experience CNTRL AI, please sign up below. We will be in touch with you shortly.
          </p>
          <Button href="https://beta.cntrl.ai/" color="white" className="mt-10">
            Join The Beta
          </Button>
        </div>
      </Container>
    </section>
  )
}
