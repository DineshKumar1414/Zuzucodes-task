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
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 mb-6 border border-blue-100">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
      
        <div className="flex flex-row justify-start gap-4 md:flex">
          <Select value={selectedRating} onValueChange={onRatingChange}>
            <SelectTrigger className="w-full sm:w-40 bg-white">
              <SelectValue placeholder="All ratings" />
            </SelectTrigger>
            <SelectContent>
              {filterOptions.ratings.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger className="w-full sm:w-40 bg-white">
              <SelectValue placeholder="All locations" />
            </SelectTrigger>
            <SelectContent>
              {filterOptions.locations.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedResponseTime} onValueChange={onResponseTimeChange}>
            <SelectTrigger className="w-full sm:w-48 bg-white">
              <SelectValue placeholder="All response times" />
            </SelectTrigger>
            <SelectContent>
              {filterOptions.responseTimes.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="md:flex items-center gap-2 hidden font-bold text-gray-900 px-4">
            <span className="text-2xl">{matchCount}</span>
            <span className="text-2xl">{matchCount === 1 ? "match" : "matches"}</span>
          </div>
        </div>

        <Select value={selectedSort} onValueChange={onSortChange}>
          <SelectTrigger className="w-full lg:w-48 bg-white hidden md:flex">
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

        <div className="items-center gap-2 font-bold sm:flex justify-start md:hidden text-gray-900 px-4">
            <span className="text-2xl">{matchCount}</span>
            <span className="text-2xl">{matchCount === 1 ? "match" : "matches"}</span>
          </div>

      

                 </div>
      </div>
   
  )
}

export default Filters
