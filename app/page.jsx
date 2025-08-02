"use client"

import { useState, useMemo } from "react"
import { Header } from "../components/header.jsx"
import TabNavigation from "../components/tab-navigation.jsx"
import Filters from "../components/filters.jsx"
import NotificationBanner from "../components/notification-banner.jsx"
import ProfessionalCard from "../components/professional-card.jsx"
import { Button } from "../components/ui/button.jsx"
import { professionals } from "../data/professionals.jsx"
import { filterOptions } from "../data/filters.jsx"
import { currentUser } from "../data/user.jsx"

export default function LocalistsPage() {
  const [activeTab, setActiveTab] = useState("matches")
  const [selectedRating, setSelectedRating] = useState("all-ratings")
  const [selectedLocation, setSelectedLocation] = useState("all-locations")
  const [selectedResponseTime, setSelectedResponseTime] = useState("all-response-times")
  const [selectedSort, setSelectedSort] = useState("best-match")

  const filteredProfessionals = useMemo(() => {
    let filtered = [...professionals]

    if (selectedRating !== "all-ratings") {
      const minRating =
        selectedRating === "5-stars" ? 5 : selectedRating === "4-plus" ? 4 : selectedRating === "3-plus" ? 3 : 0
      filtered = filtered.filter((p) => p.rating >= minRating)
    }

    if (selectedLocation !== "all-locations") {
      if (selectedLocation === "nearby") {
        filtered = filtered.filter((p) => p.distance.includes("miles"))
      } else if (selectedLocation === "remote") {
        filtered = filtered.filter((p) => p.location.includes("Remote") || p.location.includes("Multiple"))
      } else {
        filtered = filtered.filter((p) => p.location.toLowerCase().includes(selectedLocation.toLowerCase()))
      }
    }

    if (selectedResponseTime !== "all-response-times") {
      if (selectedResponseTime === "fast") {
        filtered = filtered.filter((p) => p.responseTime.includes("1 hour") || p.responseTime.includes("2 hours"))
      } else if (selectedResponseTime === "same-day") {
        filtered = filtered.filter((p) => p.responseTime.includes("hour") || p.responseTime.includes("hours"))
      }
    }

    switch (selectedSort) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "distance":
        filtered.sort((a, b) => {
          const aDistance = Number.parseFloat(a.distance.match(/[\d.]+/)?.[0] || "999")
          const bDistance = Number.parseFloat(b.distance.match(/[\d.]+/)?.[0] || "999")
          return aDistance - bDistance
        })
        break
      case "reviews":
        filtered.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      default:
        break
    }

    return filtered
  }, [selectedRating, selectedLocation, selectedResponseTime, selectedSort])

  const notificationBanner = {
    id: "1",
    type: "info",
    title: "Recommended:",
    description: `Request replies from your top 5 matches to hear back faster`,
    ctaText: "Request your best matches here",
    ctaAction: () => {
      console.log("Requesting best matches...")
    },
  }

  const handleRequestReply = (professionalId) => {
    console.log("Requesting reply from professional:", professionalId)
  }

  const handleViewProfile = (professionalId) => {
    console.log("Viewing profile:", professionalId)
  }

  const handleLogin = () => {
    console.log("Login clicked")
  }

  const handleLogout = () => {
    console.log("Logout clicked")
  }

  const handleRequestBestMatches = () => {
    console.log("Requesting best matches...")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={currentUser} onLogin={handleLogin} onLogout={handleLogout} />
      <main className="max-w-7xl mx-auto px-4 py-6 2xl:max-w-[92%] 2xl:mx-0 2xl:px-8">   
        <h1 className="text-2xl md:text-4xl font-poppins font-bold text-center text-gray-900 mb-4">Web Designer</h1>
          <div className="md:hidden text-center mb-6 px-4">
          <p className="text-gray-600 font-poppins text-sm leading-relaxed">
            Your Top 5 local professional matches are below. You can contact any of the professionals to get more
            information using the contact button.
          </p>
        </div>

        <TabNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          matchCount={filteredProfessionals.length}
          replyCount={0}
        />

        {activeTab === "matches" && (
          <>
            <Filters
              filterOptions={filterOptions}
              selectedRating={selectedRating}
              selectedLocation={selectedLocation}
              selectedResponseTime={selectedResponseTime}
              selectedSort={selectedSort}
              matchCount={filteredProfessionals.length}
              onRatingChange={setSelectedRating}
              onLocationChange={setSelectedLocation}
              onResponseTimeChange={setSelectedResponseTime}
              onSortChange={setSelectedSort}
            />

            <NotificationBanner banner={notificationBanner} />

            <div className="text-center mb-6">
              <Button
                className="bg-[#F74B00] hover:bg-cyan-600 text-white px-6 md:px-8 py-3 rounded-[4px] font-medium text-sm md:text-base w-full max-w-[290px]"
                onClick={handleRequestBestMatches}
              >
                Request Your 5 Top Matches Here
              </Button>
            </div>

            <div className="space-y-6">
              {filteredProfessionals.length > 0 ? (
                filteredProfessionals.map((professional) => (
                  <ProfessionalCard
                    key={professional.id}
                    professional={professional}
                    onRequestReply={handleRequestReply}
                    onViewProfile={handleViewProfile}
                  />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No professionals match your current filters.</p>
                  <p className="text-gray-400 text-sm mt-2">Try adjusting your search criteria.</p>
                </div>
              )}
            </div>

            {filteredProfessionals.length > 0 && (
              <div className="text-center mt-8">
                <Button
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-medium text-base"
                  onClick={() => console.log("Load more professionals")}
                >
                  See More Professionals
                </Button>
              </div>
            )}
          </>
        )}

        {activeTab === "replies" && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No replies yet.</p>
            <p className="text-gray-400 text-sm mt-2">Send some requests to professionals to see their replies here.</p>
          </div>
        )}
      </main>
    </div>
  )
}
