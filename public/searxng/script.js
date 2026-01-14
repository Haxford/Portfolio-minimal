// Search functionality with DuckDuckGo integration

// Ensure homepage is shown on load
document.body.classList.remove('showing-results');

const searchInput = document.getElementById('q');
const clearBtn = document.getElementById('clear-btn');
const suggestionsDropdown = document.getElementById('suggestions');
const searchForm = document.getElementById('search-form');
const luckyBtn = document.getElementById('lucky-btn');
const resultsContainer = document.getElementById('results-container');
const resultsDiv = document.getElementById('results');
const smallSearchInput = document.getElementById('q-small');

let debounceTimer;

// Safety check - if elements don't exist, show error in console
if (!searchInput || !clearBtn || !searchForm) {
    console.error('Required elements not found. Check HTML structure.');
}

// Show/hide clear button based on input
if (searchInput) {
    searchInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            if (clearBtn) clearBtn.classList.add('visible');
            fetchSuggestions(this.value);
        } else {
            if (clearBtn) clearBtn.classList.remove('visible');
            hideSuggestions();
        }
    });
}

// Clear button functionality
if (clearBtn) {
    clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.focus();
        clearBtn.classList.remove('visible');
        hideSuggestions();
    });
}

// I'm Feeling Lucky button - takes you directly to first result
if (luckyBtn) {
    luckyBtn.addEventListener('click', async function() {
        const query = searchInput.value.trim();
        if (!query) return;
        
        // Show loading state on the button
        const originalText = luckyBtn.textContent;
        luckyBtn.textContent = 'Loading...';
        luckyBtn.disabled = true;

        try {
            // Use local proxy to get the first result
            const proxyUrl = `http://localhost:3000/search?q=${encodeURIComponent(query)}&type=all&page=1`;
            const response = await fetch(proxyUrl);
            
            if (!response.ok) throw new Error('Search failed');
            
            const data = await response.json();
            
            if (data && data.results && data.results.length > 0 && data.results[0].url) {
                window.location.href = data.results[0].url;
            } else {
                // Fallback if no results found locally
                alert('No results found for "I\'m Feeling Lucky"');
                luckyBtn.textContent = originalText;
                luckyBtn.disabled = false;
            }
        } catch (e) {
            console.error('Lucky search failed:', e);
            // Fallback to DuckDuckGo if local fails
            window.location.href = `https://duckduckgo.com/?q=!ducky+${encodeURIComponent(query)}`;
        }
    });
}

// Fetch search suggestions (disabled for SearXNG)
function fetchSuggestions() {
    // Autocomplete disabled - SearXNG doesn't provide autocomplete API
    hideSuggestions();
}

// Display suggestions in dropdown
function displaySuggestions(suggestions) {
    if (suggestions.length === 0) {
        hideSuggestions();
        return;
    }

    suggestionsDropdown.innerHTML = '';

    suggestions.slice(0, 8).forEach(suggestion => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.innerHTML = `
            <svg width="20" height="20">
                <use href="#icon-search"/>
            </svg>
            ${escapeHtml(suggestion)}
        `;

        item.addEventListener('click', function() {
            searchInput.value = suggestion;
            hideSuggestions();
            performSearch(suggestion);
        });

        suggestionsDropdown.appendChild(item);
    });

    suggestionsDropdown.classList.add('visible');
}

// Hide suggestions dropdown
function hideSuggestions() {
    suggestionsDropdown.classList.remove('visible');
    suggestionsDropdown.innerHTML = '';
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Hide suggestions when clicking outside
document.addEventListener('click', function(e) {
    if (!searchForm.contains(e.target)) {
        hideSuggestions();
    }
});

// Keyboard navigation for suggestions
if (searchInput && suggestionsDropdown) {
    searchInput.addEventListener('keydown', function(e) {
        const items = suggestionsDropdown.querySelectorAll('.suggestion-item');

        if (!items.length) return;

        const activeItem = suggestionsDropdown.querySelector('.suggestion-item.active');
        let currentIndex = Array.from(items).indexOf(activeItem);

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (activeItem) activeItem.classList.remove('active');
            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].classList.add('active');
            searchInput.value = items[currentIndex].textContent.trim();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (activeItem) activeItem.classList.remove('active');
            currentIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
            items[currentIndex].classList.add('active');
            searchInput.value = items[currentIndex].textContent.trim();
        } else if (e.key === 'Escape') {
            hideSuggestions();
        }
    });
}

