import React, { useState } from 'react';
import { Briefcase, DollarSign, MapPin, Calendar, Search } from 'lucide-react';

// Custom Button component
const Button = ({ className = '', children, ...props }) => (
  <button className={`px-4 py-2 font-semibold rounded-lg shadow ${className}`} {...props}>
    {children}
  </button>
);

// Custom Input component
const Input = ({ icon, ...props }) => (
  <div className="relative">
    {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>}
    <input
      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
      {...props}
    />
  </div>
);

// Custom Card components
const Card = ({ children, className = '' }) => (
  <div className={`rounded-lg shadow-md p-4 ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`border-b pb-2 mb-4 ${className}`}>{children}</div>
);

const CardContent = ({ children }) => <div className="mb-4">{children}</div>;

const CardFooter = ({ children }) => <div className="mt-4">{children}</div>;

const AcceptGigs = () => {
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
    minReward: '',
    date: ''
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Mock data for gigs
  const gigs = [
    { id: 1, title: 'Web Development', type: 'Skilled', reward: 500, location: 'New York', date: '2024-09-10' },
    { id: 2, title: 'House Cleaning', type: 'Unskilled', reward: 50, location: 'Los Angeles', date: '2024-09-11' },
    { id: 3, title: 'Logo Design', type: 'Skilled', reward: 200, location: 'Chicago', date: '2024-09-12' },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-black">Available Gigs</h1>
        <p className="text-xl text-gray-700">Find and accept jobs that match your skills</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="jobType"
              value={filters.jobType}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            >
              <option value="">All Job Types</option>
              <option value="Skilled">Skilled</option>
              <option value="Unskilled">Unskilled</option>
            </select>
            <Input
              name="location"
              placeholder="Location"
              value={filters.location}
              onChange={handleFilterChange}
              icon={<MapPin className="text-gray-500" />}
            />
            <Input
              name="minReward"
              type="number"
              placeholder="Minimum Reward"
              value={filters.minReward}
              onChange={handleFilterChange}
              icon={<DollarSign className="text-gray-500" />}
            />
            <Input
              name="date"
              type="date"
              value={filters.date}
              onChange={handleFilterChange}
              icon={<Calendar className="text-gray-500" />}
            />
          </div>
          <Button className="mt-4 w-full bg-black hover:bg-gray-800 text-white">
            <Search className="mr-2 text-white" />
            Apply Filters
          </Button>
        </div>

        <div className="space-y-4">
          {gigs.map((gig) => (
            <Card key={gig.id} className="bg-white border border-gray-300">
              <CardHeader className="flex flex-row justify-between items-center">
                <h3 className="text-xl font-semibold text-black">{gig.title}</h3>
                <span className={`px-2 py-1 rounded-full text-sm ${gig.type === 'Skilled' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {gig.type}
                </span>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2 text-gray-800">
                  <DollarSign className="mr-2 text-gray-600" />
                  <span>${gig.reward}</span>
                </div>
                <div className="flex items-center mb-2 text-gray-800">
                  <MapPin className="mr-2 text-gray-600" />
                  <span>{gig.location}</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <Calendar className="mr-2 text-gray-600" />
                  <span>{gig.date}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  View Details & Apply
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AcceptGigs;
