import Image from 'next/image';

export default function Header() {
    return (
        <header>
            <Image src="/logo.png" alt="Mansa Logo" width="100" height="100" />
            <h1>
                Mansa Calendar and Todo App
            </h1>
        </header>
    );
}