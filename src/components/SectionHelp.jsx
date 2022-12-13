export default function SectionHelp() {
    return (
        <section className="mx-6 lg:mx-0">
            <div className="container my-[100px]">
                <div
                    className="flex flex-col w-full justify-start text-start gap-y-4 text-white">
                    <h1 className="text-3xl font-bold">
                        Masih Bingung?
                        <br />
                        Kami akan cari solusi terbaik untuk Anda!
                    </h1>
                    <p>Dapatkan dukungan pelanggan dengan menghubungi kami</p>
                    <div>
                        <button
                            className="py-2 px-6 text-center font-bold rounded-full bg-gradient-to-b from-purpleHaze to-purpleRim hover:cursor-pointer">
                            <span className="flex gap-x-3">
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'fill='currentColor' className='w-6 h-6'>
                                    <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
                                    <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
                                </svg>
                                Hubungi Kami
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
