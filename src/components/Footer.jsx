import NavLink from "./NavLink.jsx";

export default function Footer({ children }) {
    return (
        <footer className="bg-lightGray py-8">
            <div className="container">
                <div className="flex ml-6 md:ml-6 lg:m-0 flex-col gap-y-5 lg:flex-row text-white justify-between">
                    <div className="flex flex-col gap-y-4">
                        <h2 className="font-bold text-lg">SEGAMMA</h2>
                        <p>
                            Jl. Soekarno Hatta No.KM 15, Karang Joang, Kec.{" "}
                            <br />
                            Balikpapan Utara, Kota Balikpapan, Kalimantan Timur
                            76127
                        </p>
                        <p>Copyright 2022 PT. SEGAMMA GAME INDONESIA</p>
                    </div>
                    <div className="flex flex-col gap-y-9 lg:flex-row gap-x-12 align-top">
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-purleHaze font-bold text-lg">
                                Layanan
                            </h2>
                            <div className="flex flex-col gap-y-4">
                                <NavLink>Topup Game Mobile</NavLink>
                                <NavLink>Topup Game PC</NavLink>
                                <NavLink>Promo</NavLink>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-purleHaze font-bold text-lg">
                                Perusahaan
                            </h2>
                            <div className="flex flex-col gap-y-4">
                                <NavLink>Tentang SEGAMMA</NavLink>
                                <NavLink>Hubungi Kami</NavLink>
                                <NavLink>Pusat Bantuan</NavLink>
                                <NavLink>Blog</NavLink>
                                <NavLink>Karir</NavLink>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-purleHaze font-bold text-lg">
                                Hubungi Kami
                            </h2>
                            <div className="flex flex-col gap-y-4">
                                <span className="flex gap-x-3">
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'
                                        fill='currentColor' className='w-6 h-6'>
                                        <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
                                        <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
                                    </svg>
                                    support@segamma.id
                                </span>
                                <span className="flex gap-x-3">
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6'>
                                        <path
                                            fillRule='evenodd'
                                            d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
                                            clipRule='evenodd'/>
                                    </svg>
                                    62 872-4455-7653 (CS)
                                </span>
                                <span className="flex gap-x-3">
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    62 815-3321-4432 (CS)
                                </span>
                                <span className="flex gap-x-3">
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    62 812-7654-4321 (CS)
                                </span>
                                <span className="flex gap-x-3">
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        className='w-6 h-6'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    62 831-9965-5221 (CS)
                                </span>
                            </div>
                            <div className={"flex gap-x-2"}>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-brand-facebook'
                                    width='32'
                                    height='32'
                                    viewBox='0 0 24 24'
                                    strokeWidth='2'
                                    stroke='currentColor'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'>
                                    <path
                                        stroke='none'
                                        d='M0 0h24v24H0z'
                                        fill='none'></path>
                                    <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3'></path>
                                </svg>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-brand-twitter'
                                    width='32'
                                    height='32'
                                    viewBox='0 0 24 24'
                                    strokeWidth='2'
                                    stroke='currentColor'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <path
                                        stroke='none'
                                        d='M0 0h24v24H0z'
                                        fill='none'
                                    ></path>
                                    <path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z'></path>
                                </svg>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-brand-linkedin'
                                    width='32'
                                    height='32'
                                    viewBox='0 0 24 24'
                                    strokeWidth='2'
                                    stroke='currentColor'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <path
                                        stroke='none'
                                        d='M0 0h24v24H0z'
                                        fill='none'
                                    ></path>
                                    <rect
                                        x='4'
                                        y='4'
                                        width='16'
                                        height='16'
                                        rx='2'
                                    ></rect>
                                    <line x1='8' y1='11' x2='8' y2='16'></line>
                                    <line x1='8' y1='8' x2='8' y2='8.01'></line>
                                    <line
                                        x1='12'
                                        y1='16'
                                        x2='12'
                                        y2='11'
                                    ></line>
                                    <path d='M16 16v-3a2 2 0 0 0 -4 0'></path>
                                </svg>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='icon icon-tabler icon-tabler-brand-instagram'
                                    width='32'
                                    height='32'
                                    viewBox='0 0 24 24'
                                    strokeWidth='2'
                                    stroke='currentColor'
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <path
                                        stroke='none'
                                        d='M0 0h24v24H0z'
                                        fill='none'
                                    ></path>
                                    <rect
                                        x='4'
                                        y='4'
                                        width='16'
                                        height='16'
                                        rx='4'
                                    ></rect>
                                    <circle cx='12' cy='12' r='3'></circle>
                                    <line
                                        x1='16.5'
                                        y1='7.5'
                                        x2='16.5'
                                        y2='7.501'
                                    ></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
