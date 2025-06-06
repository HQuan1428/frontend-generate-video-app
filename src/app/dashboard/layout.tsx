import { cookies } from 'next/headers'

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/common/sidebar'

import DashboardSidebar from '@/components/dashboard/DashboardSidebar'

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true'

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <DashboardSidebar />

      <SidebarInset>
        <main className='p-4'>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