// Handle form submission
if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        hideSuggestions();
        const query = searchInput.value.trim();
        if (query) {
            performSearch(query);
        }
    });
}

// Perform search and display results
function performSearch(query, searchType = 'all', page = 1) {
    if (!resultsContainer || !resultsDiv) {
        console.error('Results container or div not found!');
        return;
    }

    // Show results container and hide homepage elements
    document.body.classList.add('showing-results');
    resultsContainer.classList.add('visible');

    // Update URL without adding to history (prevents back button issues)
    const currentUrl = new URL(window.location);
    currentUrl.searchParams.set('q', query);
    currentUrl.searchParams.set('type', searchType);
    if (page > 1) {
        currentUrl.searchParams.set('page', page);
    } else {
        currentUrl.searchParams.delete('page');
    }
    window.history.replaceState({ search: query, type: searchType, page: page }, '', currentUrl);

    // Update small search box
    if (smallSearchInput) {
        smallSearchInput.value = query;
    }

    // Show loading spinner
    resultsDiv.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Searching for "${escapeHtml(query)}"...</p>
        </div>
    `;

    // Scroll to top
    window.scrollTo(0, 0);

    // Fetch results based on search type
    fetchDuckDuckGoResults(query, searchType, page);
}

// Fetch results via API Proxy (with fallback to Mock Data)
async function fetchDuckDuckGoResults(query, searchType = 'all', page = 1) {
    try {
        // Try the real API proxy first
        const proxyUrl = `/api/search?q=${encodeURIComponent(query)}&type=${searchType}&page=${page}`;
        const response = await fetch(proxyUrl);
        
        if (response.ok) {
            const data = await response.json();
            
            // If API returns valid results, use them
            if (data && data.results && data.results.length > 0) {
                const results = [];
                data.results.forEach(result => {
                    results.push({
                        title: result.title,
                        url: result.url,
                        description: result.content || result.title,
                        img_src: result.img_src,
                        thumbnail: result.thumbnail
                    });
                });
                displayResults(results, page, searchType);
                return;
            }
        }
        throw new Error('API failed or returned no results');

    } catch (e) {
        console.warn('API search failed, falling back to mock data:', e);
        // Fallback to Mock Data generator
        await fetchMockResults(query, searchType, page);
    }
}

// Fetch results (MOCK DATA FALLBACK)
async function fetchMockResults(query, searchType = 'all', page = 1) {
    // Simulate network delay for realism
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
        // Generate mock results based on the query
        const mockData = generateMockResults(query, searchType, page);
        
        // Build results array from mock response
        const results = [];

        if (mockData.results && mockData.results.length > 0) {
            mockData.results.forEach(result => {
                results.push({
                    title: result.title,
                    url: result.url,
                    description: result.content || result.title,
                    img_src: result.img_src,
                    thumbnail: result.thumbnail
                });
            });
        }

        // If no results, show a simple message
        if (results.length === 0) {
            resultsDiv.innerHTML = `
                <div class="no-results">
                    <h2>No results found</h2>
                    <p>Try searching for "linux", "neovim", or "haxford" to see demo results.</p>
                </div>
            `;
        } else {
            displayResults(results, page, searchType);
        }

    } catch (error) {
        console.error('Search error:', error);
        resultsDiv.innerHTML = `
            <div class="no-results">
                <h2>Search Error</h2>
                <p>Unable to fetch results at this time. Please try again later.</p>
            </div>
        `;
    }
}

// Generator for mock results so the UI actually works
function generateMockResults(query, type, page) {
    const q = query.toLowerCase();
    const results = [];
    
    // Easter egg for the creator
    if (q.includes('harry') || q.includes('axford') || q.includes('haxford')) {
        results.push({
            title: "Harry Axford - Portfolio",
            url: "https://haxford.dev",
            content: "The professional portfolio of Harry Axford. IT Technician, Linux Sysadmin, and Cloud Engineer.",
            img_src: "https://github.com/Haxford.png"
        });
        results.push({
            title: "Haxford (Harry Axford) · GitHub",
            url: "https://github.com/Haxford",
            content: "Harry Axford (Haxford) is a developer specializing in Linux, Neovim, and Cloud technologies.",
            img_src: "https://github.com/Haxford.png"
        });
    }

    // Generic results generator to fill the page
    const topics = [
        { title: `${query} - Wikipedia`, url: `https://en.wikipedia.org/wiki/${query}`, content: `${query} is a topic that many people find interesting. This is a mock search result generated for demonstration purposes.` },
        { title: `The Ultimate Guide to ${query}`, url: `https://example.com/guide/${query}`, content: `Everything you ever wanted to know about ${query}. Tutorials, guides, and expert advice.` },
        { title: `${query} Official Website`, url: `https://www.${query.replace(/\s+/g, '')}.com`, content: `Official home page for ${query}. Download, documentation, and support.` },
        { title: `Latest News about ${query}`, url: `https://news.example.com/${query}`, content: `Breaking news and latest updates regarding ${query} from around the world.` },
        { title: `How to configure ${query} on Arch Linux`, url: `https://wiki.archlinux.org/title/${query}`, content: `Arch Linux Wiki entry for ${query}. Installation, configuration, and troubleshooting.` },
        { title: `Best ${query} Alternatives in 2025`, url: `https://alternativeto.net/${query}`, content: `Find the best open-source alternatives to ${query}. User reviews and comparisons.` },
        { title: `Learn ${query} in 10 Minutes`, url: `https://youtube.com/watch?v=${query}`, content: `Fast-paced tutorial on getting started with ${query}.` },
        { title: `${query} Documentation`, url: `https://docs.${query.replace(/\s+/g, '')}.org`, content: `Comprehensive API reference and documentation for ${query}.` }
    ];

    // Add generic topics to results
    topics.forEach(t => results.push(t));

    // Add some random filler to make pagination look real
    for (let i = 0; i < 5; i++) {
        results.push({
            title: `${query} discussion on Reddit`,
            url: `https://reddit.com/r/${query}/comments/${i}`,
            content: `Join the discussion about ${query} on Reddit. Community questions, answers, and memes.`
        });
    }

    return { results };
}

