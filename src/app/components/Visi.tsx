import React from 'react'

type Props = {}

export default function Visi({}: Props) {
  return (
    <div className='text-white flex p-20 flex-col items-center bg-orange-500'>
        <p className='text-3xl font-bold'>Visi & Misi </p>
        <div className='grid grid-cols-2 w-full h-full items-center mt-5'>
            <div className="borded flex flex-col px-4">
                <p className='font-semibold text-2xl pb-3'>Visi</p>
                <p className='text-base text-justify font-light'>Menjadikan HMIF sebagai wadah bagi anggota maupun calon anggota untuk mengembangkan diri dalam bidang akademik maupun non akademik dan menjadikan HMIF ITI menjadi organisasi yang aktif 
                    solutif dan produktif secara internal maupun eksternal demi terwujudnya Tri Dharma Perguruan Tinggi</p>                
            </div>
            <div className="flex flex-col px-4 space-y-4">
                <p className='font-semibold text-2xl pb-3'>Misi</p>
                <p className='text-base text-justify font-light'>1.Meningkatkan kualitas secara akademik setiap anggota maupun calon anggota HMIF ITI</p>
                <p className='text-base text-justify font-light'>2.Meningkatkan kualitas kegiatan sosial mahasiswa</p>
                <p className='text-base text-justify font-light'>3.Membangun jaringan & kemitraan dengan pihak kampus organisasi kemahasiswaan lain & masyarakat umum</p>
            </div>


        </div>
    </div>
  )
}