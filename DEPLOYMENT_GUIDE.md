# SwiftTechAI - Production Deployment Guide

## Hosting Information
- **Provider**: Unified Layer
- **Web Server**: Apache
- **Domain**: swifttech.in
- **Build Directory**: `dist/public/`

## Production Build Status ✅
The project has been successfully built for production:
- Frontend optimized and minified in `dist/public/`
- All assets bundled and compressed
- .htaccess configuration created for Apache routing

## Deployment Steps

### 1. Upload Files via FTP/SFTP
**Using FTP client (FileZilla, WinSCP, Cyberduck, etc.):**

1. Connect to your Unified Layer server:
   - Host: Your server hostname (from Unified Layer control panel)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)

2. Navigate to the public_html directory

3. Upload all files from `dist/public/`:
   ```
   dist/public/
   ├── .htaccess (IMPORTANT - enables routing)
   ├── index.html
   ├── assets/ (all JS, CSS, images)
   └── generated_images/ (background images)
   ```

4. **Important**: Ensure `.htaccess` file is uploaded (some FTP clients hide dot files by default)

### 2. Verify File Permissions
In your hosting control panel or via SSH:
- `.htaccess`: 644 permissions
- `index.html`: 644 permissions
- `assets/` directory: 755 permissions
- Other files: 644 permissions

### 3. Update DNS (if needed)
If swifttech.in is not already pointing to Unified Layer:
1. Log in to your domain registrar
2. Update nameservers to Unified Layer's nameservers (from your welcome email)
3. Wait 24-48 hours for DNS propagation

### 4. Test the Deployment
After uploading, visit:
- https://swifttech.in - Should show homepage
- https://swifttech.in/about - Should show about page
- https://swifttech.in/careers - Should show careers page
- https://swifttech.in/industries - Should show industries page
- https://swifttech.in/contact - Should show contact page
- https://swifttech.in/engineers - Should show engineers page

### 5. Enable HTTPS (SSL Certificate)
1. Log in to Unified Layer control panel (cPanel/WHM)
2. Navigate to SSL/TLS section
3. Install a free SSL certificate (AutoSSL) or generate one
4. Verify HTTPS works: https://swifttech.in

### 6. Configure Email (Optional)
If you want to use contact form emails:
1. Ensure SMTP is configured in your server settings
2. Verify mail server credentials
3. Test contact form on the website

## Important Files

### .htaccess
- **Location**: Root of public_html directory
- **Purpose**: Enables SPA routing, compression, caching
- **What it does**:
  - Rewrites all requests to index.html (for React Router)
  - Enables gzip compression
  - Sets cache headers for optimal performance
  - Excludes /assets/ folder from rewrites

### index.html
- **Location**: Root of public_html directory
- **Contains**: React app entry point, favicon link to LOGO_1773945599109.png

### assets/
- **Location**: public_html/assets/
- **Contains**: JavaScript bundles, CSS, images, logos
- **Minified and optimized for production**

## Troubleshooting

### Pages showing 404 errors
- Verify `.htaccess` is uploaded to public_html
- Check that mod_rewrite is enabled on your server (contact support if not)
- Ensure file permissions are correct (644 for .htaccess)

### Images not loading
- Verify assets/ directory was uploaded completely
- Check browser console for 404 errors
- Ensure proper file permissions (644) on image files

### Slow loading
- Clear browser cache (Ctrl+Shift+Del)
- Verify gzip compression is enabled (.htaccess handles this)
- Check Unified Layer control panel for server load

### SSL Certificate issues
- Generate/renew certificate through control panel
- Wait for AutoSSL renewal (usually automatic)
- Test at https://swifttech.in

## Support Contacts

- **Unified Layer Support**: Check your welcome email or control panel
- **Domain Issues**: Contact your registrar
- **SSL Issues**: Unified Layer support or use Let's Encrypt

## Production Checklist ✅

- [x] Production build created (npm run build)
- [x] .htaccess file configured for Apache
- [ ] Files uploaded to public_html via FTP
- [ ] DNS pointing to Unified Layer (if needed)
- [ ] File permissions set correctly
- [ ] HTTPS/SSL certificate installed
- [ ] All pages tested and loading correctly
- [ ] Contact form tested (if applicable)
- [ ] Images and assets loading properly
- [ ] Dark mode tested
- [ ] Mobile responsiveness verified

## Quick Deploy Commands (SSH)

If you have SSH access, you can deploy with:

```bash
# Connect to server
ssh username@your-server-host

# Navigate to public_html
cd ~/public_html

# Delete old files
rm -f index.html
rm -rf assets
rm -rf generated_images
rm -f .htaccess

# Upload new files (from your local machine, run this instead):
sftp username@your-server-host
cd public_html
put -r dist/public/* ./
```

---

**Deployment Ready!** All files are optimized and ready for production. Follow the FTP upload steps above to go live.
