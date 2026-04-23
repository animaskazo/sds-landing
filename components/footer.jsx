'use client';
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const links = [
        { name: 'Terms of Service', href: '#terms-of-service' },
        { name: 'Privacy Policy', href: '#privacy-policy' },
        { name: 'Security', href: '#security' },
        { name: 'Sitemap', href: '#sitemap' },
    ];
    return (
        <footer className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 glass border-0">
            <a href="https://prebuiltui.com?utm_source=genesis">
                <Image src='/assets/superdigital-white.png' alt='logo' className='h-6 w-auto' width={205} height={48} />
            </a>

            <div className="flex text-xs flex-col md:flex-row items-center w-full justify-center gap-4 py-4 pb-12">
                <p>Copyright © 2026 Super Digital Solutions. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};