import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="uppercase text-2xl font-bold">Download More RAM</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/how-it-works">How It Works</Link></li>
                        <li><Link href="https://downloadmoreram.com/index.html">Download</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}