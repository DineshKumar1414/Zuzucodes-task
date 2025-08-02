"use client"

import { Star, CheckCircle, MapPin, Zap } from "lucide-react"
import { Button } from "./ui/button.jsx"

const ProfessionalCard = ({ professional, onRequestReply, onViewProfile }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden font-poppins">
     
      <div className="hidden md:flex font-poppins">
        <div className="md:w-48 h-48 relative flex-shrink-0">
          <img
            src={professional.image || "/placeholder.svg"}
            alt={`${professional.name} workspace`}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 p-6 flex">
       
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div className="w-full flex justify-between items-center gap-1">
              <h3 className="text-xl font-bold text-gray-900">{professional.name}</h3>
              <span className="flex flex-row justify-start items-center"> {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="font-bold text-gray-900 ml-1 text-xl">{professional.reviewCount}</span></span>
            </div>
            </div>

            <div className="flex items-center gap-1 text-gray-600 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{professional.distance}</span>
            </div>


            <div className="flex flex-wrap gap-2 mb-4">
              {professional.services.map((service, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
                  {service}
                </span>
              ))}
            </div>

       
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{professional.description}</p>

          
            <div className="flex items-center justify-between">
              <button
                className="text-cyan-500 hover:text-cyan-600 font-medium text-sm transition-colors"
                onClick={() => onViewProfile(professional.id)}
              >
                View Profile →
              </button>
              <Button
                variant="outline"
                size="sm"
                className="bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200"
              >
                <Zap className="w-4 h-4 mr-1 text-blue-600" />
                Quick to respond
              </Button>
            </div>
          </div>

        
          <div className="w-48 flex-shrink-0 bg-blue-50 flex flex-col items-center justify-center p-4 gap-4">
           
            <CheckCircle className="w-8 h-8 text-green-500" />
            <Button
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-[4px] font-medium text-base w-full"
              onClick={() => onRequestReply(professional.id)}
            >
              Request reply
            </Button>
          </div>
        </div>
      </div>

     
      <div className="md:hidden p-4 font-poppins">
        <div className="flex items-start mb-4">
         
          <div className="w-24 h-24 flex-shrink-0 relative rounded-md overflow-hidden mr-4">
            <img
            src={professional.image || "/placeholder.svg"}
            alt={`${professional.name} workspace`}
            className="object-cover w-full h-full"
          />
          </div>

       
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <h3 className="text-lg font-bold text-gray-900">{professional.name}</h3>
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-sm mb-2">
              <MapPin className="w-3 h-3" />
              <span>{professional.distance}</span>
            </div>
          </div>
        </div>

     
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
            {professional.services[0]}
          </span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="font-bold text-gray-900 ml-1">{professional.reviewCount}</span>
          </div>
        </div>

      
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{professional.description}</p>

       
        <div className="flex items-center justify-between mb-6">
          <button
            className="text-cyan-500 hover:text-cyan-600 font-medium text-sm"
            onClick={() => onViewProfile(professional.id)}
          >
            View Profile →
          </button>
          <Button variant="outline" size="sm" className="bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200">
            <Zap className="w-4 h-4 mr-1 text-blue-600" />
            Quick to respond
          </Button>
        </div>

        {/* Request Reply Button */}
        <div className="bg-blue-50 rounded-lg p-3 flex items-center justify-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <Button
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-[4px] font-medium text-base flex-1"
            onClick={() => onRequestReply(professional.id)}
          >
            Request reply
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalCard
