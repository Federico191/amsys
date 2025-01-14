import Navbar from "../Components/Fragments/Navbar"
import CardMain from "../Components/Fragments/CardMain"


const DashboardPage = () => {  
  const pathName = window.location.pathname
  return (
    <div className={`w-full bg-[url('./assets/images/BackgroundDashboard.svg')] bg-no-repeat bg-cover`}>      
      <Navbar types={"dashboard-navbar"} />  
      <div className="w-full flex flex-col mx-auto mt-[40%] md:mt-[9%] justify-center items-center">
        <h1 className="text-[15px] md:text-[38px] 2xl:text-[42px] font-bold text-tBlue animate-fade animate-delay-200">Academic Monitoring System</h1>
        <p className="w-[60%] md:w-[40%] text-[12px] md:text-[15px] 2xl:text-[18px] font-medium animate-fade animate-delay-300">Dapatkan akses real-time untuk memantau nilai, kehadiran dan tugas anak Anda secara terperinci.</p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-36 mt-20 mb-10 animate-fade-right">
        <CardMain title={'Kemahasiswaan'} imageUrl="https://amsys.vercel.app/images/kemahasiswaan.png" navigate={""} content={["Hubungi Dosen Pembimbing Akademik","Kartu Hasil Studi dan Evaluasi"]}/>
        <CardMain title={'Akademik'} imageUrl="https://amsys.vercel.app/images/akademik.png" navigate={"/akademik"} content={["Statistik IPK","Jadwal Kuliah","KHS Evaluasi","Kehadiran"]}/>
        <CardMain title={'Informasi'} imageUrl="https://amsys.vercel.app/images/informasi.png" navigate={""} content={["Akademik","Kalender Akademik","Biaya","Terkini"]}/>
      </div>      
    </div>
  )
}

export default DashboardPage