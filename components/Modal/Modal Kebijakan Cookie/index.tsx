/* eslint-disable react/no-unescaped-entities */
import React, {ReactElement} from 'react';
import {Modal, Backdrop, Fade} from '@material-ui/core';
import {isMobile} from 'react-device-detect';

interface Props {
  open: boolean;
  close: () => void;
}
export default function KebijakanCookie({open, close}: Props): ReactElement {
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
            padding: 25,
            borderRadius: isMobile ? 20 : 0,
            fontSize: isMobile ? '3.25vw' : 'auto',
            outline: 'none',
          }}>
          <p
            style={{
              margin: '0px 0px 30px 0px',
              fontSize: isMobile ? '4.25vw' : 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            KEBIJAKAN PRIVASI DATA
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            <b>PENTING:</b> Sebagai pengguna Platform (sebagaimana didefinisikan
            di bawah), Anda diwajibkan untuk membaca Syarat dan Ketentuan
            Penggunaan ini (“Ketentuan Penggunaan”) dan Kebijakan Privasi yang
            terlampir dengan hati-hati dan seksama sebelum mengunduh mau pun
            menggunakan setiap fitur dan/atau layanan yang tersedia dalam
            Platform. Dengan mengunduh dan/atau memasang dan/atau menggunakan
            Platform dan/atau menikmati Layanan Kami, Anda setuju bahwa Anda
            telah membaca, memahami, mengetahui, menerima, dan menyetujui
            seluruh informasi, syarat-syarat, dan ketentuan-ketentuan penggunaan
            Platform yang terdapat dalam Ketentuan Penggunaan ini. Ketentuan
            Penggunaan ini merupakan suatu perjanjian sah terkait tata cara dan
            persyaratan penggunaan Platform antara Anda dengan pengelola
            Platform dengan nama domain www.megafit.co.id (“Kami”). Mohon
            diperhatikan bahwa Ketentuan Penggunaan dan Kebijakan Privasi dapat
            diperbarui dari waktu ke waktu. Silakan menghapus Aplikasi dalam
            perangkat elektronik Anda dan/atau mengajukan permintaan penghapusan
            akun dan/atau tidak mengakses Platform dan/atau tidak menggunakan
            Layanan Kami apabila Anda tidak setuju terhadap Ketentuan Penggunaan
            ini (sebagaimana diperbarui dari waktu ke waktu). Kami berhak untuk
            sewaktu-waktu mengubah, menghapus, dan/atau menerapkan syarat dan
            ketentuan baru dalam Ketentuan Penggunaan ini. Pemakaian Anda yang
            berkelanjutan terhadap Platform akan dianggap sebagai persetujuan
            untuk tunduk kepada perubahan atas syarat dan ketentuan dari
            Ketentuan Penggunaan ini.
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            1. KOMITMEN KAMI TERHADAP PRIVASI ANDA
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            <b>Megafit</b> berkomitmen untuk melindungi privasi
            pelanggan-pelanggannya di Indonesia. Kebijakan privasi Megafit ("
            <b>Kebijakan Privasi</b>") berlaku untuk semua informasi pribadi
            yang dikumpulkan oleh kami atau dikirimkan kepada kami, baik offline
            atau online, termasuk informasi pribadi yang dikumpulkan atau
            dikirimkan melalui situs kami ("<b>Situs Web</b>") dan setiap situs
            mobile, aplikasi, widget, dan fitur interaktif mobile lainnya
            (secara kolektif, "<b>Aplikasi</b>" kami), melalui halaman jejaring
            sosial resmi kami yang kami kendalikan ("
            <b>Halaman Jejaring Sosial</b>" kami) serta melalui pesan email
            dengan format HTML yang kami kirimkan kepada Anda (secara kolektif,
            termasuk Halaman Jejaring Sosial, Aplikasi dan Situs Web, "
            <b>Situs</b>"). Apabila Anda tidak setuju dengan setiap ketentuan
            dalam Kebijakan Privasi ini, harap agar tidak menggunakan situs web
            kami atau mengirimkan informasi pribadi kepada kami.
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            2. INFORMASI PRIBADI
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Kami dan penyedia layanan kami dapat mengumpulkan Informasi Pribadi
            dengan cara-cara yang beragam, termasuk:
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              <b>Melalui Situs:</b> Kami dapat mengumpulkan Informasi Pribadi
              melalui Situs, misalnya, saat Anda mendaftar untuk suatu bulletin
              (newsletter) atau melakukan pembelian.
            </li>
            <li>
              <b>Offline:</b> Kami dapat mengumpulkan Informasi Pribadi dari
              Anda secara offline, seperti pada saat Anda menghubungi layanan
              pelanggan.
            </li>
            <li>
              <b>Dari Sumber Lainnya:</b> Kami dapat menerima Informasi Pribadi
              dari sumber lainnya, seperti melalui database publik; mitra
              pemasaran bersama; platform jejaring sosial dari orang-orang
              dengan siapa Anda berteman atau dengan cara lain terhubung pada
              platform jejaring sosial, serta dari pihak ketiga lainnya. Sebagai
              contoh, jika Anda memilih untuk menghubungkan akun jejaring sosial
              Anda ke akun situs web Anda, Informasi Pribadi tertentu dari akun
              jejaring sosial Anda akan terbagi dengan kami, yang dapat mencakup
              Informasi Pribadi yang merupakan bagian dari profil Anda atau
              profil teman Anda.
            </li>
            <li>
              <b>Melalui browser atau perangkat:</b> Informasi tertentu
              dikumpulkan oleh sebagian besar browser atau secara otomatis oleh
              perangkat Anda. Kami menggunakan informasi ini untuk tujuan
              statistikal dan juga untuk memastikan Situs kami berfungsi dengan
              baik.
            </li>
            <li>
              <b>Melalui server berkas log:</b> "Alamat IP" Anda adalah nomor
              yang secara otomatis diberikan pada komputer atau perangkat Anda
              yang Anda gunakan dengan Penyedia Layanan Internet (ISP) Anda.
              Alamat IP diidentifikasikan dan secara otomatis dimasukan dalam
              server berkas log kami setiap saat pengguna mengunjungi Situs,
              bersama dengan waktu kunjungan dan halaman-halaman yang
              dikunjungi. Mohon dicatat bahwa kami memperlakukan Alamat IP, log
              file server dan informasi terkait sebagai Informasi Lainnya,
              kecuali yang mengharuskan kami untuk melakukan sebaliknya
              berdasarkan hukum yang berlaku.
            </li>
            <li>
              <b>Menggunakan cookies:</b> Cookies memungkinkan server jaringan
              untuk mengalihkan data ke komputer atau perangkat untuk pencatatan
              dan tujuan lainnya. Apabila Anda tidak menginginkan informasi
              dikumpulkan melalui penggunaan cookies, terdapat prosedur singkat
              pada sebagian besar browser yang memungkinkan Anda untuk menolak
              penggunaan cookies. Untuk mempelajari lebih lanjut mengenai
              penggunaan cookies kami, Anda dapat melihat kebijakan cookies
              kami.
            </li>
            <li>
              <b>Melalui penggunaan Aplikasi oleh Anda.</b> Saat Anda mengunduh
              dan menggunakan suatu Aplikasi, kami dan penyedia layanan dapat
              melacak dan mengumpulkan penggunaan data Aplikasi, seperti tanggal
              dan waktu ketika Aplikasi dalam perangkat Anda mengakses server
              kami dan informasi dan file apa yang telah diunduhkan ke Aplikasi
              berdasarkan nomor perangkat Anda.
            </li>
            <li>
              <b>Dari Anda:</b> Informasi seperti tanggal lahir, gender dan kode
              pos, dan juga informasi lainnya, seperti sarana pilihan komunikasi
              Anda, dapat dikumpulkan pada saat Anda secara sukarela memberikan
              informasi ini.
            </li>
            <li>
              <b>Lokasi Fisik:</b> Kami dapat mengumpulkan lokasi fisik atas
              perangkat Anda.
            </li>
          </ul>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Dalam beberapa kasus, kami dapat menggunakan layanan pembayaran
            pihak ketiga untuk melakukan pembelian dan/atau mengumpulkan donasi
            melalui Situs. Dalam kasus-kasus tersebut, Informasi Pribadi Anda
            dapat dikumpulkan oleh pihak ketiga tersebut dan bukan oleh kami,
            dan hal tersebut merupakan subjek atas kebijakan privasi pihak
            ketiga, bukan daripada Kebijakan Privasi ini. Kita tidak memiliki
            kendali, dan tidak bertanggung jawab atas penggunaan atau
            pengungkapan oleh pihak ketiga atas Informasi Pribadi Anda.
            <br />
            <br />
            Kami dapat menggunakan Informasi Pribadi:
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Untuk merespon pertanyaan-pertanyaan Anda dan memenuhi permintaan
              Anda, seperti untuk mengirimkan buletin atau untuk menjawab
              pertanyaan dan komentar Anda.
            </li>
            <li>
              Untuk mengirimkan informasi administratif kepada Anda, sebagai
              contoh, informasi mengenai Situs dan perubahan
              ketentuan-ketentuan, syarat-syarat dan kebijakan-kebijakan kami.
              Karena informasi ini bisa saja penting untuk penggunaan Anda atas
              Situs, Anda tidak dapat memilih untuk tidak menerima
              komunikasi-komunikasi tersebut.
            </li>
            <li>
              Untuk melengkapi dan memenuhi pembelian Anda dan/atau donasi Anda,
              sebagai contoh, untuk memproses pembayaran Anda, mengirimkan
              pesanan kepada Anda, berkomunikasi dengan Anda mengenai pembelian
              Anda dan menyediakan layanan pelanggan kepada Anda.
            </li>
            <li>
              Untuk memberikan Anda pembaharuan dan pengumuman-pengumuman
              mengenai produk-produk, promosi dan pengumuman kami dan untuk
              mengirimkan Anda undangan untuk berpartisipasi dalam program
              spesial kami.
            </li>
            <li>
              Untuk memungkinkan Anda untuk menghubungi dan dihubungi oleh
              pengguna lainnya melalui Situs, sebagaimana diijinkan oleh Situs
              yang berlaku.
            </li>
            <li>
              Untuk mengijinkan Anda untuk berpartisipasi dalam papan pesan,
              obrolan, halaman profil dan blog dan layanan lainnya yang mana
              Anda dapat memasukan informasi dan materi (termasuk Halaman
              Jejaring Sosial kami).
            </li>
            <li>
              Untuk tujuan usaha kami, seperti analisis dan pengelolaan usaha
              kami, penelitian pasar, audit, pengembangan produk baru,
              peningkatan Situs kami, peningkatan produk dan layanan kami,
              mengidentifikasikan tren penggunaan, menentukan efektifitas
              kampanye promosi kami, menyesuaikan pengalaman dan konten Situs
              berdasarkan kegiatan Anda sebelumnya pada Situs, dan mengukur
              kepuasan pelanggan dan menyediakan layanan pelanggan (termasuk
              pemecahan masalah sehubungan dengan masalah-masalah pelanggan).
            </li>
            <li>
              Kami menggunakan informasi yang dikumpulkan melalui browser atau
              perangkat Anda untuk tujuan statistikal dan juga untuk memastikan
              bahwa Situs berfungsi dengan benar.
            </li>
            <li>
              Untuk informasi detail tentang tujuan-tujuan yang mana kami
              menggunakan cookies, Anda dapat melihat kebijakan cookies kami.
            </li>
            <li>
              Kami dapat menggunakan lokasi fisik perangkat Anda untuk
              memberikan Anda jasa dan konten yang telah di personalisasi
              berdasarkan lokasi. Kami dapat juga membagikan lokasi fisik
              perangkat Anda, dikombinasikan dengan informasi mengenai
              iklan-iklan apa saja yang telah Anda lihat dan informasi lainnya
              yang kami kumpulkan, dengan mitra pemasaran kami untuk dapat
              memungkinkan mereka untuk memberikan Anda dengan content yang
              lebih dipersonalisasi dan untuk mempelajari keefektifan kampanye
              periklanan.
            </li>
            <li>
              Sebagaimana yang kami anggap perlu atau pantas: (a) berdasarkan
              hukum yang berlaku, termasuk hukum-hukum di luar negara tempat
              tinggal; (b) untuk patuh dengan proses hukum; (c) untuk merespon
              permintaan dari otoritas publik dan pemerintah termasuk otoritas
              publik dan pemerintah di luar negara tempat tinggal; (d) untuk
              melaksanakan syarat dan ketentuan kami; (e) untuk melindungi
              kegiatan operasional kami atau salah satu afiliasi kami; (f) untuk
              melindungi hak-hak, privasi, keselamatan atau properti, dan/atau
              dari afiliasi kami, Anda atau lainnya; dan (g) untuk memungkinkan
              kami untuk mengejar upaya hukum yang tersedia atau membatasi
              kerusakan yang dapat kami pertahankan.
            </li>
            <li>
              Data pribadi Anda akan diproses oleh Megafit di dalam dan di luar
              Indonesia, terutama untuk tujuan penyelesaian pemesanan Anda,
              memberikan Anda produk dan layanan yang Anda pesan (termasuk
              asuransi perjalanan), dan untuk layanan pelanggan dan kegiatan
              pemasaran. Karena server kami berada di Amerika Serikat, tim
              penjualan kami berlokasi di kantor lokal secara global, kantor
              pusat kami berada di Swiss, dan sekolah-sekolah dimana para murid
              memilih untuk mengambil kelas-kelas tersebut berada di
              kantor-kantor lokal secara global, kami dapat berbagi data pribadi
              Anda dengan afiliasi perusahaan, pihak penanganan klaim dan mitra
              usaha kami baik di dalam maupun di luar Indonesia. Mitra usaha
              yang kami bagikan informasi tersebut adalah hanya mereka yang
              memerlukan akses ke Informasi Pribadi tersebut untuk memproses
              pesanan yang Anda lakukan di Situs, seperti bantuan transportasi,
              akomodasi, atau sekolah, dan mereka hanya akan menerima informasi
              yang diperlukan untuk tujuan tersebut. Tidak ada mitra usaha yang
              akan menerima Informasi Pribadi Anda untuk tujuan pemasaran mereka
              sendiri. Megafit memproses data pribadi Anda sesuai dengan hukum
              perlindungan privasi dan data yang berlaku. Dengan menggunakan
              Situs kami, Anda mengakui dan menyetujui atas adanya potensi
              pengalihan tersebut. Anda harus menyadari bahwa banyak negara di
              luar Indonesia tidak memiliki perlindungan hukum atas informasi
              pribadi sebagaimana diterapkan di Indonesia. Pengalihan akan
              dilakukan sesuai dengan hukum yang berlaku dan kami akan mengambil
              tindakan-tindakan yang diperlukan untuk memastikan bahwa pihak
              ketiga yang terlibat akan menyediakan level perlindungan yang
              memadai. Setiap organisasi hosting/pengolahan yang kami gunakan di
              kemudian hari sehubungan dengan Situs akan diwajibkan untuk
              melakukan hal yang sama.
            </li>
          </ul>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            3. KEAMANAN
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Kami senantiasa melakukan upaya yang wajar untuk menjaga Platform
            ini berfungsi dan berjalan lancar. Bagaimana pun juga, kami tidak
            bertanggung jawab dan tidak akan bertanggung jawab atas
            ketidaktersediaan Platform dan/atau fitur Layanan yang disebabkan
            oleh berbagai alasan, termasuk namun tidak terbatas pada keperluan
            pemeliharaan atau masalah teknis. Namun demikian, Anda mengetahui
            dan setuju bahwa transmisi atau akses internet tidak selamanya
            menciptakan suatu transaksi pembayaran yang aman dan pribadi, dan
            karenanya setiap pesan atau informasi yang Anda kirimkan atau
            gunakan dalam Platform mungkin dapat dibajak atau diambil oleh pihak
            ketiga yang tidak bertanggung jawab.
            <br />
            <br />
            Mohon agar segara memberitahukan kepada kami jika anda terdapat
            permasalahan dengan keamanan ini, dengan menghubungi kami sesuai
            dengan formulir bagian "Hubungi Kami".
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            4. AKSES, MODIFIKASI DAN PILIHAN
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Kami memberikan Anda banyak pilihan mengenai penggunaan dan
            pengungkapan oleh kami atas Informasi Pribadi Anda untuk tujuan
            pemasaran.
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Apabila suatu saat Anda ingin berhenti untuk menerima komunikasi
              pemasaran dari kami, cara termudah yang dapat Anda lakukan adalah
              dengan menggunakan fitur unsubscribe dalam komunikasi pemasaran
              yang Anda terima. Anda juga dapat memberitahukan kami dengan
              mengirimkan email, telepon atau menuliskan kepada kami dengan
              menggunakan informasi kontak yang tercantum di bawah ini pada
              bagian "Hubungi Kami". Dalam permintaan Anda, mohon untuk
              menunjukan bahwa Anda ingin berhenti menerima komunikasi pemasaran
              dari kami.
            </li>
            <li>
              Selain itu, kami tidak akan mengungkapkan Informasi Pribadi Anda
              kepada pihak ketiga, termasuk anak perusahaan kami, untuk tujuan
              pemasaran langsung oleh pihak ketiga apabila kami telah menerima
              dan memproses permintaan dari Anda bahwa Informasi Pribadi Anda
              tidak akan dibagikan kepada pihak ketiga untuk tujuan tersebut.
              Jika Anda ingin mengirimkan permintaan tersebut, silahkan
              memberitahukan kami dengan menggunakan formulir "Hubungi Kami".
              Mohon untuk secara jelas mengindikasikan permintaan Anda bahwa
              Anda tidak ingin agar Informasi Pribadi Anda diungkapkan kepada
              anak perusahaan kami dan/atau pihak ketiga lainnya untuk tujuan
              pemasaran langsung.
            </li>
            <li>
              Perlu diketahui bahwa perubahan mungkin tidak akan efektif dengan
              segera. Kami akan berusaha untuk memenuhi permintaan Anda dengan
              segera sebagaimana dapat dilakukan secara wajar dan tidak lebih
              dari 30 hari setelah kami mendapatkan permintaan Anda. Perlu
              diketahui juga bahwa apabila Anda memilih untuk tidak menerima
              pesan terkait pemasaran dari kami, kami dapat tetap mengirimkan
              pesan administratif yang bersifat penting kepada Anda, dan Anda
              tidak dapat untuk tidak memilih untuk menerima pesan administratif
              tersebut.
            </li>
            <li>
              Untuk meninjau, mengkoreksi, membaharui, merahasiakan, menghapus
              atau membatasi penggunaan Informasi Pribadi Anda oleh kami yang
              sebelumnya telah diberikan kepada kami, silahkan gunakan formulir
              "Hubungi Kami" dan mohon dengan jelas untuk menerangkan permintaan
              Anda. Dalam permintaan Anda, mohon untuk dijelaskan informasi apa
              yang ingin Anda ubah, dirahasiakan dari database kami atau
              dibiarkan untuk diketahui oleh kami dengan batasan apa yang ingin
              Anda berikan atas penggunaan Informasi Pribadi Anda.
            </li>
            <li>
              Kami akan berusaha untuk memenuhi permintaan Anda sesegera
              mungkin. Mohon untuk diperhatikan bahwa meskipun kami telah
              berupaya, bisa saja ada sisa informasi dan catatan lainnya yang
              akan tetap berada dalam database kami, yang tidak akan dihapus
              ataupun diubah. Selanjutnya, perlu diketahui bahwa kami mungkin
              perlu untuk mempertahankan informasi tertentu untuk tujuan
              pencatatan dan/atau untuk penyelesaian transaksi yang telah Anda
              mulai sebelum permintaan atas perubahan atau penghapusan
              (misalnya, ketika Anda melakukan pembelian atau mengikuti suatu
              promosi, Anda bisa saja tidak dapat mengubah atau menghapus
              Informasi Pribadi yang diberikan sampai setelah selesainya
              pembelian atau promosi tersebut).
            </li>
          </ul>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            5. SITUS PIHAK KETIGA
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Kami tidak bertanggung jawab atas, privasi, informasi atau
            praktek-praktek lainnya dari pihak ketiga, termasuk pihak ketiga
            yang beroperasi pada situs apapun yang mana pada Situs Megafit
            terdapat link atas situs tersebut. Dimasukannya link tersebut pada
            Situs Megafit tidak berarti menunjukan dukungan atas situs terkait
            oleh kami dan afiliasi kami.
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Kami tidak bertanggung jawab atas, penggunaan pihak ketiga manapun
            atas informasi yang Anda berikan melalui penggunaan fungsi ini.
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Kami juga tidak bertanggung jawab atas pengumpulan, penggunaan dan
            pengungkapan kebijakan dan praktek (termasuk praktek keamanan data)
            dari organisasi lain, seperti Facebook, Apple, Google, Microsoft,
            RIM atau pengembang aplikasi, penyedia platform jejaring sosial,
            penyedia sistem operasi, penyedia layanan nirkabel atau pabrikan
            perangkat lainnya, termasuk Informasi Pribadi yang Anda ungkapkan
            kepada organisasi lainnya melalui atau sehubungan dengan Aplikasi
            atau Halaman Jejaring Sosial kami.
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            6. PERIODE RETENSI
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Kami akan mempertahankan Informasi Pribadi Anda untuk periode yang
            diperlukan untuk memenuhi tujuan yang diatur dalam Kebijakan Privasi
            ini dan sesuai dengan peraturan perundang-undangan yang berlaku.
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            7. PENGGUNAAN SITUS OLEH ANAK DI BAWAH UMUR
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Kami menawarkan program untuk anak-anak di bawah umur dengan
            pembelian yang dilakukan oleh orang dewasa. Untuk perlindungan
            privasi anak di bawah umur, kami membutuhkan ijin orang tua dari
            pengguna yang ingin melakukan pemesanan atau memesan brosur untuk
            salah satu program ini dan untuk mereka yang belum mencapai usia
            mayoritas di Negara Republik Indonesia.
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            8. INFORMASI SENSITIF
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Kami secara umum meminta Anda untuk tidak mengirimkan kepada kami,
            dan agar Anda tidak mengungkapkan, Informasi Pribadi yang sensitif
            (seperti, informasi yang terkait dengan asal-usul ras atau etnis,
            pandangan politik, agama atau kepercayaan lainnya, kesehatan atau
            kondisi medis, latar belakang kriminal atau keanggotaan serikat
            buruh) pada atau melalui Situs atau kepada kami. Dalam pengecualian
            tertentu, seperti permintaan asuransi, kami akan menjelaskan kepada
            Anda bagaimana Anda dapat melakukan hal ini secara aman.
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            9. PEMBARUAN ATAS KEBIJAKAN PRIVASI INI
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Kami dapat mengubah Kebijakan Privasi ini. Mohon untuk dilihat
            tulisan "Update Terakhir" pada bagian atas halaman ini untuk melihat
            kapan terakhir Kebijakan Privasi ini terakhir direvisi. Setiap
            perubahan atas Kebijakan Privasi ini akan menjadi efektif saat kami
            memasukan revisi Kebijakan Privasi ini pada Situs.
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            10. TIDAK ADA JAMINAN.{' '}
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Platform ini disediakan “sebagaimana adanya” dalam arti Anda
            mengakui dan menyetujui bahwa seluruh risiko yang ditimbulkan dari
            penggunaan Platform oleh Anda tetap sepenuhnya ada pada Anda dan
            Anda tidak memiliki hak untuk meminta ganti rugi apapun dari Kami.
            Kami TIDAK memberikan pernyataan ataupun jaminan terkait dengan:
          </p>
          <ul style={{paddingLeft: 20, marginTop: 5}}>
            <li>
              Bahwa Platform ini akan bebas dari kesalahan dan/atau kecacatan
              maupun saat beroperasi dengan kombinasi dengan perangkat keras,
              perangkat lunak, sistem atau data lainnya serta bahwa kesalahan
              dan/atau kecacatan dalam Platform akan diperbaiki
            </li>
            <li>
              Ketersediaan dan kehandalan Platform maupun server-server
              pendukung yang menyediakan Platform, termasuk terbebas dari virus
              dan komponen berbahaya lain
            </li>
            <li>
              Keamanan, ketepatan waktu, kualitas, kesesuaian, ketersediaan,
              akurasi dan kelengkapan dari Platform
            </li>
            <li>
              Bahwa Platform akan sesuai dengan harapan dan kebutuhan Anda
            </li>
            <li>
              Bahwa kualitas produk, fitur dan informasi yang tersedia akan
              memenuhi harapan dan kebutuhan Anda.
            </li>
          </ul>
          <h1
            style={{
              margin: '0px 0px 5px 0px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Kebijakan Cookie{' '}
          </h1>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            1. APA ITU COOKIE?{' '}
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Cookie adalah file teks kecil atau potongan-potongan informasi yang
            tersimpan dalam komputer atau perangkat mobile Anda (seperti
            smartphone ataupun tablet) saat Anda berkunjung ke Situs kami.
            Cookie biasanya akan berisikan nama situs web darimana cookie
            tersebut berasal, "masa hidup" cookie (yaitu berapa lama cookie
            tersebut akan berada dalam perangkat Anda), dan nilai, yang biasanya
            adalah nomor unik yang dihasilkan secara acak.
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            2. UNTUK APA KAMI MENGGUNAKAN COOKIE?{' '}
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Kami menggunakan cookie untuk membuat Situs kami lebih mudah untuk
            digunakan dan untuk lebih menyesuaikan Situs dan produk kami untuk
            kepentingan dan kebutuhan Anda. Cookie dapat melakukan hal ini
            karena situs web dapat membaca dan menulis file-file tersebut,
            memungkinkan mereka untuk mengenal Anda dan mengingat informasi
            penting yang akan membuat penggunaan Anda atas situs web menjadi
            lebih mudah (misalnya dengan mengingat pengaturan preferensi).
            <br />
            <br />
            Cookie dapat juga digunakan untuk membantu mempercepat kegiatan dan
            pengalaman Anda di kemudian hari pada Situs kami. Kami juga
            menggunakan cookie untuk menyusun anonim, agregat statistik yang
            memungkinkan kami untuk mengerti bagaimana pengguna menggunakan
            Situs kami dan untuk membantu kami meningkatkan struktur dan konten
            Situs kami. Kami tidak dapat mengenali Anda secara personal dari
            informasi ini.
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            3. JENIS COOKIE APA YANG KAMI GUNAKAN?{' '}
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Ada dua jenis cookie yang dapat digunakan dalam Situs kami, yang
            disebut "session cookies" dan "persistent cookies". Session cookies
            adalah cookie sementara yang tetap berada pada perangkat Anda sampai
            Anda meninggalkan Situs kami. Persistent Cookie tetap berada pada
            perangkat Anda untuk waktu yang lebih lama atau sampai Anda secara
            menual menghapusnya (seberapa lama cookie berada dalam perangkat
            Anda akan bergantung pada durasi atau "masa hidup" cookie tersebut).
            <br />
            <br />
            <b>Cookie Pihak Ketiga</b>
            <br />
            <br />
            Kami juga menggunakan beberapa pemasok yang dapat mengatur cookie
            pada perangkat Anda atas nama kami saat Anda mengunjungi Situs kami
            untuk memungkinkan mereka menyampaikan layanan-layanan yang
            disediakan oleh mereka. Jika Anda mengiginkan informasi selanjutnya
            mengenai cookie-cookie tersebut, serta informasi mengenai bagaimana
            untuk memilih tidak menerima cookie-cookie tersebut, silahkan baca
            kebijakan-kebijakan privasi mereka.
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            4. BAGAIMANA SAYA MENGATUR COOKIE?{' '}
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Walaupun sebagian besar browser internet pada awalnya diatur secara
            otomatis untuk menerima cookie, sebagian besar internet browser
            memungkinkan Anda untuk mengganti pengaturan untuk memblokir cookie
            atau memperingatkan Anda saat cookie dikirimkan ke perangkat Anda.
            <br />
            <br />
            Selain pilihan yang disediakan di atas, Anda dapat menolak, menerima
            atau menghapus cookie dari Situs setiap saat dengan mengaktifkan
            atau mengakses pengaturan pada browser Anda. Informasi tentang
            prosedur untuk mengaktifkan, menonaktifkan atau menghapus cookie
            dapat ditemukan di situs web penyedia browser internet Anda melalui
            layar bantu Anda.
            <br />
            <br />
            Perlu diketahui bahwa jika cookie dinonaktifkan atau dihapus, tidak
            semua fitur dari Situs dapat beroperasi sebagaimana mestinya.
            Sebagai contoh Anda mungkin tidak dapat mengunjungi area-area
            tertentu pada Situs kami atau Anda mungkin tidak menerima informasi
            pribadi Anda saat mengunjungi Situs.
            <br />
            <br />
            Jika Anda menggunakan perangkat yang berbeda untuk melihat dan
            mengakses Situs (misalnya komputer, smartphone, tablet dll) Anda
            akan perlu untuk memastikan bahwa setiap browser pada setiap
            perangkat disesuaikan dengan pilihan cookie Anda.
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            5. TAG PIXEL{' '}
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Beberapa laman yang Anda kunjungi di Situs juga dapat mengumpulkan
            informasi melalui penggunaan tag pixel (disebut juga clear gifs)
            yang dapat dipergunakan bersama dengan pihak ketiga yang secara
            langsung mendukung kegiatan promosi dan pengembangan situs web.
            Sebagai contoh, situs web penggunaan informasi tentang pengunjung
            Situs kami dapat dibagikan dengan agen periklanan pihak ketiga untuk
            lebih mentargetkan iklan banner iklan internet pada situs web kami.
            Informasi yang dikumpulkan melalui penggunaan tag pixel bagaimanapun
            ini tidak, dapat diidentifikasikan secara pribadi, meskipun dapat
            dihubungkan pada informasi pribadi Anda.
          </p>
          <p style={{margin: '0px 0px 5px 0px', fontWeight: 'bold'}}>
            6. HUBUNGI KAMI
          </p>
          <p style={{margin: '0px 0px 20px 0px'}}>
            Apabila Anda memiliki pertanyaan mengenai Kebijakan Cookie, mohon
            kontak kami.
            <br />
            <br />
            Perlu diketahui bahwa komunikasi melalui email tidaklah selalu aman
            <br />
            mohon agar tidak memasukan informasi kartu kredit atau informasi
            sensitif lainnya dalam email Anda kepada kami.
          </p>
        </div>
      </Fade>
    </Modal>
  );
}
