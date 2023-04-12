export const Shimmerui = () => {
    return (
        <div className="card">
            <div className="card-shimmer"></div>
            <div className="card-content">
            <div className="shimmerbox_a">
                                <section className="box_b"></section>
                            </div>
                <div className="cards-grid shimmer-grid">
                    {Array(6)
                        .fill("")
                        .map((e, index) => (
                            <div className="cards-shimmer" key={index}>
                                <section className="shimmer_a">
                                    <text></text>
                                    <text className="texttwo"></text>
                                </section>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}