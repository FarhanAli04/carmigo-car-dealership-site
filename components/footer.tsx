import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Carmigo</h3>
            <p className="text-gray-300 mb-4">
              Your Car Buddy for a Better Ride. Quality used cars in Houston with transparent pricing and exceptional
              service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/inventory" className="text-gray-300 hover:text-white">
                  Browse Inventory
                </Link>
              </li>
              <li>
                <Link href="/financing" className="text-gray-300 hover:text-white">
                  Financing Options
                </Link>
              </li>
              <li>
                <Link href="/trade-in" className="text-gray-300 hover:text-white">
                  Trade-In Value
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Vehicle Inspection</li>
              <li className="text-gray-300">Auto Financing</li>
              <li className="text-gray-300">Trade-In Appraisal</li>
              <li className="text-gray-300">Extended Warranties</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-gray-300">123 Main St, Houston, TX 77001</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-gray-300">(713) 555-CARS</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-gray-300">info@carmigo.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-gray-300">Mon-Sat: 9AM-8PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Carmigo. All rights reserved. |
            <Link href="/privacy" className="hover:text-white ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-white ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
