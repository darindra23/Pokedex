/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, {ReactElement} from 'react';
import {Modal, Backdrop, Fade} from '@material-ui/core';
import {isMobile} from 'react-device-detect';

interface Props {
  open: boolean;
  close: () => void;
}

export default function kebijakanLegal({open, close}: Props): ReactElement {
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      open={open}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={open}>
        <div
          style={{
            backgroundColor: 'white',
            height: 'auto',
            maxHeight: isMobile ? '60%' : '70%',
            width: isMobile ? '85vw' : 750,
            overflow: 'scroll',
            paddingBottom: isMobile ? 0 : 50,
            position: 'relative',
            padding: isMobile ? '4vw' : 30,
            borderRadius: isMobile ? 20 : 0,
            fontSize: isMobile ? '3.25vw' : 'auto',
            outline: 'none',
          }}>
          <p
            style={{
              margin: isMobile ? 0 : '0px 0px 30px 0px',
              fontSize: isMobile ? '4.25vw' : 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            SYARAT DAN KETENTUAN AKTIVASI KEANGGOTAAN MEGAFIT
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Setiap member, pengunjung dan seluruh karyawan yang memiliki
              riwayat perjalanan dan tinggal dari daerah manapun atau bahkan
              dari luar negeri, wajib melakukan karantina secara mandiri selama
              14 hari sebelum berkunjung ke Mega Fit.
            </li>
            <li>
              Siapapun yang hendak menggunakan fasilitas MegaFit, wajib
              mengikuti protokol kesehatan, sebagai berikut: menggunakan masker,
              cek suhu tubuh, menggunakan hand sanitizer, dan mengisi formulir
              deklarasi Kesehatan
            </li>
            <li>
              Wajib membawa alas olahraga dan sarung tangan tinju jika
              dibutuhkan.
            </li>
            <li>
              Wajib melakukan reservasi melalui website resmi Mega Fit sebelum
              melakukan check in. Reservasi menggunakan jam bulat di menit ke 60
              ( contoh: 08.00, 09.00, 10.00 ) dan batas maksimal adalah 2 jam.{' '}
            </li>
            <li>
              Untuk menggunakan sesi PT, wajib membuat appointment melalui
              website setelah membuat reservasi
            </li>
            <li>
              Beberapa layanan seperti air minum, kelas, boxing, dan playground
              saat ini ditiadakan sampai pemberitahuan lebih lanjut.
            </li>
            <li>Setiap reservasi dibatasi maksimal 120 menit / 2 jam.</li>
            <li>
              Reservasi akan dibatalkan jika Member telat melakukan check in 15
              menit sebelum jadwal.
            </li>
            <li>
              Keanggotaan yang telah diaktifkan tidak dapat dibekukan (freeze)
              kembali.
            </li>
            <li>
              Hindari berkerumun di area olahraga Mega Fit, hindari melakukan
              kontak fisik secara langsung (buat jarak minimal 1 meter dengan
              Member lain / PT), dan cuci tangan menggunakan sabun & air / hand
              sanitizer sesering mungkin.
            </li>
            <li>
              Pastikan mengelap / membersihkan alat olahraga sebelum dan setelah
              digunakan.
            </li>
            <li>
              Megafit tidak menyediakan dispenser minum untuk mencegah kontak
              langsung, member dipersilahkan membawa air minum sendiri.
            </li>
            <li>
              Di dalam area olahraga MegaFit, kami menerapkan pembatasan maximum
              7 orang per lantai (Tidak termasuk Staff MegaFit).
            </li>
          </ul>

          <p
            style={{
              margin: isMobile ? 0 : '0px 0px 30px 0px',
              fontSize: isMobile ? '4.25vw' : 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            SYARAT DAN KETENTUAN MEGAFIT
          </p>
          <p style={{margin: '0px 0px 5px 0px'}}>
            Klub ini dioperasikan oleh PT Pola Megafit Prima, dengan alamat
            bisnis di Jalan Penjernihan 1 No 40, Jakarta 10210 ("Perusahaan")
            yang tujuan utamanya adalah menyediakan fasilitas aktivitas
            kebugaran dan rekreasi bagi Anggota Klub dan tamu. Perusahaan telah
            menunjuk tim Manajemen ("Manajemen"), yang bertanggung jawab atas
            pengoperasian Klub.
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            Keangotaan (membership)
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Keanggotaan (membership) bersifat pribadi bagi Anggota dan tidak
              dapat dialihkan, dipindahtangankan, dikuasakan dan tidak dapat
              dikembalikan maupun diuangkan (non-refundable).
            </li>
            <li>
              Anggota tidak dapat meminjamkan kartu keanggotaannya ataupun
              mengizinkannya digunakan oleh siapa pun.
            </li>
            <li>
              Keanggotaan hanya dianggap sah setelah semua rincian kelengkapan
              data yang diperlukan telah diisi dengan jelas serta diverifikasi
              dan disetujui oleh admin Megafit. Anggota diharuskan untuk
              memperbarui data melalui situs www.megafit.co.id{' '}
            </li>
            <li>
              Manajemen dapat menangguhkan keanggotaan sementara jika ada
              informasi / dokumentasi yang hilang.{' '}
            </li>
            <li>
              Keanggotaan tunduk pada syarat & ketentuan Megafit sebagaimana
              yang berlaku dari waktu ke waktu dan dapat diperbaharui oleh
              manajemen kapan saja. Manajemen berhak untuk menolak aplikasi
              Keanggotaan Klub dengan alasan apapun.
            </li>
            <li>
              Keanggotaan hanya tersedia untuk mereka yang berusia 14 tahun atau
              lebih. Calon anggota di bawah usia 17 tahun membutuhkan
              persetujuan dari orang tua / wali.
            </li>
            <li>
              Selama jumlah hari masih ada maka anggota masih bisa menikmati
              fasilitas yang termasuk dalam paket yang telah dibelinya.
            </li>
            <li>
              Semua fasilitas termasuk namun tidak terbatas pada paket kelas dan
              personal trainer akan hangus apabila keanggotaannya sudah berakhir
              walaupun masa berlakunya/sesinya belum habis.
            </li>
          </ul>

          <p
            style={{
              margin: isMobile ? 0 : '0px 0px 30px 0px',
              fontSize: isMobile ? '4.25vw' : 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            SYARAT DAN KETENTUAN KEANGGOTAAN
          </p>
          <p style={{margin: '0px 0px 5px 0px'}}>
            Syarat dan ketentuan Keanggotaan Megafit tersedia dalam kertas atau
            digital.
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Syarat dan ketentuan ini berlaku dan mengikat Anda & Megafit
              ketika Anda menyetujui syarat dan ketentuan di segmen deklarasi
              ketika mendaftarkan diri melalui situs ini.
            </li>
            <li>
              Syarat dan ketentuan yang disetujui secara digital/ elektronik
              diakui secara hukum dan tidak boleh disangkal dari efek hukum,
              validitas, atau keberlakuannya.
            </li>
            <li>
              Syarat dan ketentuan ini tidak dapat dipindah tangankan atau
              dialihkan kepada pihak lain.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            BIAYA KEANGGOTAAN
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Anda setuju untuk membayar Biaya Keangotaan dan Biaya Administrasi
              sebagaimana tercantum dalam syarat & ketentuan Keanggotaan.
            </li>
            <li>
              Semua biaya termasuk namun tidak terbatas pada biaya keanggotaan,
              biaya administrasi, biaya personal trainer, biaya cuti dan iuran
              bulanan tidak dapat dikembalikan / dikurangi/diuangkan/ dirubah
              kedalam bentuk apapun.
            </li>
            <li>
              Biaya adminstrasi hanya dibayar satu kali saja selama keanggotaan
              masih aktif.
            </li>
            <li>
              Perubahan ke paket keanggotaan yang lebih kecil (downgrade) akan
              dikenakan harga yang berlaku saat ini. Perubahan ke paket
              keanggotaan yang lebih besar(upgrade) harga akan tetap mengikat
              pada kategori yang diambil pada saat pendaftaran Anda.
            </li>
            <li>
              Manajemen berhak menghentikan keanggotaan jika terjadi tunggakan
              iuran setelah masa tenggang berlalu.
            </li>
            <li>
              Pembaruan keanggotaan yang sudah lewat masa berlakunya akan
              dikenakan harga yang berlaku saat ini dan Biaya Admin.
            </li>
            <li>
              Manajemen berhak untuk memperkenalkan dan mengubah harga, paket
              dan kategori Keanggotaan dari waktu ke waktu.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            FREE TRIAL
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>Peserta tunduk pada aturan Megafit.</li>
            <li>
              Berlaku untuk pengunjung pertama dan penduduk lokal atau
              ekspatriat yang tinggal di Indonesia, berusia 14 tahun ke atas
              saja.
            </li>
            <li>ID foto diperlukan untuk masuk. </li>
            <li>
              Janji temu harus dibuat melalui web sebelumnya untuk kunjungan
              pertama yang harus didampingi oleh Konsultan Megafit.
            </li>
            <li>Berlaku selama 1 hari.</li>
            <li>Tidak berlaku dengan penawaran lain.</li>
            <li>
              Free trial hanya untuk satu kali penggunaan dan tidak dapat
              diakumulasikan.
            </li>
            <li>Harus digunakan dalam waktu 30 hari.</li>
            <li>
              Dengan mengirimkan rincian kontak Anda kepada kami, Anda dengan
              ini setuju bahwa Megafit dapat menggunakan data pribadi Anda yang
              telah Anda kirimkan kepada kami untuk menghubungi Anda melalui
              email, SMS, atau panggilan telepon untuk tujuan pemasaran.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            1 DAY PASS
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>Peserta tunduk pada aturan Megafit.</li>
            <li>
              Berlaku untuk pengunjung pertama dan penduduk lokal atau
              ekspatriat yang tinggal di Indonesia, berusia 14 tahun ke atas
              saja.
            </li>
            <li>ID foto diperlukan untuk masuk. </li>
            <li>
              Berlaku selama 1 hari dimulai dari pertama kali melakukan
              check-in.
            </li>
            <li>
              Pembelian paket selain 1 day pass akan dikenakan biaya admin yang
              berlaku.
            </li>
            <li>
              Dengan mengirimkan rincian kontak Anda kepada kami, Anda dengan
              ini setuju bahwa Megafit dapat menggunakan data pribadi Anda yang
              telah Anda kirimkan kepada kami untuk menghubungi Anda melalui
              email, SMS, atau panggilan telepon untuk tujuan pemasaran.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            PRIVATE GYM
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>Peserta tunduk pada aturan Megafit.</li>
            <li>
              Private gym merupakan layanan sewa fasilitas yang disediakan oleh
              Megafit.
            </li>
            <li>
              Jam operasional private gym diluar jam operasional Megafit.{' '}
            </li>
            <li>
              Janji temu harus dibuat melalui web sebelumnya untuk kunjungan.
            </li>
            <li>
              Apabila peserta telat dan/ atau tidak hadir maka sesi tetap
              terhitung jalan dari jam janji temu yang dipilih.
            </li>
            <li>
              Pembayaran layanan private gym sudah termasuk 1 member Megafit
              yang dapat diajak ikut serta bareng dalam sesi janji temu.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            PEMBEKUAN AKUN
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Pembekuan akun mengakibatkan akun berhenti sementara dimana jumlah
              hari tersisa tidak akan terpotong.
            </li>
            <li>
              Anggota yang akun dibekukan tidak dapat menggunakan fasilitas
              Megafit.
            </li>
            <li>Pembekuan merupakan kebijakan dari Manajemen Megafit.</li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>CUTI</p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Cuti hanya dapat diajukan oleh member yang masih memiliki
              keanggotaan aktif dan belum masuk masa tenggang.
            </li>
            <li>Pengajuan cuti dapat dilakukan minimal 1 hari sebelumnya.</li>
            <li>
              Biaya cuti adalah Rp 100.000 selama 30 hari tidak dapat
              dikembalikan/dikurangi/diuangkan/ dirubah kedalam bentuk apapun.
            </li>
            <li>Minimal periode cuti adalah 30 hari.</li>
            <li>
              Selama status anggota cuti, fasilitas megafit tidak dapat
              digunakan.
            </li>
            <li>
              Apabila anggota menggunakan fasilitas megafit sebelum masa cutinya
              habis, masa cuti sisa akan hangus dan keangotaan menjadi aktif dan
              terhitung.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            KONDISI FISIK ANGGOTA
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Anda menjamin dan menyatakan bahwa dalam kondisi fisik yang baik
              dan tidak memiliki alasan medis atau lainnya mengapa Anda tidak
              mampu melakukan kegiatan fisik. Kegiatan fisik tersebut tidak akan
              merugikan kesehatan, keamanan, kenyamanan atau kondisi fisiknya.
            </li>
            <li>
              Anda tidak boleh menggunakan fasilitas Klub saat menderita
              penyakit menular, di mana terdapat risiko bahwa penggunaan semacam
              itu dapat mempengaruhi kesehatan, keselamatan, kenyamanan atau
              kondisi fisik Anggota lain di area Megafit.
            </li>
            <li>
              Anggota dan tamu yang menggunakan fasilitas Megafit dan terlibat
              dalam latihan fisik wajib mengetahui, menyadari, dan menanggung
              segala risiko yang dapat terjadi. Seluruh anggota dan tamu
              disarankan untuk meminta persetujuan dokter sebelum melakukan
              aktivitas fisik apapun.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            PENGELUARAN/PENGHENTIAN ANGGOTA
          </p>
          <p style={{margin: '0px 0px 5px 0px'}}>
            Manajemen dapat menghentikan keangotaan setiap anggota:
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Tanpa pemberitahuan dan dengan segera berlaku jika perilaku
              anggota, dimana perilaku tersebut merupakan subjek pengaduan
              anggota atau anggota lain, sedemikian rupa sehingga menurut
              pendapat wajar manajemen, hal itu membahayakan karakter dan / atau
              kepentingan Megafit.
            </li>
            <li>
              Tanpa pemberitahuan dan segera berlaku jika anggota telah
              melakukan pelanggaran terhadap syarat & ketentuan Megafit
              sebagaimana yang berlaku dari waktu ke waktu.
            </li>
            <li>
              Tanpa pemberitahuan dan segera berlaku jika seorang anggota
              diketahui telah melanggar privasi anggota lain di area Megafit
              atau tertangkap basah melakukan tindakan yang tidak senonoh atau
              membahayakan.
            </li>
            <li>
              Seorang anggota yang keanggotaannya diakhiri oleh Manajemen akan
              kehilangan semua hak istimewa keanggotaan dengan segera dan iuran
              keangotaan dan biaya admin tidak dapat dikembalikan ke anggota.
              Setelah pengakhiran keanggotaannya, anggota harus segera
              mengembalikan bukti lain atau properti keanggotaan yang diberikan
              klub kepada anggota tersebut dan harus melunasi semua hutangnya.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            KESEHATAN & KEAMANAN
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Anggota harus memperhatikan anggota lain dan membersihkan
              peralatan dengan peralatan yang disediakan dan tidak mendominasi
              peralatan tertentu.
            </li>
            <li>
              Staf megafit berwenang untuk menghentikan siapa pun dari
              berolahraga jika dianggap berolahraga dengan cara yang dapat
              mengakibatkan cedera terhadap diri sendiri atau / dan cedera pada
              orang lain. Pengguna harus mematuhi instruksi dari staf megafit.
            </li>
            <li>Dilarang merokok di area Megafit.</li>
            <li>
              Anggota atau tamu tidak boleh menggunakan fasilitas megafit saat
              berada di bawah pengaruh alcohol dan narkotika. Staf megafit
              memiliki hak untuk menolak akses masuk anggota.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            ATURAN BUSANA
          </p>
          <p style={{margin: '0px 0px 5px 0px'}}>
            Semua anggota dan tamu diharuskan mengenakan pakaian olahraga yang
            sesuai saat berolahraga. Atasan diperlukan untuk menutupi area dada.
            Sepatu harus dapat menutupi kaki dan bersol karet diperlukan setiap
            saat di gymnasium.
          </p>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            JAM OPERASIONAL
          </p>
          <p style={{margin: '0px 0px 5px 0px'}}>
            Jam operasional klub pada umum nya adalah sebagai berikut :
          </p>
          <p style={{margin: '0px 0px 5px 0px'}}>
            Senin – Minggu Pukul 13.00 sd 21.00
          </p>
          <p style={{margin: '0px 0px 5px 0px'}}>
            Manajemen akan berusaha untuk memberikan pemberitahuan yang wajar
            tentang setiap perubahan jam operasional.
          </p>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            FASILITAS MEGAFIT
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Manajemen tidak bertanggung jawab atas kehilangan atau kerusakan
              dari barang yang disimpan di loker dengan alasan apapun.
            </li>
            <li>
              Tanpa persetujuan tertulis sebelumnya dan / atau pemberitahuan
              dari Megafit untuk keperluan kegiatan promosi, kamera dan / atau
              alat perekam foto / video lainnya, termasuk ponsel / perangkat
              pintar dengan fitur tersebut, dilarang digunakan untuk pengambilan
              gambar atau untuk merekam di area loker. Untuk alasan keamanan dan
              untuk melindungi anggota dan karyawan kami, area tertentu di klub
              dipantau oleh kamera pengintai. Anda tidak disarankan untuk
              meninggalkan barang berharga di area megafit. Megafit tidak
              bertanggung jawab atas kehilangan barang di dalam area megafit.
            </li>
            <li>Anggota tidak diperkenankan untuk makan di area Megafit</li>
            <li>
              Fasilitas loker dapat digunakan selama member melakukan aktivitas
              di MegaFit. Jika terjadi kerusakan atau kehilangan pada loker,
              maka member akan dikenakan biaya sesuai dengan ketentuan yang
              berlaku. Kunci loker wajib dikembalikan sebelum member
              meninggalkan area MegaFit.
            </li>
            <li>
              Manajemen memiliki hak untuk sewaktu-waktu menunjukkan calon
              anggota atau orang lain di area Megafit dan mengizinkan mereka
              menggunakan fasilitas Megafit sebagai percobaan.
            </li>
            <li>
              Loker / Kunci / Peralatan - Biaya nominal dikenakan untuk Loker /
              Kunci / Peralatan yang hilang / rusak.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>LAINNYA</p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Anak-anak di bawah usia 14 tahun tidak diperbolehkan masuk ke
              Megafit tanpa izin Manajemen.
            </li>
            <li>
              Dilarang mempromosikan atau menjual sesi pelatihan pribadi atau
              barang dan layanan lainnya oleh anggota kepada anggota lain di
              area Megafit dan akan mengakibatkan pemutusan keanggotaan anggota
              yang bersangkutan.
            </li>
            <li>
              Properti yang hilang akan ditahan untuk jangka waktu 7 hari
              setelah manajemen klub berhak untuk membuang barang-barang
              tersebut dengan cara apapun yang dilihatnya. Tidak ada klaim yang
              akan dilayani setelah periode ini.
            </li>
            <li>
              Manajemen berhak menggunakan foto individu atau grup dari Anggota
              dan / atau Tamu untuk keperluan pers sebagai media promosi.
            </li>
            <li>
              Mantan karyawan Megafit yang telah keluar dari Perusahaan tidak
              dapat menjadi anggota. Pengecualian dapat diizinkan atas kebijakan
              manajemen Perusahaan
            </li>
            <li>
              Semua anggota diharuskan untuk mematuhi peraturan, yang dapat
              berubah dari waktu ke waktu atas kebijaksanaan Manajemen. Anggota
              akan diberitahu tentang perubahan peraturan melalui situs megafit.
            </li>
            <li>
              Aturan ini akan diatur dan ditegakan sesuai dengan hukum Indonesia
              dan tunduk pada yurisdiksi Indonesia.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            BATASAN TANGGUNG JAWAB
          </p>
          <p style={{margin: '0px 0px 5px 0px'}}>
            Setiap anggota setuju bahwa:
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Baik Megafit, perusahaan terkait, karyawan, atau agennya tidak
              bertanggung jawab atas klaim, tuntutan, cedera, kerusakan, atau
              tindakan atas kelalaian yang timbul yang dapat menyebabkan
              kematian atau cedera, kehilangan, kerusakan, atau pencurian
              terhadap orang atau properti anggota yang timbul, keluar dari,
              atau sehubungan dengan penggunaan salah satu layanan, fasilitas,
              atau tempat di Megafit oleh Anggota. Anggota dengan ini
              membebaskan Megafit, perusahaan terkait, karyawan, dan agennya
              dari semua klaim yang mungkin diajukan terhadap mereka oleh atau
              atas nama Anggota untuk cedera atau klaim yang disebutkan di atas.
            </li>
            <li>
              Setiap tamu dari anggota atau pengunjung sementara Megafit setuju
              untuk mematuhi peraturan Klub dan batasan tanggung jawab yang sama
              sebagai anggota.
            </li>
          </ul>

          <p
            style={{
              margin: '40px 0px 30px 0px',
              fontSize: isMobile ? '4.25vw' : 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            SYARAT DAN KETENTUAN PELATIH PRIBADI (PERSONAL TRAINER)
          </p>
          <p style={{margin: '0px 0px 5px 0px'}}>
            Sesi pelatih pribadi offline dan online(COFIT) merupakan layanan
            program fitness yang disediakan oleh Megafit. Megafit menunjuk
            personal trainer dalam membantu anggota untuk menjalankan program
            yang disediakan oleh Megafit.
          </p>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            PEMBELIAN SESI
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Keanggotaan harus aktif untuk membeli paket pelatihan pribadi
              offline. Pelatihan Pribadi online (COFIT) dapat dibeli tanpa
              keanggotaan yang aktif.
            </li>
            <li>
              Pembelian sesi dapat dilakukan secara online atau secara langsung
              melalui Customer Services Megafit.
            </li>
            <li>
              Saat Anda membeli sesi Anda, Anda dapat memilih pelatih pribadi.
              Anda akan dihubungi dalam waktu 24 jam setelah pembelian dan
              Megafit akan memberi tahu jika Megafit dapat memenuhi permintaan
              atau, sebagai alternatif, untuk mendiskusikan tujuan pribadi Anda
              dan untuk mengalokasikan Pelatih Pribadi lainnya.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            PEMBAYARAN
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Semua pembayaran harus dilakukan secara penuh, baik secara
              langsung di meja depan megafit maupun secara online.
            </li>
            <li>
              Semua pembayaran harus dilakukan secara penuh sebelum sesi apa pun
              berjalan.
            </li>
            <li>
              Semua biaya tidak dapat dikembalikan / dikurangi / diuangkan /
              dikuasakan / dirubah kedalam bentuk apapun.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            PEMBATALAN SESI
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Jika Pelatih Pribadi Anda gagal memberi Anda pemberitahuan 1 jam
              sebelumnya tentang pembatalan apa pun, Anda berhak atas 1 jam
              tambahan Pelatih Pribadi, selain sesi yang Anda lewatkan.
            </li>
            <li>
              Pembatalan sesi dapat dilakukan paling lambat 1 jam sebelum sesi
              PT dimulai. Ini dapat dilakukan langsung melalui akun Anda. Jika
              Anda tidak membatalkan maximal 1 jam sebelumnya, Maka anda dapat
              kehilangan sesi tersebut dan tidak ada pengembalian dana yang akan
              diberikan kepada Anda.
            </li>
            <li>
              Semua sesi tercatat dan hanya bisa diatur melalui aplikasi,
              apabila Anda mengatur sesi antara pelatih pribadi diluar aplikasi
              maka tidak terhitung.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            TELAT SESI
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Semua pembelian paket Personal Training memiliki kadaluwarsa,
              setelah itu sesi yang tidak digunakan akan hilang dan tidak ada
              pengembalian uang. Ini dilakukan agar semua sesi digunakan untuk
              mencapai tujuan.
            </li>
            <li>
              Anda dapat memperpanjang paket Pelatihan Pribadi antara satu bulan
              dan 12 bulan hanya untuk alasan berikut: Kehamilan, Sakit Parah,
              Cedera Serius
            </li>
            <li>
              Untuk memperpanjang paket Pelatihan Pribadi, Anda harus
              menghubungi megafit; kami mungkin meminta Anda untuk memberikan
              bukti kehamilan, penyakit serius dan cedera serius.
            </li>
            <li>Perpanjangan lainnya diataskan kebijaksanaan Megafit.</li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            PELATIH PRIBADI
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Jika karena alasan apa pun Anda tidak merasa nyaman dengan Pelatih
              Pribadi Anda, Anda dapat pindah ke pelatih pribadi lain kapan saja
              (tergantung ketersediaan).
            </li>
            <li>
              Dalam situasi apapun, semua sesi yang digunakan dengan Pelatih
              Pribadi sebelumnya dianggap telah berlajan dan digunakan.
            </li>
            <li>
              Pelatih Pribadi Anda tidak dapat meresepkan perawatan atau
              melakukan diagnosa kondisi medis. Pelatih Pribadi dapat setiap
              saat meminta Anda untuk berkonsultasi dengan dokter jika ada
              kondisi medis yang muncul.
            </li>
            <li>
              Jika pelatih pribadi meninggalkan Megafit, Megafit akan memberikan
              pelatih lain.
            </li>
            <li>
              Megafit berhak untuk mengubah pelatihan pribadi Anda tanpa
              pemberitahuan lebih lanjut.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>MEDIS</p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              MEGAFIT bukan praktisi medis. MEGAFIT sangat menyarankan bagi
              Pengguna yang memiliki kebutuhan khusus untuk melakukan konsultasi
              dengan praktisi medis sebelum memulai olahraga jenis apapun.
            </li>
            <li>
              MEGAFIT tidak memiliki keahlian dalam mendiagnosa, memeriksa, atau
              mengobati kondisi medis dalam bentuk apa pun, atau menentukan efek
              dari setiap olahraga atau diet pada kondisi medis.
            </li>
            <li>
              Pengguna mengakui bahwa ketika berpartisipasi dalam program
              latihan apa pun, ada kemungkinan cedera fisik.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            BATASAN TANGGUNG JAWAB
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Sejauh yang diizinkan oleh hukum, MEGAFIT tidak bertanggung jawab
              atas hal berikut: kerugian Bisnis, seperti hilangnya keuntungan,
              pendapatan, tabungan atau peluang komersial. kehilangan atau
              rusaknya data, database atau perangkat lunak. kerugian atau
              kerusakan yang bersifat khusus, tidak langsung, atau
              konsekuensial.
            </li>
            <li>
              MEGAFIT tidak memiliki kualifikasi untuk memberikan saran medis.
            </li>
            <li>
              Setiap program latihan, bahkan pada individu yang sehat, memiliki
              risiko, Pengguna bertanggung jawab menilai kemampuan pribadi untuk
              jenis latihan tertentu sebelum mengikuti layanan yang disediakan
              oleh MEGAFIT.
            </li>
            <li>
              Program pribadi yang disediakan oleh MEGAFIT, tidak boleh dianggap
              sebagai program pemulihan kesehatan atau rehabilitasi. Dengan
              demikian setiap tindakan Pengguna dalam kaitannya dengan program
              pribadi harus mempertimbangkan informasi, pendapat atau penilaian
              pihak yang mempunyai kompetensi dalam bidangnya.
            </li>
            <li>
              Setiap program pribadi akan dipersiapkan berdasarkan informasi
              yang diberikan Pengguna. Pengguna bertanggung jawab atas
              keakuratan informasi yang diberikan Pengguna kepada MEGAFIT.
              Pengguna bertanggung jawab untuk memberitahukan MEGAFIT tentang
              masalah kesehatan atau kondisi medis ketika meminta MEGAFIT untuk
              menyiapkan program pribadi.
            </li>
            <li>
              Informasi yang terdapat dalam program pribadi dapat berhubungan
              dengan konteks tertentu dan mungkin tidak cocok dengan konteks
              lain. Adalah tanggung jawab Pengguna untuk memastikan bahwa
              Pengguna tidak menggunakan informasi yang disediakan MEGAFIT dalam
              konteks yang salah.
            </li>
            <li>
              Setiap informasi yang disediakan MEGAFIT yang tidak merupakan
              bagian dari program pribadi, apakah diperoleh melalui website
              MEGAFIT, video, media sosial (seperti Facebook atau Instagram)
              disediakan untuk tujuan informasi umum saja.
            </li>
          </ul>

          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            HASIL YANG DIHARAPKAN
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Meskipun MEGAFIT percaya bahwa bagi kebanyakan orang, mengikuti
              program dan metode MEGAFIT akan mengarah pada hasil yang
              diinginkan, semua program latihan tergantung pada individu. Hasil
              akan terpengaruh oleh upaya dan komitmen individu, namun dalam
              beberapa keadaan bahkan di mana seorang individu mengikuti program
              MEGAFIT, mereka mungkin tidak mencapai hasil yang diinginkan.
              Karena itu MEGAFIT tidak memberikan jaminan apapun, baik tersurat
              maupun tersirat, untuk:
            </li>
            <ol style={{paddingLeft: 20, marginTop: 5}}>
              <li>
                efektivitas setiap teknik, diet atau program yang MEGAFIT
                sampaikan; atau
              </li>
              <li>
                hasil yang mungkin Pengguna capai sebagai hasil dari mengikuti
                program MEGAFIT.
              </li>
            </ol>
          </ul>
        </div>
      </Fade>
    </Modal>
  );
}
