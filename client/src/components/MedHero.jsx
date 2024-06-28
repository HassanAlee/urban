const MedHero = ({ text }) => {
    return (
        <div
            className="hero min-h-56 max-h-screen"
            style={{
                backgroundImage: "url(/images/home-bg.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default MedHero