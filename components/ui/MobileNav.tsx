'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MobileNav = ({ user }: MobileNavProps) => {
    const pathName = usePathname();
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image src="/icons/hamburger.svg" height={30} width={30} alt="menu" className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <nav className='flex flex-col gap-4'>
                        <Link href="/" className='flex cursor-pointer items-center gap-1 px-4'>
                            <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon Logo" className='size-[24px] max-xl:size-14' />
                            <h1 className=' text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
                        </Link>
                        <div className="mobilenav-sheet">
                            <SheetClose asChild>
                                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                    {sidebarLinks.map((item) => {
                                        const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                                        return (
                                            <SheetClose asChild key={item?.route}>
                                                <Link className={cn('mobilenav-sheet_close w-full', {
                                                    'bg-bank-gradient': isActive
                                                })} href={item.route} key={item.label}>

                                                    <Image src={item.imgURL} alt='item.label' className={cn({ "brightness-[3] invert-0": isActive })} width={20} height={20} />


                                                    <p className={cn('text-16 font-semibold text-black-2', {
                                                        'text-white': isActive
                                                    })}>{item.label}</p>
                                                </Link>
                                            </SheetClose>

                                        )
                                    })}
                                    User
                                </nav>
                            </SheetClose>
                            Footer
                        </div>

                    </nav>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav
