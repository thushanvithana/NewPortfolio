import Image from 'next/image'
import logo from 'https://i.postimg.cc/zD0971Dy/Untitled-design.webp'
 
export default function logo() {
  return (
    <Image
      src={logo}
      alt="Picture of the author"
    
    />
  )
}