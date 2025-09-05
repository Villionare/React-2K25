import React from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    PieChart, Pie, Cell,
    ScatterChart, Scatter,
    BarChart, Bar,
    AreaChart, Area,
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    ResponsiveContainer
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F", "#FFBB28", "#FF4444"];

const Charts = () => {
    // Dummy Data for all charts
    const revenueByYear = [
        { year: 2015, revenue: 38 },
        { year: 2016, revenue: 45 },
        { year: 2017, revenue: 50 },
        { year: 2018, revenue: 55 },
        { year: 2019, revenue: 60 },
        { year: 2020, revenue: 25 },
        { year: 2021, revenue: 40 },
        { year: 2022, revenue: 58 },
    ];

    const genresShare = [
        { genre: "Action", value: 35 },
        { genre: "Drama", value: 25 },
        { genre: "Comedy", value: 20 },
        { genre: "Horror", value: 10 },
        { genre: "Sci-Fi", value: 10 },
    ];

    const budgetVsRevenue = [
        { budget: 50, revenue: 200 },
        { budget: 100, revenue: 400 },
        { budget: 150, revenue: 350 },
        { budget: 200, revenue: 500 },
        { budget: 80, revenue: 220 },
    ];

    const runtimeByDecade = [
        { decade: "1980s", runtime: 110 },
        { decade: "1990s", runtime: 120 },
        { decade: "2000s", runtime: 125 },
        { decade: "2010s", runtime: 130 },
        { decade: "2020s", runtime: 140 },
    ];

    const countriesProduction = [
        { country: "USA", movies: 500 },
        { country: "India", movies: 600 },
        { country: "China", movies: 300 },
        { country: "UK", movies: 200 },
        { country: "France", movies: 150 },
    ];

    const streamingVsTheatrical = [
        { year: 2015, streaming: 10, theatrical: 80 },
        { year: 2017, streaming: 20, theatrical: 70 },
        { year: 2019, streaming: 35, theatrical: 60 },
        { year: 2021, streaming: 60, theatrical: 40 },
        { year: 2023, streaming: 75, theatrical: 30 },
    ];

    const awardsData = [
        { movie: "Movie A", awards: 10, nominations: 20 },
        { movie: "Movie B", awards: 5, nominations: 15 },
        { movie: "Movie C", awards: 8, nominations: 18 },
        { movie: "Movie D", awards: 3, nominations: 12 },
    ];

    const profitabilityByGenre = [
        { genre: "Action", profit: 80 },
        { genre: "Drama", profit: 60 },
        { genre: "Comedy", profit: 50 },
        { genre: "Horror", profit: 40 },
        { genre: "Sci-Fi", profit: 70 },
    ];

    const trendingMovies = [
        { day: "Mon", popularity: 20 },
        { day: "Tue", popularity: 30 },
        { day: "Wed", popularity: 50 },
        { day: "Thu", popularity: 40 },
        { day: "Fri", popularity: 80 },
        { day: "Sat", popularity: 100 },
        { day: "Sun", popularity: 90 },
    ];

    const revenueByRegion = [
        { region: "North America", value: 40 },
        { region: "Europe", value: 25 },
        { region: "Asia", value: 30 },
        { region: "Others", value: 5 },
    ];

    return (
        <div className="bg-[#050910] min-h-screen text-white p-6">
            <h1 className="text-3xl font-bold text-center mb-8">🎬 Global Movies Analytics Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* 1. Line Chart: Revenue by Year */}
                <div className="bg-[#3d3d3d] rounded-2xl p-4 shadow-lg">
                    <h2 className="mb-2 font-semibold">Box Office Revenue by Year</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={revenueByYear}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                            <XAxis dataKey="year" stroke="#ccc" />
                            <YAxis stroke="#ccc" />
                            <Tooltip />
                            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* 2. Pie Chart: Genre Share */}
                <div className="bg-[#3d3d3d] rounded-2xl p-4 shadow-lg">
                    <h2 className="mb-2 font-semibold">Top Genres by Revenue</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie data={genresShare} dataKey="value" nameKey="genre" outerRadius={100}>
                                {genresShare.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* 3. Scatter Chart: Budget vs Revenue */}
                <div className="bg-[#3d3d3d] rounded-2xl p-4 shadow-lg">
                    <h2 className="mb-2 font-semibold">Budget vs Revenue</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <ScatterChart>
                            <CartesianGrid stroke="#555" />
                            <XAxis type="number" dataKey="budget" name="Budget ($M)" stroke="#ccc" />
                            <YAxis type="number" dataKey="revenue" name="Revenue ($M)" stroke="#ccc" />
                            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                            <Scatter name="Movies" data={budgetVsRevenue} fill="#8884d8" />
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>

                {/* 4. Bar Chart: Runtime by Decade */}
                <div className="bg-[#3d3d3d] rounded-2xl p-4 shadow-lg">
                    <h2 className="mb-2 font-semibold">Avg Runtime by Decade</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={runtimeByDecade}>
                            <CartesianGrid stroke="#555" />
                            <XAxis dataKey="decade" stroke="#ccc" />
                            <YAxis stroke="#ccc" />
                            <Tooltip />
                            <Bar dataKey="runtime" fill="#00C49F" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* 5. Horizontal Bar: Country Production */}
                <div className="bg-[#3d3d3d] rounded-2xl p-4 shadow-lg">
                    <h2 className="mb-2 font-semibold">Top Countries by Production</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={countriesProduction} layout="vertical">
                            <CartesianGrid stroke="#555" />
                            <XAxis type="number" stroke="#ccc" />
                            <YAxis type="category" dataKey="country" stroke="#ccc" />
                            <Tooltip />
                            <Bar dataKey="movies" fill="#ffc658" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* 6. Area Chart: Streaming vs Theatrical */}
                <div className="bg-[#3d3d3d] rounded-2xl p-4 shadow-lg">
                    <h2 className="mb-2 font-semibold">Streaming vs Theatrical</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <AreaChart data={streamingVsTheatrical}>
                            <CartesianGrid stroke="#555" />
                            <XAxis dataKey="year" stroke="#ccc" />
                            <YAxis stroke="#ccc" />
                            <Tooltip />
                            <Area type="monotone" dataKey="streaming" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                            <Area type="monotone" dataKey="theatrical" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* 7. Combo: Awards */}
                <div className="bg-[#3d3d3d] rounded-2xl p-4 shadow-lg">
                    <h2 className="mb-2 font-semibold">Awards vs Nominations</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={awardsData}>
                            <CartesianGrid stroke="#555" />
                            <XAxis dataKey="movie" stroke="#ccc" />
                            <YAxis stroke="#ccc" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="nominations" fill="#8884d8" />
                            <Bar dataKey="awards" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* 8. Radar: Profitability by Genre */}
                <div className="bg-[#3d3d3d] rounded-2xl p-4 shadow-lg">
                    <h2 className="mb-2 font-semibold">Profitability by Genre</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={profitabilityByGenre}>
                            <PolarGrid stroke="#555" />
                            <PolarAngleAxis dataKey="genre" stroke="#ccc" />
                            <PolarRadiusAxis stroke="#ccc" />
                            <Radar name="Profit %" dataKey="profit" stroke="#ff8042" fill="#ff8042" fillOpacity={0.6} />
                            <Tooltip />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>

                {/* 9. Line: Trending Movies */}
                <div className="bg-[#3d3d3d] rounded-2xl p-4 shadow-lg">
                    <h2 className="mb-2 font-semibold">Trending Movies (Week)</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={trendingMovies}>
                            <CartesianGrid stroke="#555" />
                            <XAxis dataKey="day" stroke="#ccc" />
                            <YAxis stroke="#ccc" />
                            <Tooltip />
                            <Line type="monotone" dataKey="popularity" stroke="#FF4444" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* 10. Donut Chart: Revenue by Region */}
                <div className="bg-[#3d3d3d] rounded-2xl p-4 shadow-lg">
                    <h2 className="mb-2 font-semibold">Global Revenue by Region</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={revenueByRegion}
                                dataKey="value"
                                nameKey="region"
                                innerRadius={50}
                                outerRadius={100}
                                paddingAngle={5}
                            >
                                {revenueByRegion.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
};

export default Charts;
