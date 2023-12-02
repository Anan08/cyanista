import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 px-20 items-center ">
      <Image src="/logo.png" width={40} height={40} alt="logo hmif" />
      <div className="flex space-x-4">
        <a href="">Beranda</a>
        <a href="">Prestasi</a>
        <a href="">Gallery</a>
        <a href="">Departemen</a>
        <a href="">Kepengurusan</a>
      </div>
    </div>
  )
}

export default Navbar