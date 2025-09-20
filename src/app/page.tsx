import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ShoppingCart } from "lucide-react";

const games = [
  {
    id: 1,
    title: "KCB vs Impala RFC - League Opener",
    date: "May 10, 2025",
    time: "4:00 PM",
    location: "KCB Grounds, Nairobi",
    price: 800,
    image: "https://ke.kcbgroup.com/images/sports/rugby_4.jpg"
  },
  {
    id: 2,
    title: "KCB vs Homeboyz - Midseason Clash",
    date: "May 17, 2025",
    time: "3:00 PM",
    location: "RFUEA Grounds, Nairobi",
    price: 1000,
    image: "https://ke.kcbgroup.com/images/IMAGE_-5.jpg"
  },
  {
    id: 3,
    title: "KCB vs Kabras - Top of the Table Showdown",
    date: "May 31, 2025",
    time: "5:00 PM",
    location: "Kasarani Stadium",
    price: 1500,
    image: "https://ke.kcbgroup.com/images/blog/kabras-preps-1.jpeg"
  },
  {
    id: 4,
    title: "KCB vs Blak Blad - Final Day Show",
    date: "June 7, 2025",
    time: "2:00 PM",
    location: "KCB Grounds, Nairobi",
    price: 700,
    image: "https://ke.kcbgroup.com/images/soar-africa/IMmm.jpg"
  },
];

export default function RugbyTicketSection() {
  return (
    <div className="font-sans" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Add Raleway font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap');
          body { font-family: 'Raleway', sans-serif; }
        `}
      </style>
      
      {/* Header - Matching KCB's actual header colors from images */}
      <header className="bg-lime-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Top navigation bar with dark slate background */}
          <div className="bg-slate-900 flex items-center justify-between ">
            <div className="flex items-center">
              <img src="https://ke.kcbgroup.com/templates/corporate/images/logo.svg" alt="KCB Logo" className="mr-2 h-14" />
            </div>
            <nav className="hidden md:flex space-x-6 p-4">
              <a href="#" className="hover:underline">Who We Are</a>
              <a href="#" className="hover:underline">Careers</a>
              <a href="#" className="hover:underline">Suppliers</a>
              <a href="#" className="hover:underline">Vehicle Bids</a>
              <a href="#" className="hover:underline text-lime-400">Sports & Sponsorships</a>
            </nav>
            <div className="flex items-center px-4 gap-4">
              <ShoppingCart className="h-5 w-5" />
              <button className="bg-green-500 text-white text-sm px-4 py-2 rounded">
                Login
              </button>
            </div>
          </div>
        </div>
        
        {/* Secondary nav with lime background */}
        <div className="bg-lime-600 py-3">
          <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-start space-x-6">
            <a href="#" className="text-white hover:underline">Our Leaders</a>
            <a href="#" className="text-white hover:underline font-bold">Sponsorships</a>
            <a href="#" className="text-white hover:underline">Vehicles Bids</a>
            <a href="#" className="text-white hover:underline">News Room</a>
            <a href="#" className="text-white hover:underline">Suppliers</a>
            <a href="#" className="text-white hover:underline">Policies & Codes of Conduct</a>
            <a href="#" className="text-white hover:underline">Careers</a>
          </div>
        </div>
      </header>

     
      <section className="relative bg-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="bg-gray-100 rounded-lg overflow-hidden relative h-96"
            style={{
              backgroundImage:
                "url('https://ke.kcbgroup.com/images/kcb-rfc--prepares-for-national-sevens-circuit.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center right",
            }}
          >
            <div className="h-96 md:w-2/3 bg-gradient-to-r from-gray-100 to-transparent flex flex-col justify-center items-start px-8 space-y-4">
              <h2
                className="text-3xl font-bold text-slate-900"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                KCB Rugby Club Match Tickets
              </h2>
              <p className="text-gray-700 w-1/2">
                Witness the power, passion, and pride of KCB Rugby Club. The Lions are roaring through the league and maintaining their top spot. Don't miss your chance to be part of the action!
              </p>
              <Button className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 font-medium rounded-sm">
                Buy Tickets Now
              </Button>
            </div>

            
          </div>
        </div>
      </section>


      {/* Main Ticket Section */}
      <main className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-slate-900" style={{ fontFamily: "Raleway, sans-serif" }}>
            Upcoming Matches
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <Card key={game.id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-0 left-0 bg-slate-900 text-white py-1 px-3 font-bold rounded">
                    KCB Rugby
                  </div>
                </div>
                <CardContent className="p-6">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: "Raleway, sans-serif" }}>
                      {game.title}
                    </h4>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{game.date} at {game.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{game.location}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-lg font-bold text-lime-600" style={{ fontFamily: "Raleway, sans-serif" }}>
                        KES {game.price.toLocaleString()}
                      </div>
                      <Button variant="default" className="bg-lime-600 hover:bg-lime-700 text-white rounded-sm px-4 py-1 text-sm font-medium">
                        Buy Ticket
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* News Section - Based on Image 1 */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-slate-900" style={{ fontFamily: "Raleway, sans-serif" }}>
            Latest Rugby News
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 hover:shadow-md transition-all">
              <img src="https://ke.kcbgroup.com/images/kcb-rfc.jpg" alt="Rugby Match" className="w-full" />
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">Feb 20, 2023</div>
                <h4 className="font-bold text-slate-900 mb-3" style={{ fontFamily: "Raleway, sans-serif" }}>Plucky KCB RFC Unlucky Against Kabras</h4>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Rugby</span>
                  <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 hover:shadow-md transition-all">
              <img src="https://ke.kcbgroup.com/images/kcb-rfc.jpg" alt="Rugby Match" className="w-full" />
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">Jan 24, 2023</div>
                <h4 className="font-bold text-slate-900 mb-3" style={{ fontFamily: "Raleway, sans-serif" }}>KCB RFC MAINTAINS TOP SPOT IN RUGBY LEAGUE</h4>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Rugby</span>
                  <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 hover:shadow-md transition-all">
              <img src="https://ke.kcbgroup.com/images/sports/ruggby_2.jpg" alt="Rugby Match" className="w-full" />
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">Feb 13, 2023</div>
                <h4 className="font-bold text-slate-900 mb-3" style={{ fontFamily: "Raleway, sans-serif" }}>Ruthless Lions Fry Oilers In Nakuru</h4>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Rugby</span>
                  <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 hover:shadow-md transition-all">
              <img src="https://ke.kcbgroup.com/images/kcb-rfc-shifts-focus-to-the-national-7s-series.jpg" alt="Rugby Match" className="w-full" />
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-2">Dec 17, 2022</div>
                <h4 className="font-bold text-slate-900 mb-3" style={{ fontFamily: "Raleway, sans-serif" }}>KCB RFC Extends Unbeaten Run After Nakuru Win</h4>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Rugby</span>
                  <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 KCB Bank Group. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}