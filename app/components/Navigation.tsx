'use client';

import React from 'react'
import Link from "next/link";
import { FaHome, FaCompass } from 'react-icons/fa';
import styles from '../styles/navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/"><FaHome />Home</Link>
      <Link href="/discover"><FaCompass />Discover</Link>
    </nav>
  )
}