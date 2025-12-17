import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Terms and Conditions
              </h1>
              <p className="text-lg text-gray-600">
                Syarat dan Ketentuan Layanan <span className="text-blue-600 font-semibold">WIHARSONO</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Penerimaan Syarat</h2>
                <p className="text-gray-700 leading-relaxed">
                  Dengan mengakses dan menggunakan layanan perdagangan eceran dari WIHARSONO, Anda setuju untuk terikat 
                  oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, 
                  Anda tidak boleh menggunakan layanan kami.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definisi</h2>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>"WIHARSONO"</strong> merujuk pada perusahaan perdagangan eceran yang beralamat di 
                    Jl. Walisongo No 13, Mangunsari, Sidomukti, Salatiga, Jawa Tengah.
                  </p>
                  <p className="text-gray-700">
                    <strong>"Layanan"</strong> merujuk pada semua aktivitas perdagangan eceran yang disediakan oleh WIHARSONO.
                  </p>
                  <p className="text-gray-700">
                    <strong>"Pelanggan"</strong> merujuk pada individu atau entitas yang menggunakan layanan WIHARSONO.
                  </p>
                  <p className="text-gray-700">
                    <strong>"Produk"</strong> merujuk pada barang atau jasa yang diperdagangkan oleh WIHARSONO.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Deskripsi Layanan</h2>
                <p className="text-gray-700 leading-relaxed">
                  WIHARSONO menyediakan layanan perdagangan eceran yang tidak beroperasi dari toko fisik, kios, 
                  atau pasar tradisional. Kami berfokus pada penyediaan berbagai produk melalui sistem perdagangan 
                  modern yang efisien untuk memberikan harga kompetitif dan kualitas terbaik kepada pelanggan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kewajiban Pelanggan</h2>
                <p className="text-gray-700 mb-4">
                  Sebagai pelanggan WIHARSONO, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Memenuhi kewajiban pembayaran tepat waktu</li>
                  <li>Menggunakan layanan secara bertanggung jawab</li>
                  <li>Mematuhi semua peraturan dan hukum yang berlaku</li>
                  <li>Tidak melakukan aktivitas penipuan atau pemalsuan</li>
                  <li> Menghormati hak milik intelektual WIHARSONO</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Harga dan Pembayaran</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 Harga</h3>
                    <p className="text-gray-700">
                      Harga produk dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. 
                      WIHARSONO berhak menyesuaikan harga sesuai dengan kondisi pasar.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">5.2 Pembayaran</h3>
                    <p className="text-gray-700">
                      Pembayaran harus dilakukan sesuai dengan metode yang disepakati. 
                      Keterlambatan pembayaran dapat dikenakan denda sesuai dengan kebijakan WIHARSONO.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Pengiriman dan Pengembalian</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">6.1 Pengiriman</h3>
                    <p className="text-gray-700">
                      WIHARSONO akan berusaha mengirimkan produk sesuai dengan waktu yang disepakati. 
                      Namun, kami tidak bertanggung jawab atas keterlambatan yang disebabkan oleh faktor di luar kendali kami.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">6.2 Pengembalian</h3>
                    <p className="text-gray-700">
                      Produk dapat dikembalikan dalam kondisi tertentu sesuai dengan kebijakan pengembalian WIHARSONO. 
                      Pengembalian harus disertai dengan bukti pembayaran yang sah.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Kekayaan Intelektual</h2>
                <p className="text-gray-700">
                  Semua merek dagang, logo, dan materi konten milik WIHARSONO dilindungi oleh hukum kekayaan intelektual. 
                  Penggunaan tanpa izin tertulis dari WIHARSONO adalah dilarang.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Pembatasan Tanggung Jawab</h2>
                <p className="text-gray-700">
                  WIHARSONO tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang timbul dari 
                  penggunaan layanan kami. Tanggung jawab kami dibatasi pada nilai transaksi yang terkait dengan klaim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privasi</h2>
                <p className="text-gray-700">
                  Privasi Anda penting bagi kami. Penggunaan data pribadi Anda diatur oleh Kebijakan Privasi WIHARSONO 
                  yang dapat diakses melalui website kami.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Terminasi</h2>
                <p className="text-gray-700">
                  WIHARSONO berhak menghentikan atau menangguhkan layanan kepada pelanggan yang melanggar 
                  Syarat dan Ketentuan ini. Pelanggan juga berhak menghentikan penggunaan layanan kapan saja.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Perubahan Syarat dan Ketentuan</h2>
                <p className="text-gray-700">
                  WIHARSONO berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu. Perubahan akan diberitahukan 
                  melalui website atau komunikasi langsung. Penggunaan layanan yang berkelanjutan merupakan 
                  persetujuan Anda terhadap syarat yang diperbarui.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Hukum yang Berlaku</h2>
                <p className="text-gray-700">
                  Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                  Setiap sengketa akan diselesaikan melalui musyawarah terlebih dahulu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Kontak Kami</h2>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
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