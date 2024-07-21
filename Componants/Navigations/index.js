import Link from 'next/Link';

const Navbar = props => {
    return (
        <>
            <Link href={'/'}>
                home
            </Link>
            <Link href={"/guest"}>
                guest
            </Link>
            <Link href={"/user"}>
                facts
            </Link>
        </>
    );

}

export default Navbar;