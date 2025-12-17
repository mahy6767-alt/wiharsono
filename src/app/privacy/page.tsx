import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600">
                Kebijakan Privasi <span className="text-blue-600 font-semibold">WIHARSONO</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Pendahuluan</h2>
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di WIHARSONO. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                  Kebijakan Privasi ini menjelaskan bagaimana WIHARSONO mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda 
                  saat menggunakan layanan perdagangan eceran kami.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Informasi Pribadi</h3>
                    <p className="text-gray-700">
                      Kami dapat mengumpulkan informasi pribadi seperti:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                      <li>Nama lengkap</li>
                      <li>Nomor telepon</li>
                      <li>Alamat email</li>
                      <li>Alamat pengiriman</li>
                      <li>Informasi pembayaran</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2 Informasi Non-Pribadi</h3>
                    <p className="text-gray-700">
                      Kami juga mengumpulkan informasi non-pribadi seperti:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                      <li>Data browser dan perangkat</li>
                      <li>Alamat IP</li>
                      <li>Cookies dan teknologi pelacakan lainnya</li>
                      <li>Informasi penggunaan website</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Penggunaan Informasi</h2>
                <p className="text-gray-700 mb-4">
                  WIHARSONO menggunakan informasi yang dikumpulkan untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Memproses dan menyelesaikan transaksi perdagangan</li>
                  <li>Menyediakan layanan pelanggan dan dukungan</li>
                  <li>Mengirimkan informasi produk dan promosi</li>
                  <li>Meningkatkan kualitas layanan kami</li>
                  <li>Melindungi dari aktivitas penipuan dan penyalahgunaan</li>
                  <li>Mematuhi kewajiban hukum dan peraturan</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Berbagi Informasi</h2>
                <p className="text-gray-700 mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, 
                  kecuali dalam situasi berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Dengan persetujuan Anda yang eksplisit</li>
                  <li>Kepada mitra bisnis yang membantu kami menyediakan layanan</li>
                  <li>Untuk mematuhi hukum, peraturan, atau proses hukum</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan WIHARSONO atau pelanggan</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Keamanan Data</h2>
                <p className="text-gray-700">
                  WIHARSONO menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda 
                  dari akses tidak sah, penggunaan yang tidak tepat, atau perubahan. Namun, tidak ada metode transmisi 
                  internet atau penyimpanan elektronik yang 100% aman.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Hak Anda</h2>
                <p className="text-gray-700 mb-4">
                  Sebagai pengguna layanan WIHARSONO, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Mengakses dan memperbarui informasi pribadi Anda</li>
                  <li>Meminta penghapusan data pribadi Anda</li>
                  <li>Menolak pemasaran langsung dari kami</li>
                  <li>Meminta salinan data pribadi yang kami simpan</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
                <p className="text-gray-700">
                  Website WIHARSONO menggunakan cookies untuk meningkatkan pengalaman pengguna. 
                  Cookies adalah file teks kecil yang disimpan di browser Anda. Anda dapat mengatur browser 
                  untuk menolak cookies, namun ini dapat mempengaruhi fungsionalitas website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Perubahan Kebijakan</h2>
                <p className="text-gray-700">
                  WIHARSONO dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
                  diberitahukan melalui website atau komunikasi langsung. Penggunaan layanan kami yang 
                  berkelanjutan merupakan persetujuan Anda terhadap kebijakan yang diperbarui.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Kontak Kami</h2>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlakuan data pribadi Anda, 
                  silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>WIHARSONO</strong></p>
                  <p className="text-gray-700">Jl. Walisongo No 13, Mangunsari, Sidomukti</p>
                  <p className="text-gray-700">Kota Salatiga, Provinsi Jawa Tengah</p>
                  <p className="text-gray-700">Telepon: 0823-1059-8347</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}