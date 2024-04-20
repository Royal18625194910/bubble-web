import NavLink from "@/app/components/NavLink";

function MenuOverlay({links}: any) {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {
                links.map((link: any) => (
                    <li key={link.title}>
                        <NavLink title={link.title} path={link.path} />
                    </li>
                ))
            }
        </ul>
    );
}

export default MenuOverlay;