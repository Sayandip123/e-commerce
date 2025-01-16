"use client"
import styles from '@/styles/header.module.css'
import { useState } from "react";
import Container from './home/Container'

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return(
    <header className={styles.header}>
    <Container className="px-4 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className={styles.logo}>
        <a href="/">Fana-Zone</a>
      </div>

      {/* Search Bar */}
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search products..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m2.7-4.2a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className={styles.navLinks}>
        <a href="/" className={styles.navLink}>
          Home
        </a>
        <a href="/shop" className={styles.navLink}>
          Shop
        </a>
        <a href="/about" className={styles.navLink}>
          About
        </a>
        <a href="/contact" className={styles.navLink}>
          Contact
        </a>
      </nav>

      {/* Cart and Menu Icons */}
      <div className={styles.iconContainer}>
        <button className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 bg-black rounded-md p-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m2.7-4.2a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
            />
          </svg>
        </button>
        <button className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 bg-black rounded-md p-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h18M3 7h18m-9 10h9"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </Container>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <nav className={styles.mobileMenu}>
        <a href="/" className={styles.mobileMenuLink}>
          Home
        </a>
        <a href="/shop" className={styles.mobileMenuLink}>
          Shop
        </a>
        <a href="/about" className={styles.mobileMenuLink}>
          About
        </a>
        <a href="/contact" className={styles.mobileMenuLink}>
          Contact
        </a>
      </nav>
    )}
  </header>
  )
}