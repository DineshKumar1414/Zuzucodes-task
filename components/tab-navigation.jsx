"use client"

import { Button } from "./ui/button.jsx"

const TabNavigation = ({ activeTab, onTabChange, replyCount }) => {
  return (
    <div className="flex justify-center mb-6 md:mb-8">
<div className="flex gap-3 w-[80%] mx-auto sm:w-full sm:mx-0 md:w-auto max-w-md">

        <Button
          variant={activeTab === "matches" ? "primary" : "ghost"}
          className={`flex-1 md:flex-none px-4 md:px-6 py-3 rounded-lg text-sm ${
            activeTab === "matches" ? "bg-cyan-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
          onClick={() => onTabChange("matches")}
        >
          Your matches
        </Button>
        <Button
          variant={activeTab === "replies" ? "primary" : "ghost"}
          className={`flex-1 md:flex-none px-4 md:px-6 py-3 rounded-lg text-sm ${
            activeTab === "replies" ? "bg-gray-900 text-white" : "bg-gray-900 text-white hover:bg-gray-800"
          }`}
          onClick={() => onTabChange("replies")}
        >
          Replies
          {replyCount !== undefined && replyCount > 0 && (
            <span className="ml-2 bg-white text-gray-900 text-xs px-2 py-1 rounded-full">{replyCount}</span>
          )}
        </Button>
      </div>
    </div>
  )
}

export default TabNavigation
