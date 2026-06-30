# Fix wrong image mappings - re-download correct images from WordPress
# Run from project root: .\fix-images.ps1

$baseDir = "d:\VI\virtubyte-next\public\images"

$fixes = @{
    # Services listing card images (5 wrong)
    "services\ai-ml-consulting.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/1-2.png"
    "services\data-science-analytics.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/2-1.png"
    "services\offshore-development-centers.png" = "https://virtuebytech.com/wp-content/uploads/2026/01/Dedicated-IT-and-HR-support-1024x683.png"
    "services\cloud-services.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/4-1.png"
    "services\devops-consulting-services.png" = "https://virtuebytech.com/wp-content/uploads/2026/01/DevOps-Consulting-Services-3-1024x683.png"

    # Case study images (ALL 6 wrong)
    "case-studies\salesforce-inventory.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-3.jpg"
    "case-studies\erp.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/b-01-1024x683.png"
    "case-studies\edutech.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-5.png"
    "case-studies\manufacturing.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-3.png"
    "case-studies\real-estate.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-2-1.png"
    "case-studies\travel.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-4.png"

    # Blog images (2 wrong - swapped)
    "blog\ml-test-generation.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/3-2.png"
    "blog\spam-movie-review.png" = "https://virtuebytech.com/wp-content/uploads/2024/12/3-5.png"

    # About values (2 wrong)
    "about\collaboration.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/e10.jpg"
    "about\transparency.png" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design-12.png"

    # Products (1 wrong)
    "products\virtuelite-thumb.jpg" = "https://virtuebytech.com/wp-content/uploads/2025/01/Untitled-design.jpg"

    # About gallery (4 wrong - used gathering/Kalash instead of WhatsApp images)
    "about\life-1.jpg" = "https://virtuebytech.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-27-at-4.32.07-PM-2-scaled.jpeg"
    "about\life-2.jpg" = "https://virtuebytech.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-27-at-4.32.07-PM-1-scaled.jpeg"
    "about\life-3.jpg" = "https://virtuebytech.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-27-at-4.35.21-PM-scaled.jpeg"
    "about\life-4.webp" = "https://virtuebytech.com/wp-content/uploads/2026/01/life-at-vb.webp"
}

$total = $fixes.Count
$current = 0
$failed = @()

foreach ($entry in $fixes.GetEnumerator()) {
    $current++
    $localPath = Join-Path $baseDir $entry.Key
    $url = $entry.Value
    
    Write-Host "[$current/$total] Fixing: $($entry.Key)" -ForegroundColor Cyan
    
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
Write-Host "Fixed: $($total - $failed.Count) / $total" -ForegroundColor Green
if ($failed.Count -gt 0) {
    Write-Host "Failed:" -ForegroundColor Red
    $failed | ForEach-Object { Write-Host "  $_" -ForegroundColor Red }
}
