"use client"
import { useState, useEffect } from "react"
import Announcement from "../Announcement"

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [prevScrollY, setPrevScrollY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrolledUp = currentScrollY < prevScrollY

      if (scrolledUp) {
        setIsOpen(true)
      } else if (currentScrollY > 100) {
        setIsOpen(false)
      }

      setPrevScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollY])

  return (
    <>
      <header className="w-full sticky top-0 z-50">
        <div
          className={`w-full transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Announcement />
        </div>
      </header>
    </>
  )
}

export default Header
