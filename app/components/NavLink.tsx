import Link from "next/link";

function NavLink({title,path}: {title: string; path: string}) {
    return (
        <Link href={path} className='block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white'>
            {title}
        </Link>
    );
}

export default NavLink;