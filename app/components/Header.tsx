import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-green-400 text-white py-4'>
      <div className='flex items-center justify-between'>
        <div>
          <h4 className='text-xl ml-2'>LOGO</h4>
        </div>
        <div>
          <ul className='flex gap-12 mr-4 font-bold text-xl'>
            <li> <Link href={"/"}>Home </Link></li>
            <li><Link href={"/contact"}>Contact </Link></li>
            <li><Link href={"/counter"}>counter </Link></li>
            <li><Link href={"/service"}>Service </Link></li>
            <li><Link href={"/counter-app"}>counter-app </Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header