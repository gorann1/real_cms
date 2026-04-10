import { Head } from '@inertiajs/react'

import cs from './index.module.css'

export default function Home() {
  return (
    <div className={cs.root}>
      <Head title="Ruby on Rails + Inertia + React" />

      <div className={cs.footer}>
        <div className={cs.card}>
          <p>
            Edit <code>app/frontend/pages/inertia_example/index.tsx</code> and save to test <abbr title="Hot Module Replacement">HMR</abbr>.
          </p>
        </div>
      </div>
    </div>
  )
}
