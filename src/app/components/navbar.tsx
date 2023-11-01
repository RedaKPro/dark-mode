import Link from 'next/link';

export default function Navbar() {
    return (
        <div>
            <Link href="/" legacyBehavior>
                <a>Home</a>
            </Link>
            <Link href="/about/us" legacyBehavior>
                <a>About Us</a>
            </Link>
            <Link href="/" legacyBehavior>
                <a>Contact Us</a>
            </Link>

        </div>
    );
}
