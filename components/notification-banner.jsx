"use client"

import { Button } from "./ui/button.jsx"

const NotificationBanner = ({ banner }) => {
  const bgColorClass = {
    info: "bg-gradient-to-r from-cyan-400 to-cyan-500",
    warning: "bg-gradient-to-r from-yellow-400 to-yellow-500",
    success: "bg-gradient-to-r from-green-400 to-green-500",
  }[banner.type]

  return (
    <div className={`${bgColorClass} rounded-lg p-4 mb-6 text-white`}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-medium text-sm md:text-base">
            <span className="text-yellow-300 font-bold">{banner.title}</span> {banner.description}
          </p>
        </div>
        <Button
          className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded font-medium whitespace-nowrap text-sm"
          onClick={banner.ctaAction}
        >
          {banner.ctaText}
        </Button>
      </div>
    </div>
  )
}

export default NotificationBanner
