export default function WhyItem({ imgPath, title, description }) {
    return (
        <div
            className={
                "transition ease-in-out delay-150 duration-300 hover:scale-110 p-6 rounded-3xl flex flex-col items-center gap-y-4 hover:bg-gradient-to-b from-lighterGray to-darkGray"
            }
        >
            <img src={imgPath} alt='Why Icon' />
            <div className={"flex flex-col items-center gap-y-2"}>
                <h4 className={"font-bold text-xl"}>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}
