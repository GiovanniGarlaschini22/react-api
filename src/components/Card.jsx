function cards({ actress }) {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
                    // actress image //
                    <img
                        src={actress.image}
                        className="card-img-top"
                        alt={actress.name}
                        style={{height: '300px', objectFit: 'cover'}}
                    />

                    // actress name //
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{actress.name}</h5>

                    // actress birth year //
                        <div className="mb-2">
                            <small className="text-muted">
                                <h4>Born</h4> {actress.birth_year}
                                {actress.death_year && ` - ${actress.death_year}`}
                            </small>
                        </div>

                    // actress nationality //
                        <div className="mb-2">
                            <small className="text-muted">
                                <h4>Nationality</h4> {actress.nationality}
                            </small>
                        </div>

                    // actress movies //
                        <div className="mb-3">
                            <h5 className="card-subtitle mb-3 text-muted">Most Famous Movies</h5>
                            <ul className="list-unstyled">
                                {actress.most_famous_movies.map((movie, index) => (
                                    <li key={index} className="small">{movie}</li>
                                ))}
                            </ul>
                        </div>

                    // actress awards //
                    <div className="mb-3">
                        <h5 className="card-subtitle mb-3 text-muted">Awards</h5>
                        <p className="small">{actress.awards}</p>
                    </div>

                    // actress biography //
                    <div className="mt-auto">
                        <h5 className="card-subtitle mb-3 text-muted">Biography</h5>
                        <p className="card-text small">{actress.biography}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default cards;