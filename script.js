// Menunggu hingga seluruh halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Dark mode
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Fungsi untuk mengaktifkan dark mode
    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Simpan preferensi
        if (darkModeToggle) {
            darkModeToggle.querySelector('span').textContent = 'light_mode'; // Ubah ikon
        }
    };

    // Fungsi untuk menonaktifkan dark mode
    const disableDarkMode = () => {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Simpan preferensi
         if (darkModeToggle) {
            darkModeToggle.querySelector('span').textContent = 'dark_mode'; // Ubah ikon
        }
    };

    // Cek preferensi tema dari local storage saat halaman dimuat
    if (localStorage.getItem('theme') === 'dark') {
        enableDarkMode();
    }

    // Event listener untuk tombol toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }

    // Menambahkan efek klik pada semua kartu buku agar mengarah ke halaman detail
    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Cek jika yang diklik bukan link di dalam card
            if (event.target.tagName !== 'A' && !event.target.closest('a')) {
                const link = card.querySelector('a');
                if (link && link.href) {
                    window.location.href = link.href; // Arahkan ke link detail
                }
            }
        });
    });

});

// Logika untuk tombol "View All"
const viewAllButtons = document.querySelectorAll('.view-all-btn');
viewAllButtons.forEach(button => {
    button.addEventListener('click', function() {
        const parentSection = this.closest('.category-section, .popular-section');
        if (parentSection) {
            const hiddenBooks = parentSection.querySelectorAll('.book-card.hidden-book');
            hiddenBooks.forEach(book => {
                book.classList.remove('hidden-book');
            });
            this.style.display = 'none'; // Sembunyikan tombol setelah diklik
        }
    });
});

// --- Search Bar ---
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('keyup', function() {
        const searchQuery = searchInput.value.toLowerCase().trim();
        const allSections = document.querySelectorAll('.category-section'); 
        // asumsi tiap kategori dibungkus div .category-section

        allSections.forEach(section => {
            const bookGrid = section.querySelector('.book-grid');
            const allBooks = bookGrid.querySelectorAll('.book-card');
            const noResultsMessage = section.querySelector('.no-results-message');
            let visibleBookCount = 0;

            allBooks.forEach(book => {
                const title = book.querySelector('.book-info h3')?.textContent.toLowerCase() || '';
                const author = book.querySelector('.book-info p')?.textContent.toLowerCase() || '';
                const genre = book.querySelector('.book-cover .tag')?.textContent.toLowerCase() || '';

                if (title.includes(searchQuery) || author.includes(searchQuery) || genre.includes(searchQuery)) {
                    book.style.display = 'block';
                    visibleBookCount++;
                } else {
                    book.style.display = 'none';
                }
            });

            // kontrol pesan untuk kategori ini aja
            if (noResultsMessage) {
                noResultsMessage.style.display = visibleBookCount > 0 ? 'none' : 'block';
            }
        });
    });
}


const borrowButton = document.getElementById('borrow-btn');
if (borrowButton) {
    borrowButton.addEventListener('click', function() {
        alert('Proses peminjaman buku Anda dimulai!');
    });
}

const addWishlistButton = document.getElementById('add-wishlist-btn');
if (addWishlistButton) {
    addWishlistButton.addEventListener('click', function() {
        alert('Buku telah ditambahkan ke Wishlist Anda!');
    });
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been received.');
    this.reset();
});

        