export function Navbar() {
    return `
    <nav class="navbar">
        <div class="container"> 
          <!-- Logo -->
          <a href="/" class="logo">
            <i data-lucide="rocket" id="navbar-icon"></i>
            <div class="logo-text">Orbitly</div>
          </a>  
          <!-- Desktop Links -->
          <div class="nav-links">
            <a href="/" class="nav-link">Home</a>
            <a href="/support" class="nav-link">Support</a>
            <a href="/dashboard" class="nav-link">Dashboard</a>
          </div>    
          <!-- Desktop Actions -->
          <div class="nav-actions">
            <a href="/support" class="nav-link">Contact Support</a>
            <a href="/dashboard" class="gradient-btn">Start Free Trial</a>
          </div>    
          <!-- Mobile Button -->
            <button class="mobile-toggle" id="mobileToggle">
                <i data-lucide="menu"></i>
            </button>
        </div>  
        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobileMenu">
          <a href="/" class="nav-link">Home</a>
          <a href="/support" class="nav-link">Support</a>
          <a href="/dashboard" class="nav-link">Dashboard</a>
        </div>
    </nav>
    `
}