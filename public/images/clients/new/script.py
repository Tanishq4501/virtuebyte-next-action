import os
import requests

urls = [
    "https://mainnovation.in/wp-content/uploads/2024/01/8.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_-3-yz3jsn93-tGeAUvAGqVYyn9DB-qncw&s",
    "https://internsbee.com/wp-content/uploads/2023/07/logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWUeqA3lSYSHjzSYWj-T93aOeoelhkDIqaA&s",
    "https://www.panditshivkumar124.com/wp-content/uploads/2022/02/psk124_logo-r-mark_75hX187w.png",
    "https://grapeseedconsultants.net/wp-content/uploads/2023/10/grapeseed-logo-retina.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KmEB_6heiGKNFbLfLUNDyjXUR9rB0jx-Mg&s",
    "https://media.licdn.com/dms/image/sync/v2/D4E27AQGLGsEGvvIoLQ/articleshare-shrink_800/B4EZiE22kEGUAM-/0/1754575629643?e=2147483647&v=beta&t=0PD2ENZUrblj9XZsaWgeWPYd58GIn5RDMQ_8l-XIqVA",
    "https://www.tra.org.bh/images/TRA-sticky-logo.png",
    "https://media.licdn.com/dms/image/v2/C560BAQGVL-rYSaj23g/company-logo_200_200/company-logo_200_200/0/1660063833918/fusionstak_llc_logo?e=1776297600&v=beta&t=Vg86XfuqOkFvWmSLwZ3NlW9CnD4QmB7dzKW8ZTRapaY"
]

os.makedirs("images", exist_ok=True)

for i, url in enumerate(urls):
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()

        # Try to get extension
        ext = "png"
        if "image" in response.headers.get("Content-Type", ""):
            ext = response.headers["Content-Type"].split("/")[-1]

        filename = f"images/img_{i+1}.{ext}"

        with open(filename, "wb") as f:
            f.write(response.content)

        print(f"Downloaded: {filename}")

    except Exception as e:
        print(f"Failed: {url} -> {e}")