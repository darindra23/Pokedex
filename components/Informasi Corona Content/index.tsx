/* eslint-disable max-len */
import {Grid} from '@material-ui/core';
import {isMobile} from 'react-device-detect';
import React, {ReactElement} from 'react';
import styles from './style.module.css';
import Image from 'next/image';

export default function InfomrasiCoronaContent(): ReactElement {
  return (
    <Grid item sm={9} className={styles.content_wrapper}>
      <Grid id='info-corona'>
        <p
          style={{
            color: '#8fba2a',
            fontSize: isMobile ? '6vw' : 25,
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          Info terbaru
        </p>

        <p
          style={{
            fontWeight: 'bold',
            color: '#707070',
            fontSize: isMobile ? '4vw' : 'auto',
          }}
        >
          Terakhir diperbarui: 16:00, Minggu 25/10/2020
        </p>

        <p style={{color: '#707070', fontSize: isMobile ? '4vw' : 'auto'}}>
          Megafit buka secara terbatas dengan menerapkan protokol physical
          distancing agar semua tetap aman.
        </p>

        <p style={{color: '#707070', fontSize: isMobile ? '4vw' : 'auto'}}>
          Semua membership beku dapat diaktifkan kapanpun. Megafit akan buka
          secara bertahap dimana ada beberapa prosedur baru. Megarangers akan
          diberikan kesempatan untuk membaca ketentuan baru Megafit, setelah itu
          Megarangers dapat memilih opsi untuk tetap membekukan membership atau
          mengaktifkan membershipnya kembali dengan mentaati aturan baru yang
          berlaku.
        </p>

        <p style={{color: '#707070', fontSize: isMobile ? '4vw' : 'auto'}}>
          Aturan baru tersebut dibuat dalam langkah preventif & dengan
          memprioritaskan keselamatan Megarangers. Namun jangan khawatir Megafit
          tetap ingin kalian yang di rumah tetap sehat. Dengan ini Megafit
          menawarkan juga program COFIT coaching online dengan PT terbaik
          Megafit.
        </p>

        <p style={{color: '#707070', fontSize: isMobile ? '4vw' : 'auto'}}>
          Megafit selalu update di Facebook & Instagram. Jangan lupa untuk terus
          ikuti untuk dapatkan info terbaru.
        </p>

        <p style={{color: '#707070', fontSize: isMobile ? '4vw' : 'auto'}}>
          Megafit sangat menghargai kesabaran & loyalitas para Megarangers
          selama masa penutupan ini. Megafit sangat sibuk mempersiapkan semuanya
          untuk para Megarangers dan tidak sabar untuk menyambut kalian kembali.
        </p>
      </Grid>

      <Grid id='komitmen'>
        <p
          style={{
            color: '#8fba2a',
            fontSize: isMobile ? '6vw' : 25,
            fontWeight: 'bold',
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          Komitmen #MegafitAman
        </p>

        <p style={{color: '#707070', fontSize: isMobile ? '4vw' : 'auto'}}>
          Kesejahteraan Megarangers adalah prioritas utama Megafit. Sebagai
          bagian dari komitmen #MegafitAman, Megafit akan memperkenalkan
          beberapa langkah kebersihan dan sosial untuk menjaga para Megarangers
          tetap aman.
        </p>

        <Image
          src='/1a.png'
          alt='img1'
          width={1380}
          height={423.66}
          layout='intrinsic'
        />

        <Image
          src='/1b.png'
          alt='img2'
          width={1380}
          height={423.66}
          layout='intrinsic'
        />
      </Grid>

      <Grid id='bergabung'>
        <p
          style={{
            color: '#8fba2a',
            fontSize: isMobile ? '6vw' : 25,
            fontWeight: 'bold',
            marginTop: 30,
            marginBottom: 0,
          }}
        >
          Bergabung dengan Megafit
        </p>

        <Grid
          style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row'}}
        >
          <Image
            src='/informasi-corona-2.png'
            alt='img-informasi-corona-2'
            width={200}
            height={200}
          />
          <p
            style={{
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              marginLeft: !isMobile ? 20 : 0,
              marginTop: !isMobile ? 50 : '1rem',
            }}
          >
            Megafit sekarang menerima anggota baru di pusat kebugaran Megafit.
            Daftar untuk menjadi Megarangers sekarang agar siap ketika kita buka
            kembali. Cukup bayar untuk bulan pertama, tidak membayar apa pun
            sampai sebulan setelah Megafit buka kembali.
          </p>
        </Grid>
      </Grid>

      <Grid id='faq'>
        {/* Corona Virus FAQ */}
        <>
          <p
            style={{
              color: '#8fba2a',
              fontSize: isMobile ? '6vw' : 25,
              fontWeight: 'bold',
              marginTop: 30,
              marginBottom: 0,
            }}
          >
            Corona Virus FAQ
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Apakah Megafit sudah buka operasi?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Megafit tutup sementara semenjak 23 Maret 2020. Apabila sudah ada
            kepastian tanggal untuk bisa buka kembali, kami akan infokan semua
            Megarangers yang masih memiliki membership aktif melalui whatsapp.
            Megarangers juga bisa melihat situs maupun ikuti Instagram kami
            untuk info terbaru.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Ketika buka Kembali apakah semua peralatan dapat digunakan?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Ketika Megafit buka kembali, ada beberapa tindakan preventif seperti
            jarak aman antar sesama ketika berolaharga sehingga tata letak alat
            sudah disesuaikan dan ada beberapa alat yang tidak tersedia.
            Walaupun peralatan lebih sedikit namun langkah ini dilakukan untuk
            mendukung tindakan social distancing. Megafit akan melakukan terbaik
            untuk memberikan peralatan untuk digunakan sebanyak mungkin.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Apakah sudah aman untuk Gym buka kembali?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Megafit mengikuti saran dari institusi Kesehatan nasional &
            international dan juga pedoman dari pemerintah dalam rangka
            pembukaan. Langkah tambahan telah diterapkan untuk memastikan
            Megarangers & staff aman di Megafit. Ini termasuk pembatasan jumlah
            orang dalam Megafit, jumlah peralatan yang berkurang sementara untuk
            memastikan social distancing, dan menyediakan alat kebersihan yang
            dapat digunakan semua Megarangers yang ingin menggunakan fasilitas
            Megafit. Dengan mengikuti pedoman dan taat pada komitmen
            #MegafitAman, Megafit ingin memastikan bahwa Megarangers aman ketika
            berada di Megafit.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Ketika Megafit buka, seberapa rame pada waktu tertentu?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Ketika Megafit buka kembali, max occupancy akan dibatasi dengan 20
            orang. Untuk itu, kami menghimbau semua member yang ingin
            menggunakan fasilitas untuk melakukan reservasi melalui member page
            terlebih dahulu.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Langkah apa yang dilakukan untuk menjaga keamanan Megarangers?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Megafit telah memindahkan beberapa peralatan untuk memastikan social
            distancing ketika berolahraga. Megafit juga telah membatasi jumlah
            orang yang dapat berada pada Megafit, dan juga menyediakan alat
            pembersih & sanitizer untuk digunakan ketika masuk ke Megafit dan
            untuk membersihkan peralatan setelah pengunaan. Untuk menjaga
            kemanan semua, Megafit meminta Megarangers untuk menghargai aturan
            social distancing dan sering cuci tangan.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Kenapa beberapa peralatan tidak ada?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Dengan pertimbangan minimal jarak antar alat, Megafit berusaha
            memberi sebanyak mungkin peralatan tanpa mengkompromi keamanan para
            Megaranger, dengan juga memperhatikan social distancing. Langkah ini
            diwajibkan oleh pemerintah sebagai salah satu syarat untuk buka
            kembali.
          </p>
          <p
            style={{
              margin: 0,
              marginTop: 10,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Apabila Megarangers terdampak dengan perubahan tersebut,
            membershipnya tetap bisa dibekukan sampai peralatan dapat kembali
            normal. Tenang, Megafit telah mencoba menjaga sebanyak mungkin
            peralatan tetap tersedia.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Apakah kelas tetap ada?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Dengan mengacu pada aturan yang ditentukan dari pemerintah, ada
            beberapa Batasan pada kelas. Selagi menaati social distancing, kelas
            dapat diikuti secara online dan Megarangers bisa mengikuti kelas
            (apabila tetap menjaga social distancing). Apabila terdampak dengan
            perubahan ini, membership bisa dibekukan sampai kelas bisa
            berlangsung normal.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Bagaimana dengan jam operasional?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Saat ini jam operasional Megafit dapat dilihat di sosial media atau
            hubungi Megafit untuk info lanjut.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Saya belum siap untuk kembali ke Megafit, bisakah membership saya
            dibekukan?{' '}
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Kami mengerti bahwa tidak semua orang siap untuk kembali ke Megafit
            ketika buka kembali. Dengan demikian ketika buka, akun megarangers
            akan beku dan bisa kalian aktifkan kembali. Megarangers bisa log in
            & check status membershipnya. Megarangers bisa aktifkan kembali
            kapanpun.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Berapa biaya Member ketika buka kembali?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Ketika Megafit tutup 23 Maret, komitmen kami semua akun dibekukan
            dan semua pembayaran yang dilakukan akan disesuaikan terhadap paket
            yang dibelikan. Apa yang terjadi dengan pembayaran berikutnya
            tergantung pada kapan Megafit buka kembali dan kapan pembayaran
            terakhir (ini semua bisa dilihat melalui website bagian member).
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Bisakah saya membukakan akun Megarangers?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Megafit membekukan semua membership ketika tutup pada tanggal 23
            Maret 2020, dan akan tetap begitu sampai diaktifkan kembali. Setelah
            aktif membership akan jalan seperti biasa dan tidak dapat dibekukan
            kembali.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Apakah staf Megafit telah menggunakan APD?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Staf Megafit diwajibkan menggunakan APD sesuai kebutuhan yang
            ditentukan oleh penilaian resiko Megafit. Ini artinya ada beberapa
            kegiatan yang memerlukan APD lebih dibanding yang lain. Staff
            Megafit telah dilatih untuk kapan APD digunakan dan cara pemasangan
            dan perlepasan yang tepat dan benar. Ketika mengidentifikasi
            kebutuhan untuk APD, Megafit telah mengikuti saran & standar dari
            pemerintah dan Lembaga Kesehatan, serta lembaga Kesehatan
            internasional seperti World Health Organization.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Apakah Megarangers diwajibkan untuk membersihkan peralatan ketika
            sudah menggunakannya?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Megarangers diwajibkan untuk membersihkan peralatan setelah
            pengunaan. Apabila ini tidak diikuti, staff Megafit akan
            mengingatkan kembali untuk memastikan tingkat kebersihan kami tetap
            tinggi. Selain itu staf Megafit juga membersihkan peralatan secara
            teratur.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Bagaimana Megarangers memastikan yang lain untuk tidak mendekati?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Megafit telah bekerja keras untuk memastikan tata letak baru dari
            Megafit telah cukup secara jarak. Semua peralatan Megafit mengikuti
            pedoman pemerintah dalam memastikan jarak aman. Ketika menggunakan
            beban, Megafit ingin menghimbau agar para Megarangers untuk
            mempedulikan jaraknya terhadap lain dan menghargai tindakan social
            distancing yang berlaku. Jika ini tidak terjadi, harap hubungi salah
            satu staf Megafit untuk bantuan lebih lanjut.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Bagaimana Megafit bisa menjaga keamanan dari Megaranger yang bersiko
            tinggi?{' '}
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Megafit ingin semua Megaranger merasa aman di Megafit. Dengan
            demikian semua Megarangers harus mengikuti protocol & arahan
            pemerintah dan Lembaga Kesehatan. Ini termasuk “melindungi” orang
            rentan seperti mereka yang memiliki kesulitan pernafasan, dan
            kondisi medis lain yang bearti mereka berisiko lebih tinggi akibat
            COVID-19.
          </p>
          <p
            style={{
              margin: 0,
              marginTop: 10,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Apabila Megaranger belum bisa kembali ke Megafit karena hal diatas
            atau sedang isolasi diri, maupun belum siap untuk kembali ke Megafit
            akun Megaranger dibekukan sampai siap kembali.
          </p>
        </>

        {/* #MegafitAman FAQ */}
        <>
          <p
            style={{
              color: '#8fba2a',
              fontSize: isMobile ? '6vw' : 25,
              fontWeight: 'bold',
              marginTop: 30,
              marginBottom: 0,
            }}
          >
            #MegafitAman FAQ
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Apa itu #MegafitAman dan apa artinya untuk Megarangers?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            #MegafitAman adalah komitmen Megafit untuk menjaga keamanan
            Megarangers ketika olahraga di Megafit. Ini mencangkup semua hal
            yang telah Megafit lakukan, sedang dilakukan dan akan terus
            dilakukan untuk menjaga keamanan semua pihak selagi di Megafit. Ini
            merupakan sebuah pedoman dan aturan yang harus ditaati ketika berada
            di dalam Megafit. Dengan melakukan ini, semua pihak akan terasa aman
            untuk berlatih. Komitmen ini meliputi informasi kebersihan, langkah
            social distancing dan langkah masuk baru.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Apa langkah kebersihan #MegafitAman?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Melalui tindakan kebersihan #MegafitAman telah meningkatkan
            keseringan membersihkan peralatan. Megafit telah menyediakan
            Cleaning stations dan meminta Megarangers untuk melakukan bagiannya
            untuk membersihkan peralatan yang telah digunakan. Ini berarti
            setiap penggunaan peralatan, kesadaran Megarangers untuk
            membersihkan dengan spray sanitizer dan tisu yang telah disediakan.
            Megafit juga telah menyediakan dispenser sanitizer dan meminta semua
            Megarangers untuk menggunakannya ketika memasuki premis Megafit dan
            juga menyarankan untuk membersihkan tangan dengan sabun secara
            teratur.{' '}
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Apa langkah social distancing #MegafitAman?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Melalui langkah social distancing #MegafitAman memungkinkan Megafit
            untuk beroperasi sambil mengikuti pedoman Social Distancing. Ini
            bearti Megarangers perlu untuk menjaga jarak aman selama di Megafit.
            Untuk membantu ini, Megafit telah menaruh signage untuk membantu dan
            sistem 1 arah untuk beberapa tempat untuk membantu menjaga jarak.{' '}
          </p>
          <p
            style={{
              margin: 0,
              marginTop: 10,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Agar memastikan semua Megarangers dapat menggunakan fasilitas
            Megafit dengan aman, Megafit meminta Megarangers untuk menjaga
            laithan selama 2 jam agar yang lain dapat gunakan fasilitasnya juga.{' '}
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Apa langkah masuk baru dengan #MegafitAman?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Untuk menjaga jumlah orang dalam Megafit tetap aman, menjaga social
            distancing dan agar semua mendapatkan peralatan yang diinginkan,
            Megafit memperkenalkan #MegafitAman prosedur masuk. Megarangers
            diwajibkan untuk reservasi slot olaharganya terlebih dahulu, apabila
            slot penuh menandakan batas maksimum orang di Megafit.{' '}
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Apa itu Cleaning Stations dan dimana letaknya?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Cleaning station merupakan fitur baru di Megafit dan memberikan
            solusi sanitiser untuk perlatan dan hand sanitizer untuk
            Megarangers! Sebagai komitmen dari #MegafitAman, Megafit meminta
            Megarangers untuk menggunakan untuk menjaga kebersihan dan kemanan
            bagi member lain.{' '}
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Kenapa saya tidak bisa reservasi setelah melanggar salah satu aturan
            Megafit maupun komitmen #MegafitAman?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Megafit meminta semua megaranger untuk mengikuti komitmen
            #MegafitAman beserta aturan Megafit sebagai bagian dari perjanjian
            Keanggotaan. Pelanggaran terhadap salah satu komponen dapat
            menyebabkan ban langsung. Jika merasa diperlakukan tidak adil, bisa
            kirimkan pesan dengan ID dan tim kami akan bantu untuk melakukan
            pengecekan lebih lanjut.{' '}
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Saya melihat salah satu orang melanggar aturan / komitmen
            #MegafitAman, apa yang harus saya lakukan?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Megafit telah menciptapkan komitmen #MegafitAman untuk secara jelas
            menetapkan apa yang diperbolehkan atau tidak di Megafit selama
            langkah social distancing masih berlangsung. Ini juga
            mengklarifikasikan apa yang telah dijalankan dan memerlukan semua
            member untuk menaati. Staf Megafit melaksanakan langkah ini untuk
            menjaga keamanan member, dan meminta member untuk mengikuti arahan
            tersebut. Apabila Megaranger melihat pelanggaran, Megafit meminta
            untuk menginfokan kepada staff Megafit agar dapat diberikan teguran.
            Ini akan dilakukan dengan tenang dan diskrit, Megafit meminta
            Megaragers untuk tetap saling menghormati satu sama lainnya.
          </p>
          <p
            style={{
              margin: 0,
              marginTop: 10,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Menginformasikan pada saat itu juga akan memungkinkan Megafit untuk
            menegakkan tindakan dan melakukan koreksi, Megafit minta bahwa semua
            interaksi diserahkan kepada anggota staff terlatih Megafit.
          </p>
        </>

        {/* Kebersihan #MegafitAman FAQ */}
        <>
          <p
            style={{
              color: '#8fba2a',
              fontSize: isMobile ? '6vw' : 25,
              fontWeight: 'bold',
              marginTop: 30,
              marginBottom: 0,
            }}
          >
            Kebersihan #MegafitAman FAQ
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Apakah sanitizer & tisu disediakan selalu untuk member?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Megafit telah menaruh cleaning station yang dapat menyediakan
            santizer untuk digunakan ketika masuk ke Megafit, dan juga untuk
            membersihkan perlatan. Megafit meminta bantuan Megarangers untuk
            membersihkan peralatan setelah pengunaan agar mengurangi resiko
            penyebaran.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Apa yang dilakukan Megafit untuk menjaga kebersihan fasilitas dan
            peralatan?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Megafit senantiasa tetap menjaga standar mutu kebersihan agar tetap
            tinggi. Untuk mencapai ini, Megafit telah meningkatkan kebersihan
            fasilitas & peralatan, dan juga menyediakan peralatan kebersihan
            untuk Megarangers. Ini memastikan peralatan dibersikan secara
            berkala dan didekontaminasi. Megafit juga membersihkan secara
            menyeluruh setiap malam setelah tutup sehingga aman digunakan esok
            harinya.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Apa yang terjadi apabila produk kebersihan menipis?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Tim Megafit senantiasa memastikan stok produk kebersihan selalu
            tersedia. Jika Megarangers memperhatikan bahwa stok sudah sedikit
            bisa infokan kepada staf Megafit agar dapat diisi kembali.
          </p>

          <p
            style={{
              fontWeight: 'bold',
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
              margin: '20px 0px 10px 0px',
            }}
          >
            Kenapa Megarangers harus menggunakan tisu dan spray dan bukan handuk
            yang dibawa untuk membersihkan peralatan?
          </p>
          <p
            style={{
              margin: 0,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Megafit menjunjung tinggi & prioritaskan keamanan semua Megaranger
            agar Megafit aman untuk berlatih. Di situasi normal, handuk lebih
            dari cukup namun karena ikut kontribusi untuk mencegah penyebaran
            virus, spray disinfektan & tisu lebih efektif.{' '}
          </p>
          <p
            style={{
              margin: 0,
              marginTop: 10,
              color: '#707070',
              fontSize: isMobile ? '4vw' : 'auto',
            }}
          >
            Pengunaan handuk hanya untuk lap keringat dari tubuh, bukan untuk
            peralatan.
          </p>
        </>
      </Grid>
    </Grid>
  );
}
