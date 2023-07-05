import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, Container } from '@/components';
import { navOptions } from '@/utils/constant';
import { BiChevronDown } from 'react-icons/bi';

export default function Navbar() {
    return (
        <Container>
            <header className="header">
                <Link href="/">
                    <Image src="/icons/logo.svg" alt="logo" width={130} height={50} className="object-contain" />
                </Link>
                <nav className="navbar">
                    {
                        navOptions.map(item => {
                            return (
                                <Link href={item.link} className="navbar-list">
                                    <span className="pr-1">{item.name}</span>
                                    {item.child && item.child.length > 0 && <BiChevronDown fontSize={18} />}
                                </Link>
                            )
                        })
                    }

                </nav>
                <span className="flex">
                    <Button
                        text="Daftar"
                        className="bg-white btn-small hover:bg-slate-100"
                    />
                    <Button
                        text="Masuk"
                        className="text-white bg-primary-red hover:bg-primary-red-darker btn-small"
                    />
                </span>
            </header>
        </Container>
    )
}
