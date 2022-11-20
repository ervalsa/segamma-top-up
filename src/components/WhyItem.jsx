export default function WhyItem({ path, title, description }) {
    return (
        <div className={'p-6 rounded-3xl flex flex-col items-center gap-y-4 hover:bg-gradient-to-b from-lighterGray to-darkGray'}>
            <img src={path} alt="Why Icon 1"/>
            <div className={'flex flex-col items-center gap-y-2'}>
                <h4 className={'font-bold'}>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}