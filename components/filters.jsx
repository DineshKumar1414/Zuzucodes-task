"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select.jsx"

const Filters = ({
  filterOptions,
  selectedRating,
  selectedLocation,
  selectedResponseTime,
  selectedSort,
  matchCount,
  onRatingChange,
  onLocationChange,
  onResponseTimeChange,
  onSortChange,
}) => {
  return (
   <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 xs:p-0 mb-6 border border-blue-100">
  <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">

   
    <div className="items-center gap-2 font-bold flex justify-start md:hidden text-gray-900 px-0">
      <span className="sm:text-md">{matchCount}</span>
      <span className="sm:text-md">{matchCount === 1 ? "match" : "matches"}</span>
    </div>

   
    <div className="flex flex-row flex-wrap md:flex-nowrap gap-4 w-full lg:w-auto">
      <Select value={selectedRating} onValueChange={onRatingChange}>
        <SelectTrigger className="min-w-[140px] bg-white whitespace-nowrap">
          <SelectValue placeholder="All ratings" />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.ratings.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option?.label || 'All Ratings'}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedLocation} onValueChange={onLocationChange}>
        <SelectTrigger className="min-w-[140px] bg-white whitespace-nowrap">
          <SelectValue placeholder="All locations" />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.locations.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option?.label || 'All locations'}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedResponseTime} onValueChange={onResponseTimeChange}>
        <SelectTrigger className="min-w-[160px] bg-white whitespace-nowrap">
          <SelectValue placeholder="All response times" />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.responseTimes.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option?.label || 'All response times'}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Match count on larger screens */}
      <div className="md:flex items-center gap-2 hidden font-bold text-gray-900 px-4">
        <span className="text-2xl">{matchCount}</span>
        <span className="text-2xl">{matchCount === 1 ? "match" : "matches"}</span>
      </div>
    </div>

    {/* Sort dropdown for medium+ screens */}
    <Select value={selectedSort} onValueChange={onSortChange}>
      <SelectTrigger className="hidden md:flex w-full md:w-48 bg-white whitespace-nowrap">
        <SelectValue placeholder="Sort by: best match" />
      </SelectTrigger>
      <SelectContent>
        {filterOptions.sortOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>

  </div>
</div>

   
  )
}

export default Filters
