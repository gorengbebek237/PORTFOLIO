document.addEventListener('DOMContentLoaded', () => {

/* =========================================
   1. NAVIGASI TAB SPA & HOT RELOAD (DEFAULT SECTION)
   ========================================= */
const tabLinks = document.querySelectorAll('a[href^="#"]');
const sections = document.querySelectorAll('.section');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

// Fungsi pembantu untuk mengaktifkan tab/section tertentu
function activateSection(targetId) {
    // 1. Highlight menu navbar yang sesuai
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === `#${targetId}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Tampilkan section target & sembunyikan section lainnya
    sections.forEach(section => {
        if (section.id === targetId) {
            section.classList.add('active-section');
        } else {
            section.classList.remove('active-section');
        }
    });
}

// Fungsi Inisialisasi saat Halaman Dimuat / Hot Reload
function initDefaultSection() {
    const hash = window.location.hash.substring(1); // Ambil ID dari URL (misal: "sertifikat")

    if (hash) {
        const targetElement = document.getElementById(hash);
        
        if (targetElement && targetElement.classList.contains('section')) {
            // Jika hash adalah Tab Utama (misal: #sertifikat), langsung buka tab tersebut
            activateSection(hash);
        } else if (targetElement) {
            // Jika hash adalah elemen non-tab (misal: #contact), buka #home lalu scroll ke elemen
            activateSection('home');
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            // Jika ID tidak ditemukan, fallback ke #home
            activateSection('home');
        }
    } else {
        // Jika tidak ada hash di URL (misal: localhost:5500/), default buka #home
        activateSection('home');
    }
}

// Event Listener Klik Tombol & Menu Navigasi
tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();
            const isMainSection = targetElement.classList.contains('section');

            if (isMainSection) {
                // Pindah Tab SPA
                activateSection(targetId);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Update hash di URL tanpa membuat halaman reload
                history.pushState(null, null, `#${targetId}`);
            } else {
                // Scroll ke elemen non-tab (Footer / Contact)
                const activeSection = document.querySelector('.section.active-section');
                if (!activeSection) activateSection('home');

                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            // Tutup menu mobile jika terbuka
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// Jalankan penentuan default section saat pertama kali script dimuat
initDefaultSection();

    // Toggle Mobile Navigation (Hamburger Menu)
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }


    /* =========================================
       2. DATA ARRAY SERTIFIKAT & PELATIHAN
       ========================================= */
    const certData = [
        {
            id: 1,
            type: "Pelatihan",
            title: "Identifikasi Kebutuhan Jaringan Komputer",
            issuer: "Universitas Gunadarma",
            logo: "images/logo-gunadarma.jpg",
            pdfUrl: "files/Identifikasi-Kebutuhan-Jaringan-Komputer.pdf",
            certImg: "images/sertifikat-routing.jpg",
            desc: "Completed a foundational networking certification program covering end-to-end network infrastructure setup. Gained practical and theoretical knowledge in OSI Layers, gathering user requirements, analyzing network devices, designing topologies, and executing network cable preparation and physical installation."
        },
        {
            id: 2,
            type: "Pelatihan",
            title: "Implementasi Koneksi Jaringan Komputer",
            issuer: "Universitas Gunadarma",
            logo: "images/logo-gunadarma.jpg",
            pdfUrl: "files/Implementasi-Koneksi-Jaringan-Komputer.pdf",
            certImg: "images/sertifikat-bnsp.jpg",
            desc: "Completed specialized training in core networking implementation, focusing on modern infrastructure setup and configuration. Key areas include network addressing (IPv4/IPv6), wireless network deployment, foundational switch configuration, and strategic selection of network devices to optimize performance."
        },
        {
            id: 3,
            type: "Pelatihan",
            title: "Membangun Website Menggunakan HTML 5",
            issuer: "Universitas Gunadarma",
            logo: "images/logo-gunadarma.jpg",
            pdfUrl: "files/Membangun-Website-Menggunakan-HTML-5.pdf",
            certImg: "images/sertifikat-security.jpg",
            desc: "Completed a comprehensive training program in modern HTML5 web development. Gained hands-on skills in core structuring elements, multimedia integration (audio/video), semantic tags (section/article), 2D graphics rendering using HTML5 Canvas, and successfully built a responsive simple website."
        },
        {
            id: 4,
            type: "Pelatihan",
            title: "Membuat Sistem Cerdas pada Perangkat IoT",
            issuer: "Universitas Gunadarma",
            logo: "images/logo-gunadarma.jpg",
            pdfUrl: "files/Membuat-Sistem-Cerdas-pada-Perangkat-IoT.pdf",
            certImg: "images/sertifikat-iot.jpg",
            desc: "Completed an advanced certification program in Internet of Things (IoT) engineering and embedded systems development. The curriculum covered implementing industrial K3 electronics safety standards, designing Printed Circuit Board (PCB) layouts, programming microcontrollers, establishing wired, wireless, and bus serial communications, and integrating microcontrollers with cloud databases to build smart, cloud-connected IoT systems."
        },
        {
            id: 5,
            type: "Pelatihan",
            title: "Merancang Embedded System Programming Mikrokontroler Berbasis Sistem Kontrol",
            issuer: "Universitas Gunadarma",
            logo: "images/logo-gunadarma.jpg",
            pdfUrl: "files/Merancang-Embedded-System-Programming.pdf",
            certImg: "images/sertifikat-mikro.jpg",
            desc: "Completed a comprehensive certification program in embedded systems and Internet of Things (IoT) engineering. The training covered standard electronics safety (K3) procedures, control systems-based microcontroller programming, multi-modal serial communications (wired, wireless, and bus modules), cloud database integration, and the deployment of cloud-based user interfaces for smart IoT systems."
        },
        {
            id: 6,
            type: "Pelatihan",
            title: "Optimalisasi Kinerja Jaringan Komputer",
            issuer: "Universitas Gunadarma",
            logo: "images/logo-gunadarma.jpg",
            pdfUrl: "files/Optimalisasi-Kinerja-Jaringan-Komputer.pdf",
            certImg: "images/sertifikat-switching.jpg",
            desc: "Completed specialized certification in network engineering, focusing on performance tuning, infrastructure upkeep, and strategic planning. The curriculum covered network optimization techniques to enhance throughput, routine network maintenance protocols for high availability, and comprehensive evaluation methodologies for future network development and scalability."
        },
        {
            id: 7,
            type: "Pelatihan",
            title: "Pelacakan dan Pemulihan Kerusakan Jaringan Komputer",
            issuer: "Universitas Gunadarma",
            logo: "images/logo-gunadarma.jpg",
            pdfUrl: "files/Pelacakan-dan-Pemulihan-Kerusakan-Jaringan.pdf",
            certImg: "images/sertifikat-pcb.jpg",
            desc: "Completed training in enterprise network troubleshooting, lifecycle management, and core routing architecture. The curriculum covered rapid impairment identification, systematic network failure repair, disaster recovery via backup and restore protocols, strategic network device replacement for hardware upgrades or new business requirements, and advanced routing configuration across Autonomous System (AS) numbers."
        },
        {
            id: 8,
            type: "Pelatihan",
            title: "Tata Kelola Keamanan Jaringan Komputer",
            issuer: "Universitas Gunadarma",
            logo: "images/logo-gunadarma.jpg",
            pdfUrl: "files/Tata-Kelola-Keamanan-Jaringan-Komputer.pdf",
            certImg: "images/sertifikat-python.jpg",
            desc: "Completed specialized certification in enterprise cybersecurity and network defense architectures. The curriculum covered secure network security design principles, disaster recovery planning, real-time security monitoring and user account access control, as well as incident response strategies for identifying and mitigating network attacks."
        },
        {
            id: 9,
            type: "Pelatihan",
            title: "Tata Kelola Pengalamatan dan Routing",
            issuer: "Universitas Gunadarma",
            logo: "images/logo-gunadarma.jpg",
            pdfUrl: "files/Tata-Kelola-Pengalamatan-dan-Routing.pdf",
            certImg: "images/sertifikat-web.jpg",
            desc: "Completed specialized training in enterprise network deployment and interior routing architecture. The curriculum covered advanced network addressing and IP subnetting schemes, physical and logical network device installation, and configuring dynamic routing protocols within a single Autonomous System (AS) number."
        }
    ];


    /* =========================================
       3. DETEKSI BAHASA & RENDERING DINAMIS
       ========================================= */
    const isIndonesian = navigator.language.startsWith('id');
    const INITIAL_ITEMS_COUNT = 3;
    let isExpanded = false;

    // Teks Terjemahan Otomatis Berdasarkan Perangkat
    const labels = {
    credBtn: isIndonesian ? 'Tampilkan kredensial' : 'Show credential',
    showAll: (total) => isIndonesian 
        ? `Tampilkan semua ${total} lisensi & sertifikasi →` 
        : `Show all ${total} licenses & certifications →`,
    hideAll: isIndonesian ? 'Sembunyikan sertifikasi ↑' : 'Show less ↑',
    modalTitle: isIndonesian ? 'Detail Sertifikasi' : 'Certification Details' // <-- Perbarui di sini
    };

    const certContainer = document.getElementById('certContainer');
    const certToggleBtn = document.getElementById('certToggleBtn');

    // Fungsi Render Kartu Sertifikat
    function renderCertifications() {
        if (!certContainer) return;
        
        certContainer.innerHTML = '';
        const itemsToDisplay = isExpanded ? certData : certData.slice(0, INITIAL_ITEMS_COUNT);

        itemsToDisplay.forEach((item) => {
            const card = document.createElement('div');
            card.className = 'cert-card';

            // Opsi B: Subtitle Format (Tipe • Penerbit)
            const subtitleText = `${item.type} • ${item.issuer}`;

            card.innerHTML = `
                <div class="cert-header">
                    <img src="${item.logo}" alt="${item.issuer}" class="cert-issuer-logo">
                    <div class="cert-info">
                        <h3>${item.title}</h3>
                        <p class="cert-subtitle">${subtitleText}</p>
                        
                        <!-- Direct Link PDF Kredensial -->
                        <a href="${item.pdfUrl}" target="_blank" rel="noopener noreferrer" class="cert-btn">
                            ${labels.credBtn} <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>

                <!-- Kartu Media (Trigger Modal Lightbox) -->
                <div class="cert-media-card" 
                     data-img="${item.certImg}" 
                     data-title="${item.title}" 
                     data-subtitle="${subtitleText}" 
                     data-desc="${item.desc}">
                    <div class="cert-media-text">
                        <h4>${item.title}</h4>
                        <p>${item.desc}</p>
                    </div>
                </div>
            `;

            certContainer.appendChild(card);
        });

        // Update Teks Tombol Toggle
        if (certToggleBtn) {
            if (certData.length <= INITIAL_ITEMS_COUNT) {
                certToggleBtn.style.display = 'none';
            } else {
                certToggleBtn.style.display = 'inline-block';
                certToggleBtn.textContent = isExpanded 
                    ? labels.hideAll 
                    : labels.showAll(certData.length);
            }
        }

        // Pasang ulang Event Listener untuk Modal pada kartu yang baru dirender
        attachModalEvents();
    }


    /* =========================================
       4. LOGIKA TOGGLE (SHOW ALL / LESS)
       ========================================= */
    if (certToggleBtn) {
        certToggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            renderCertifications();

            // Jika ditutup kembali, scroll halus ke atas area sertifikat
            if (!isExpanded) {
                document.getElementById('sertifikat').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }


    /* =========================================
       5. LOGIKA POP-UP MODAL LIGHTBOX
       ========================================= */
    const certModal = document.getElementById('certModal');
    const modalCertTitle = document.getElementById('modalCertTitle');
    const modalCertSubtitle = document.getElementById('modalCertSubtitle');
    const modalCertDesc = document.getElementById('modalCertDesc');
    const modalHeaderTitle = document.getElementById('modalHeaderTitle');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    const modalOverlay = document.querySelector('.modal-overlay');

    if (modalHeaderTitle) {
        modalHeaderTitle.textContent = labels.modalTitle;
    }

    function attachModalEvents() {
        const mediaCards = document.querySelectorAll('.cert-media-card');

        mediaCards.forEach(card => {
            card.addEventListener('click', () => {
                const img = card.getAttribute('data-img');
                const title = card.getAttribute('data-title');
                const subtitle = card.getAttribute('data-subtitle');
                const desc = card.getAttribute('data-desc');

                if (modalCertTitle) modalCertTitle.textContent = title;
                if (modalCertSubtitle) modalCertSubtitle.textContent = subtitle;
                if (modalCertDesc) modalCertDesc.textContent = desc;

                if (certModal) {
                    certModal.classList.add('modal-open');
                    certModal.setAttribute('aria-hidden', 'false');
                    document.body.style.overflow = 'hidden'; // Nonaktifkan scroll latar belakang
                }
            });
        });
    }

    function closeModal() {
        if (certModal) {
            certModal.classList.remove('modal-open');
            certModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto'; // Aktifkan kembali scroll
        }
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // Tutup modal dengan tombol Escape di keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && certModal && certModal.classList.contains('modal-open')) {
            closeModal();
        }
    });

    // Logika Pintar untuk Tombol Email (HP vs Laptop)
const emailBtn = document.getElementById('emailSocialBtn');

if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
        // Cek apakah pengguna menggunakan Desktop/Laptop
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (!isMobile) {
            // Jika di Laptop/PC, alihkan ke Gmail Web di tab baru
            e.preventDefault();
            window.open('https://mail.google.com/mail/?view=cm&fs=1&to=muham.luqman04@gmail.com', '_blank');
        }
        // Jika di HP, biarkan berjalan alami (membuka aplikasi Gmail bawaan HP)
    });
}
    // Jalankan render awal saat halaman siap
    renderCertifications();
});