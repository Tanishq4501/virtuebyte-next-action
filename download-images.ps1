# Download all images from WordPress site to public/images/
# Run from project root: .\download-images.ps1

$baseDir = "d:\VI\virtubyte-next\public\images"

# Create all directories
$dirs = @(
    "$baseDir\logos",
    "$baseDir\home",
    "$baseDir\banners",
    "$baseDir\about",
    "$baseDir\partners",
    "$baseDir\clients",
    "$baseDir\services",
    "$baseDir\products",
    "$baseDir\case-studies",
    "$baseDir\blog",
    "$baseDir\favicons"
)
foreach ($d in $dirs) {
    New-Item -ItemType Directory -Path $d -Force | Out-Null
}

# Mapping: local path => WordPress URL
$images = @{
    # Logos
    "logos\virtuebyte-logo.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/Virtuebyte-with-salesforce.png"
    "logos\vb-logo.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/VB_Logo.png"

    # Favicons
    "favicons\favicon-32x32.png" = "https://virtuebytech.com/wp-content/uploads/2025/02/cropped-Fevicon-01-32x32.png"
    "favicons\apple-touch-icon.png" = "https://virtuebytech.com/wp-content/uploads/2025/02/cropped-Fevicon-01-180x180.png"

    # Home
    "home\hero-banner.png" = "https://virtuebytech.com/wp-content/uploads/2025/06/Virtuebyte-Banner-2-PNG__-1024x1024.png"
    "home\tech-stack.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Techno-Stack-01-1024x587.png"
    "home\why-choose-us.jpg" = "https://virtuebytech.com/wp-content/uploads/elementor/thumbs/Why-choose-us-ri0wg3kzfpfty1qa3pb9jnqoswnofcjjelq97aujds.jpg"
    "home\world-map-bg.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/Group-6-57cdf404.png"
    "home\cta-image.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/DeWatermark.ai_1735576248038-1.png"

    # Banners
    "banners\sub-page-hero-img.webp" = "https://virtuebytech.com/wp-content/uploads/2025/01/b-01-1024x683.png"

    # Background
    "bg2.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design.jpg"

    # Partners
    "partners\startup-india.png" = "https://virtuebytech.com/wp-content/uploads/2025/06/startup-india-hub-logo-vector-2-1.png"
    "partners\salesforce.png" = "https://virtuebytech.com/wp-content/uploads/2025/06/Expertise-Produkte-Salesforce-1-1.png"
    "partners\aws-partner.png" = "https://virtuebytech.com/wp-content/uploads/2025/06/AWS-Partner-Logo-1024x281.png"
    "partners\tie-global.png" = "https://virtuebytech.com/wp-content/uploads/2025/06/TiE-Global-white-H-1.png"

    # Clients
    "clients\client-1.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/comit.jpg"
    "clients\client-2.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/gloss.jpg"
    "clients\client-3.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/444.png"
    "clients\client-4.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/shivkrupa.jpg"
    "clients\client-5.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/e10.jpg"
    "clients\client-6.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/MICRO.png"
    "clients\client-7.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/841.jpg"
    "clients\client-8.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/gapeseed-logo-08.jpg"
    "clients\client-9.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/pandit_shivkumar_logo-01.jpg"
    "clients\client-10.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/Printtex-logo-2-01.jpg"
    "clients\client-11.jpg" = "https://virtuebytech.com/wp-content/uploads/2026/01/Flora.jpg"

    # About
    "about\about-hero.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-2-816x1024.png"
    "about\vision.jpeg" = "https://virtuebytech.com/wp-content/uploads/2026/01/vision-1.jpeg"
    "about\mission.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/mission2.png"
    "about\life-1.jpg" = "https://virtuebytech.com/wp-content/uploads/2026/01/gathering-1024x683.jpeg"
    "about\life-2.jpg" = "https://virtuebytech.com/wp-content/uploads/2026/01/Kalash.jpg"
    "about\life-3.jpg" = "https://virtuebytech.com/wp-content/uploads/2026/01/images-1.jpg"
    "about\life-4.webp" = "https://virtuebytech.com/wp-content/uploads/2026/01/ResQ-1.jpg"
    "about\collaboration.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-3.jpg"
    "about\transparency.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-3.png"
    "about\commitments.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/09/image-2.jpg"
    "about\continuity.gif" = "https://virtuebytech.com/wp-content/uploads/2025/01/E9.gif"
    "about\relationship.gif" = "https://virtuebytech.com/wp-content/uploads/2025/01/E6.gif"

    # Services (listing card images)
    "services\salesforce-implementation.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/06/Salesforce-Implementation-1024x576.jpg"
    "services\ai-ml-consulting.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/Customer-Centric-Marketing-ai-min.png"
    "services\data-science-analytics.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-12.png"
    "services\offshore-development-centers.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-4.png"
    "services\cloud-services.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-5.png"
    "services\devops-consulting-services.png" = "https://virtuebytech.com/wp-content/uploads/2026/01/DevOps-Consulting-Services-1024x683.png"

    # Service detail images
    "services\sf-implementation-customization.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/06/salesforce-implementation-customizations-1024x683.jpg"
    "services\crm-strategy.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/06/CRM-strategy-and-customizations-1024x646.jpg"
    "services\appexchange.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/06/App-exchange-App-Setup-custom-Development-1024x683.jpg"
    "services\ongoing-support.png" = "https://virtuebytech.com/wp-content/uploads/elementor/thumbs/new-e1768223715397-ri0wgjkg9jmn4m2l9utlfuk255bo3e6g17qyjlwfhs.png"
    "services\ai-integration.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/1-2.png"
    "services\ai-conversational.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/2-1.png"
    "services\data-prep.png" = "https://virtuebytech.com/wp-content/uploads/2026/01/Data-Preparation-Preprocessing-1024x683.png"
    "services\ml-model-dev.png" = "https://virtuebytech.com/wp-content/uploads/2026/01/ML-Model-Developement-1024x683.png"
    "services\data-collection.png" = "https://virtuebytech.com/wp-content/uploads/2026/01/Data-Collection-Integration-1024x683.png"
    "services\data-preprocessing.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/3-2.png"
    "services\data-visualization.jpg" = "https://virtuebytech.com/wp-content/uploads/2024/12/data-vis.jpg"
    "services\consultation.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/4-1.png"
    "services\development.png" = "https://virtuebytech.com/wp-content/uploads/elementor/thumbs/Development-and-Project-Execution1-e1768224397418-ri0wghoy4exdqj9ktchthu3xfnalngyi9t9jhubuv4.png"
    "services\recruitment.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/4-2.png"
    "services\scalability.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/4-3.png"
    "services\it-hr-support.png" = "https://virtuebytech.com/wp-content/uploads/2026/01/Dedicated-IT-and-HR-support-1024x683.png"
    "services\full-cycle-teams.png" = "https://virtuebytech.com/wp-content/uploads/elementor/thumbs/freepik__upload__51616-ri0wg1pow8bi95wsenl5tg53c3hd0m72jm6ac4zjsw.jpeg"
    "services\cloud-migration.png" = "https://virtuebytech.com/wp-content/uploads/2026/01/Cloud-Migration-1024x683.png"
    "services\cloud-integration.png" = "https://virtuebytech.com/wp-content/uploads/2026/01/Cloud-Migration1-1024x683.png"
    "services\enterprise-cloud.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/6-2.png"
    "services\infrastructure.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/6.png"
    "services\security-compliance.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/7.png"
    "services\microservices.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/2-6.png"
    "services\devops-consulting.png" = "https://virtuebytech.com/wp-content/uploads/2026/01/DevOps-Consulting-Services-1-1024x683.png"
    "services\cicd.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/3-5.png"
    "services\config-management.png" = "https://virtuebytech.com/wp-content/uploads/2026/01/DevOps-Consulting-Services-3-1024x683.png"

    # Products
    "products\virtuelite-thumb.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-2-1.png"
    "products\virtuelite-laptop.jpg" = "https://virtuebytech.com/wp-content/uploads/2024/12/laptop1-03e54f62.jpg"
    "products\virtuelite-workflow.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/1-8d457682-1024x366.png"
    "products\virtuelite-features.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/ops.gif"
    "products\virtunest-thumb.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/nest.jpg"
    "products\virtunest-hero.jpg" = "https://virtuebytech.com/wp-content/uploads/2024/12/freepik__upload__11396-1024x683.jpeg"

    # Case Studies
    "case-studies\salesforce-inventory.jpg" = "https://virtuebytech.com/wp-content/uploads/2024/12/2-8.png"
    "case-studies\erp.png" = "https://virtuebytech.com/wp-content/uploads/2025/06/Salesforce-Implementation-1024x576.jpg"
    "case-studies\edutech.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/Customer-Centric-Marketing-ai-min.png"
    "case-studies\manufacturing.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-12.png"
    "case-studies\real-estate.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-4.png"
    "case-studies\travel.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-5.png"

    # Blog
    "blog\bi-manufacturing.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/2-8.png"
    "blog\dmg-with-salesforce.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/09/DMG-with-Salesforce-1-1-1024x683.jpg"
    "blog\ml-test-generation.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/3-5.png"
    "blog\spam-movie-review.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/2-6.png"
}

$total = $images.Count
$current = 0
$failed = @()

foreach ($entry in $images.GetEnumerator()) {
    $current++
    $localPath = Join-Path $baseDir $entry.Key
    $url = $entry.Value
    
    Write-Host "[$current/$total] Downloading: $($entry.Key)" -ForegroundColor Cyan
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $localPath -UseBasicParsing -TimeoutSec 30
        Write-Host "  OK" -ForegroundColor Green
    }
    catch {
        Write-Host "  FAILED: $($_.Exception.Message)" -ForegroundColor Red
        $failed += $entry.Key
    }
}

Write-Host "`n=== DONE ===" -ForegroundColor Yellow
Write-Host "Downloaded: $($total - $failed.Count) / $total" -ForegroundColor Green
if ($failed.Count -gt 0) {
    Write-Host "Failed:" -ForegroundColor Red
    $failed | ForEach-Object { Write-Host "  $_" -ForegroundColor Red }
}
