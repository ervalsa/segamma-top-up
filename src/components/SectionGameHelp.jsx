export default function SectionGameHelp() {
    return (
        <section className="mx-6 lg:mx-0">
            <div className="container my-[100px]">
                <div
                    className="flex flex-col w-full justify-start text-start gap-y-4 text-white">
                    <h1 className="text-3xl font-bold text-center">
                        Mulai dengan langkah mudah
                    </h1>
                    <div className="mt-4 flex flex-col gap-y-4 lg:flex-row justify-center items-center lg:gap-y-0 lg:gap-x-8 text-center">
                        <div className="flex flex-col gap-y-4 justify-center items-center">
                            <img className="h-36 w-36" src="../assets/game_help_1.svg" alt="Game Help Icon" />
                            <p>Lakukan pendaftaran</p>
                        </div>
                        <div className="flex flex-col gap-y-4 justify-center items-center">
                            <img className="h-36 w-36" src="../assets/game_help_2.svg" alt="Game Help Icon" />
                            <p>Pilih game yang akan kamu top up</p>
                        </div>
                        <div className="flex flex-col gap-y-4 items-center">
                            <img className="h-36 w-36" src="../assets/game_help_3.svg" alt="Game Help Icon" />
                            <p className="w-60">Top up sesuai dengan nominal dan lakukan pembayaran</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
