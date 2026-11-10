import Image from "next/image";

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-12">Space Stations Around the World</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

                {/* ISS Card  https://en.wikipedia.org/wiki/International_Space_Station*/}
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                    <div className="relative w-full">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/6/65/The_station_pictured_from_the_SpaceX_Crew_Dragon_1.jpg"
                            alt="ISS"
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>
                    <div className="flex-grow p-6 text-gray-700">
                        <h2 className="text-2xl font-bold mb-2">ISS</h2>
                        <div className="flex">
                            <p>Country: International</p>
                            <p>Crew Capacity: 7</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold mb-2">Specifications</h3>
                            <ul>
                                <li>Length: 73 meters</li>
                                <li>Mass: 450,000 kg</li>
                            </ul>
                        </div>
                        <p className="mt-4">International Space Station - Largest human-made object in space</p>
                    </div>
                </div>


            </div>
        </div>
    );
}