// Display search results
function displayResults(results, currentPage = 1, searchType = 'all') {
    let html = `
        <div class="search-tabs">
            <div class="tab ${searchType === 'all' ? 'active' : ''}" data-type="all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
                </svg>
                All
            </div>
            <div class="tab ${searchType === 'images' ? 'active' : ''}" data-type="images">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="currentColor"/>
                </svg>
                Images
            </div>
            <div class="tab ${searchType === 'videos' ? 'active' : ''}" data-type="videos">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                </svg>
                Videos
            </div>
            <div class="tab ${searchType === 'news' ? 'active' : ''}" data-type="news">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                </svg>
                News
            </div>
            <div class="tab ${searchType === 'maps' ? 'active' : ''}" data-type="maps">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
                Maps
            </div>
            <div class="tab">More</div>
        </div>
        <div class="results-stats">About ${results.length} results</div>
    `;

    // Store current search type for tab clicks
    window.currentSearchType = searchType;

    // Display results based on search type
    if (searchType === 'images') {
        // Image grid layout
        html += '<div class="image-results-grid">';
        results.forEach(result => {
            html += `
                <a href="${escapeHtml(result.url)}" target="_blank" class="image-result-item">
                    <img src="${escapeHtml(result.img_src || result.thumbnail)}" alt="${escapeHtml(result.title)}" loading="lazy" onerror="this.parentElement.style.display='none'">
                    <div class="image-info">
                        <div class="image-title">${escapeHtml(result.title)}</div>
                        <div class="image-source">${escapeHtml(extractDomain(result.url))}</div>
                    </div>
                </a>
            `;
        });
        html += '</div>';
    } else {
        // Regular web results
        results.forEach(result => {
            const domain = extractDomain(result.url);
            const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;

            html += `
                <div class="result-item">
                    <div class="result-url">
                        <img src="${faviconUrl}" alt="" class="result-favicon" onerror="this.style.display='none'">
                        <span class="result-link">${escapeHtml(domain)}</span>
                    </div>
                    <a href="${escapeHtml(result.url)}" class="result-title" target="_blank">${escapeHtml(result.title)}</a>
                    <p class="result-description">${escapeHtml(result.description)}</p>
                </div>
            `;
        });
    }

    // Add pagination
    html += `
        <div class="pagination">
            <div class="pagination-container">
                <div class="page-logo">
                    <span class="page-letter page-o">o</span>
                    <span class="page-letter page-p">p</span>
                    <span class="page-letter page-e">e</span>
                    <span class="page-letter page-n">n</span>
                </div>
                <div class="page-controls">
                    <div class="page-numbers">
                        ${Array.from({length: 10}, (_, i) => {
                            const page = i + 1;
                            return `<span class="page-number ${page === currentPage ? 'active' : ''}">${page}</span>`;
                        }).join('')}
                    </div>
                    <button class="page-btn next-btn">
                        Next
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;

    resultsDiv.innerHTML = html;

    // Add click handlers for tabs
    document.querySelectorAll('.tab[data-type]').forEach(tab => {
        tab.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query, type, 1);
            }
        });
    });

    // Add click handlers for pagination
    document.querySelectorAll('.page-number').forEach(pageBtn => {
        pageBtn.addEventListener('click', function() {
            const page = parseInt(this.innerText);
            const query = searchInput.value.trim();
            if (query && page !== currentPage) {
                performSearch(query, searchType, page);
            }
        });
    });

    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query, searchType, currentPage + 1);
            }
        });
    }
}

// Extract domain from URL
function extractDomain(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace('www.', '');
    } catch {
        return url;
    }
}

// Allow searching from the small search box
if (smallSearchInput) {
    smallSearchInput.addEventListener('click', function() {
        this.removeAttribute('readonly');
        this.focus();
        this.select();
    });

    smallSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                searchInput.value = query;
                performSearch(query);
            }
        }
    });

    smallSearchInput.addEventListener('blur', function() {
        this.setAttribute('readonly', 'readonly');
    });
}

// Click logo in results to go back to homepage
const logoSmallContainer = document.querySelector('.logo-small-container');
if (logoSmallContainer) {
    logoSmallContainer.addEventListener('click', function() {
        // Go back to homepage
        document.body.classList.remove('showing-results');
        resultsContainer.classList.remove('visible');
        searchInput.value = '';
        clearBtn.classList.remove('visible');

        // Update URL to remove search parameter
        const currentUrl = new URL(window.location);
        currentUrl.searchParams.delete('q');
        window.history.replaceState({}, '', currentUrl);
    });
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    if (query) {
        // Show search results
        searchInput.value = query;
        performSearch(query);
    } else {
        // Show homepage
        document.body.classList.remove('showing-results');
        resultsContainer.classList.remove('visible');
        searchInput.value = '';
        clearBtn.classList.remove('visible');
    }
});

// Check URL on page load for search parameter
window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    const type = urlParams.get('type') || 'all';
    const page = parseInt(urlParams.get('page')) || 1;

    if (query) {
        searchInput.value = query;
        performSearch(query, type, page);
    }
});
